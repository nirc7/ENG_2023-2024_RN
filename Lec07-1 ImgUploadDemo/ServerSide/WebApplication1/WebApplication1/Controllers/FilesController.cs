using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilesController : ControllerBase
    {
        private readonly string _uploadFolderPath; // Define the folder path where files will be uploaded

        public FilesController(IWebHostEnvironment env)
        {
            _uploadFolderPath = Path.Combine(env.ContentRootPath, "Uploads"); // Example path, adjust as needed
        }


        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromForm] FileUploadModel model)
        {
            if (model.File == null || model.File.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            try
            {
                // Ensure the uploads folder exists
                Directory.CreateDirectory(_uploadFolderPath);

                // Get the original filename and extension
                var originalFileName = Path.GetFileNameWithoutExtension(model.File.FileName);
                var fileExtension = Path.GetExtension(model.File.FileName);

                // Delete any existing files with the same original filename
                DeleteExistingFiles(originalFileName);

                // Generate a unique filename by concatenating original filename with timestamp
                var timeStamp = DateTime.Now.ToString("yyyyMMddHHmmssfff");
                var fileName = $"{originalFileName}_{timeStamp}{fileExtension}";
                var filePath = Path.Combine(_uploadFolderPath, fileName);

                // Save the uploaded file to the server
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await model.File.CopyToAsync(stream);
                }

                // Return the URL to access the uploaded file
                var baseUrl = $"{Request.Scheme}://{Request.Host}";
                var fileUrl = Path.Combine(baseUrl, "api/files", "Uploads", fileName); // Adjust the route as needed

                return Ok(new { FilePath = fileUrl });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error uploading file: {ex.Message}");
            }
        }

        private void DeleteExistingFiles(string originalFileName)
        {
            // Get all files in the upload folder that start with the original filename
            var files = Directory.GetFiles(_uploadFolderPath, $"{originalFileName}_*");

            // Delete each file
            foreach (var file in files)
            {
                System.IO.File.Delete(file);
            }
        }
    }

    public class FileUploadModel
    {
        public IFormFile File { get; set; }
    }

}
