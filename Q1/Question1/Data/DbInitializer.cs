using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Question1.Models;

namespace Question1.Data
{
    public class DbInitializer
    {
        public static void Initialize(ProductContext context)
        {
            context.Database.EnsureCreated();
            if (context.Products.Any())
            {
                return;
            }

            var Products = new Product[]
            {
                new Product{ProductName = "Cereal", Price = 2.99, UPCCode = "UPC1234"}
            };

            foreach (Product p in Products)
            {
                context.Products.Add(p);
            }
            context.SaveChanges();
        }
    }
}
