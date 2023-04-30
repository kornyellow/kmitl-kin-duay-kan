using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services; 

public interface IOrderService {
	public ServiceResponse<List<Order>> GetAll();
	public ServiceResponse<List<Order>> GetAllActive();
	public ServiceResponse<List<Order>> GetAllCompleteByUser(string username);

	public ServiceResponse<Order> Create(Order order);
	public ServiceResponse<Order> Complete(Order order);
}