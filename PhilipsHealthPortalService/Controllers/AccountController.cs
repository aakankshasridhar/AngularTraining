using Microsoft.AspNetCore.Mvc;
using HealthPortalService.Models;

namespace HealthPortalService.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        [HttpPost]
        public bool ValidateCredential([FromBody] AccountModel model)
        {
            return !string.IsNullOrEmpty(model.Email) && !string.IsNullOrEmpty(model.Password) && model.Password.Length > 8;
        }

        [HttpGet]
        public string Index()
        {
            return "123";
        }
    }
}
