using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.Extensions.Configuration;
using HealthChecks.UI.Client;
using Microsoft.Extensions.DependencyInjection;

namespace SpendSmart
{
    public static class HealthChecks
    {
        public static void ConfigureHealthChecks(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddHealthChecks()
                //.AddSqlServer(
                //    configuration["ConnectionStrings:DefaultConnection"],
                //    healthQuery: "SELECT 1",
                //    name: "SQL Server",
                //    failureStatus: HealthStatus.Unhealthy,
                //    tags: new[] { "Feedback", "Database" }
                //);
                .AddMongoDb(
                    mongodbConnectionString: configuration["ConnectionStrings:MongoConnection"],
                    name: "MongoDB",
                    failureStatus: HealthStatus.Unhealthy,
                    tags: new[] {"db", "nosql", "mongo" });

            //services.AddHealthChecksUI();
            services.AddHealthChecksUI(opt =>
            {
                opt.SetEvaluationTimeInSeconds(10); // time in seconds between checks    
                opt.MaximumHistoryEntriesPerEndpoint(60); // maximum history of checks    
                opt.SetApiMaxActiveRequests(1); // API requests concurrency    
                opt.AddHealthCheckEndpoint("feedback api", "/api/health"); // map health check API    
            })
            .AddInMemoryStorage();
        }
    }
}
