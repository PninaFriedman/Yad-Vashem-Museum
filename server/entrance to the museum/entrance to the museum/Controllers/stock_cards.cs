using entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace entrance_to_the_museum.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class stock_cards : ControllerBase
    {

        // GET: api/<stock_cards>
        [HttpGet]
        public IActionResult Get()
        {
            string jsonFilePath = "../StockCard.JSON";

            if (!System.IO.File.Exists(jsonFilePath))
            {
                return NotFound("JSON file not found");
            }

            string jsonContent = System.IO.File.ReadAllText(jsonFilePath);

            try
            {
                List<Cards> data = JsonSerializer.Deserialize<List<Cards>>(jsonContent);

                return Ok(data);
            }
            catch (JsonException)
            {
                return BadRequest("Invalid JSON format");
            }

        }
    }
}
