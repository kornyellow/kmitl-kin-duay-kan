using kmitl_web_app_project_backend.Models;
using kmitl_web_app_project_backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace kmitl_web_app_project_backend.Controllers; 

[ApiController]
[Route("api/[controller]")]
public class OrderRecipientController : ControllerBase {
	private readonly IOrderRecipientService _orderRecipientService;
	public OrderRecipientController(IOrderRecipientService orderRecipientService) {
		_orderRecipientService = orderRecipientService;
	}

	[HttpGet("{id}")]
	public ActionResult<List<OrderRecipient>> GetOrderRecipientsByOrder(int id) {
		return Ok(_orderRecipientService.GetOrderRecipientsByOrder(id));
	}

	[HttpPost("create")]
	public ActionResult<OrderRecipient> Create(OrderRecipient orderRecipient) {
		return Ok(_orderRecipientService.Create(orderRecipient));
	}
}