using Microsoft.AspNetCore.Mvc;

namespace Mission5.wwwroot.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Lessons()
        {
            return View();
        }
    }
}
