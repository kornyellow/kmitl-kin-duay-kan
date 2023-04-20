using kmitl_web_app_project_backend.Models;
using kmitl_web_app_project_backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace kmitl_web_app_project_backend.Controllers; 

[ApiController]
[Route("api/[controller]")]
public class LocationController : ControllerBase {
	private readonly ILocationService _locationService;
	public LocationController(ILocationService locationService) {
		_locationService = locationService;
	}

	[HttpGet]
	public ActionResult<User> GetAll() {
		return Ok(_locationService.GetAll());
	}
}
