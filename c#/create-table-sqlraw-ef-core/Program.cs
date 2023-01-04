// See https://aka.ms/new-console-template for more information
using Microsoft.EntityFrameworkCore;

Console.WriteLine("Hello, World!");



public class TestDbContext : DbContext
{
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { 
            optionsBuilder.UseOracle(@"Data Source=localhost:1521/XEPDB1;User ID=DOCSPIDER;Password=Docspider#5;");
        }
}