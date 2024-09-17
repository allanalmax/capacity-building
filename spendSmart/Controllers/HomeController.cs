using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SpendSmart.Models;
using System.Diagnostics;
using MongoDB.Driver;
using System.Linq;

namespace SpendSmart.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly IMongoCollection<Expense> _expensesCollection;

        public HomeController(ILogger<HomeController> logger, IMongoCollection<Expense> expensesCollection)
        {
            _logger = logger;
            _expensesCollection = expensesCollection;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Expenses()
        {
            var allExpenses = _expensesCollection.Find(expense => true).ToList();

            var totalExpenses = allExpenses.Sum(x => x.Value);

            ViewBag.Expenses = totalExpenses;

            return View(allExpenses);
        }

        [HttpPost]
        public IActionResult CreateEditExpense(string? id)
        {
            if(id != null)
            {
                // editing -> load an expense by id
                var expenseInDb = _expensesCollection.Find(expense => expense.Id == id).SingleOrDefault();
                return View(expenseInDb);
            }

            return View();
        }

        public IActionResult DeleteExpense(string id)
        {
            //var expenseInDb = _context.Expenses.SingleOrDefault(expense => expense.Id == id);
            //_context.Expenses.Remove(expenseInDb);
            //_context.SaveChanges();
            _expensesCollection.DeleteOne(expense => expense.Id == id);
            return RedirectToAction("Expenses");
        }

        public IActionResult CreateEditExpenseForm (Expense model)
        {
            if(string.IsNullOrEmpty(model.Id))
            {
                //create
                _expensesCollection.InsertOne(model);
            } else
            {
                //Editing
                _expensesCollection.ReplaceOne(expense => expense.Id == model.Id, model);
            }

            return RedirectToAction("Expenses");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
