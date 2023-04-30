using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services; 

public interface IUserService {
	public ServiceResponse<User> GetUserByToken(Token token);
	public ServiceResponse<List<User>> GetUsersSortByPoint();

	public ServiceResponse<User> Edit(User user);

	public ServiceResponse<User> SignUp(User user);
	public ServiceResponse<Token> SignIn(User user);
	public ServiceResponse<Token> SignOut(Token token);
}