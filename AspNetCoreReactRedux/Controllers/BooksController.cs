using BusinessLibrary.Model;
using BusinessLibrary.Service;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace AspNetCoreReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksXmlController : ControllerBase
    {
        private readonly IBooksService _booksService;
        public BooksXmlController(IBooksService booksService)
        {
            _booksService = booksService;
        }

        [EnableCors("AllowSpecificOrigin")]
        //[HttpGet("getbooks/{fromall}")]
        [Route("getbooks/{fromall}")]
        public IActionResult Books([FromQuery] BooksModel model)
        {
            System.Threading.Thread.Sleep(2000);
            return Ok( _booksService.GetBooks(model));
        }
    }
}
