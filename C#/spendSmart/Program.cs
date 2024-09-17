using Microsoft.EntityFrameworkCore;
using SpendSmart.Models;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using HealthChecks.UI.Client;
using HealthChecks.UI.Configuration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MongoDB.Driver;
using System;

namespace SpendSmart
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

            var configuration = builder.Configuration;
            
            //Mongo setup
            var MongoClient = new MongoClient(configuration.GetConnectionString("MongoConnection"));
            var database = MongoClient.GetDatabase("SpendSmartDb");

            // Dependency injection
            builder.Services.AddSingleton<IMongoClient>(MongoClient);
            builder.Services.AddScoped(sp => database.GetCollection<Expense>("Expenses"));


            // Add services to the container.
            builder.Services.AddControllersWithViews();

            // HealthCheck Middleware
            builder.Services.AddHealthChecks();
            builder.Services.AddHealthChecksUI();

            // Configuring health check
            builder.Services.ConfigureHealthChecks(builder.Configuration);

            //builder.Services.AddSingleton<SpendSmartDbContext>();

            //builder.Services.AddDbContext<SpendSmartDbContext>(options =>
            //    options.UseInMemoryDatabase("SpendSmartDb")
            //);
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.MapHealthChecks("/api/health", new HealthCheckOptions()
            {
                Predicate = _ => true,
                ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
            });
            app.UseHealthChecksUI(delegate (Options options)
            {
                options.UIPath = "/healthcheck-ui";
                //  options.AddCustomStylesheet("./HealthCheck/Custom.css");
            });

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}
