using System.Runtime.InteropServices;
using kmitl_web_app_project_backend.Models;
using kmitl_web_app_project_backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace kmitl_web_app_project_backend.Controllers; 

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase {
	private readonly IUserService _userService;
	public UserController(IUserService userService) {
		_userService = userService;
	}

	[HttpGet("sort")]
	public ActionResult<List<User>> GetUsersSortByPoint() {
		return Ok(_userService.GetUsersSortByPoint());
	}

	[HttpPost("token")]
	public ActionResult<User> GetUserByToken(Token token) {
		return Ok(_userService.GetUserByToken(token));
	}

	[HttpPost("edit")]
	public ActionResult<User> Edit(User user) {
		return Ok(_userService.Edit(user));
	}

	[HttpPost("signup")]
	public ActionResult<List<User>> SignUp(User user) {
		return Ok(_userService.SignUp(user));
	}
	[HttpPost("signin")]
	public ActionResult<List<User>> SignIn(User user) {
		return Ok(_userService.SignIn(user));
	}
	[HttpPost("signout")]
	public ActionResult<Token> SignOut(Token token) {
		return Ok(_userService.SignOut(token));
	}
}