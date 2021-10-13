using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Question1.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Question1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
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


public class ProductEditor : IObserver<Temperature>
{
	private IDisposable unsubscriber;
	public virtual void Subscribe(IObservable<Temperature> provider)
   {
      unsubscriber = provider.Subscribe(this);
   }

   public virtual void Unsubscribe()
   {
      unsubscriber.Dispose();

   public void update(double diss) 
   {

    double discountVal=diss;
	Console.WriteLine("you have added a "+(discountVal*100)+" to your account");

   }

  public virtual void OnNotify(double discount, String text)
   {
      Console.WriteLine("discount of "+ this.discount +"% was applied");
      Console.WriteLine("Printing the Product")
   }
}


