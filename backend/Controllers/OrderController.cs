using kmitl_web_app_project_backend.Models;
using kmitl_web_app_project_backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace kmitl_web_app_project_backend.Controllers; 

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase {
	private readonly IOrderService _orderService;
	public OrderController(IOrderService orderService) {
		_orderService = orderService;
	}

	[HttpGet]
	public ActionResult<User> GetAllActive() {
		return Ok(_orderService.GetAllActive());
	}
}
