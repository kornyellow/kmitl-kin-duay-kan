using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services; 

public interface IOrderRecipientService {
	ServiceResponse<List<OrderRecipient>> GetOrderRecipientsByOrder(int id);

	ServiceResponse<OrderRecipient> Create(OrderRecipient orderRecipient);
}