using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.Extensions.FileProviders;
using System.Timers;

namespace WebApplication1
{
    public class Program
    {
        static System.Timers.Timer timer = new System.Timers.Timer();
        static string path = null;

        private static void tm_Tick(object sender, ElapsedEventArgs e)
        {
            EndTimer();
            Console.WriteLine(path);
            WebApplication1.Models.TimerServices.DoSomethingWithtimer(path);
        }


        //code for timer
        public static void StartTimer()
        {
            timer.Enabled = true;

        }

        public static void EndTimer()
        {
            timer.Enabled = false;

        }

       
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            //code for timer
            timer.Interval = 1000;
            timer.Elapsed += tm_Tick;
            path = builder.Environment.ContentRootPath;


            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // builder.Services.AddTransient<IMyService, MyService>();


            builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            //app.UseStaticFiles(new StaticFileOptions
            //{
            //    FileProvider = new PhysicalFileProvider(
            //        Path.Combine(builder.Environment.ContentRootPath, "Uploads")),
            //    RequestPath = "/Uploads" // Optional: change the request path if needed
            //});

            //app.UseStaticFiles();
            path = builder.Environment.ContentRootPath;

            app.UseCors();

            app.MapControllers();

            app.Run();
        }
    }
}
