using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimerController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            Program.StartTimer();
            return Ok("done:)");
        }
    }
}
