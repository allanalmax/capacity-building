using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;

namespace SpendSmart.Models
{
    //public class SpendSmartDbContext : DbContext
    //{
    //    public DbSet<Expense> Expenses { get; set; }

    //    public SpendSmartDbContext(DbContextOptions<SpendSmartDbContext> options)
    //        :base(options)
    //    {
            
    //    }
    //}
    public class SpendSmartDbContext
    {
        private readonly IMongoDatabase _database;

        public SpendSmartDbContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetConnectionString("MongoConnection"));
            _database = client.GetDatabase(configuration["spendsmart"]);
        }

        public IMongoCollection<Expense> Expenses => _database.GetCollection<Expense>("Expenses");
    }
}
