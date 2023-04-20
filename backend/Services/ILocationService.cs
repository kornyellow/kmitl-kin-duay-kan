using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services; 

public interface ILocationService {
	public ServiceResponse<List<Location>> GetAll();
}