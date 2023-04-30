using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services;

public class OrderRecipientService : IOrderRecipientService {
	private static readonly List<OrderRecipient> OrderRecipients = new();
	private static int _orderRecipientRegistry = 1;

	public static OrderRecipient? TryGetOrderRecipient(int id) {
		var orderRecipient = OrderRecipients.FirstOrDefault(or => or.Id == id);

		if (orderRecipient?.Order == null)
			return null;
		if (orderRecipient.Recipient == null)
			return null;

		return new OrderRecipient {
			Id = orderRecipient.Id, Message = orderRecipient.Message,
			Order = OrderService.TryGetOrder(orderRecipient.Order.Id),
			Recipient = UserService.TryGetUserByUsernameClean(orderRecipient.Recipient.Username),
		};
	}
	
	public static List<OrderRecipient> GetOrderRecipients(int id) {
		var orderRecipients = OrderRecipients.Where(or => or.Order?.Id == id);
		return (from orderRecipient in orderRecipients select TryGetOrderRecipient(orderRecipient.Id)).ToList();
	}

	public ServiceResponse<List<OrderRecipient>> GetOrderRecipientsByOrder(int id) {
		var order = OrderService.TryGetOrder(id);

		if (order == null) {
			return new ServiceResponse<List<OrderRecipient>> {
				Message = "ไม่พบเลขออเดอร์ดังกล่าว", Success = false
			};
		}

		var orderRecipients = OrderRecipients.Where(or => or.Order != null && or.Order.Id == id);

		return new ServiceResponse<List<OrderRecipient>> {
			Data = (from orderReci in orderRecipients select TryGetOrderRecipient(orderReci.Id)).ToList()
		};
	}

	public ServiceResponse<List<OrderRecipient>> GetOrderRecipientsCompleteByUser(string username) {
		var orderRecipients = OrderRecipients.Where(or => OrderService.TryGetOrder(or.Order?.Id)?.IsComplete == true && or.Recipient?.Username == username).ToList();
		orderRecipients.Sort((x, y) => y.Order == null || x.Order == null ? 0 : y.Order.DateTime.CompareTo(x.Order.DateTime));

		return new ServiceResponse<List<OrderRecipient>> {
			Data = (from orderReci in orderRecipients select TryGetOrderRecipient(orderReci.Id)).ToList()
		};
	}

	public ServiceResponse<OrderRecipient> Create(OrderRecipient orderRecipient) {
		if (orderRecipient.Recipient == null || orderRecipient.Order == null) {
			return new ServiceResponse<OrderRecipient> {
				Message = "กรุณากรอกข้อมูลให้ครบ", Success = false
			};
		}

		var checkToken = UserService.TryGetToken(orderRecipient.Recipient.Password);
		if (checkToken?.Owner == null) {
			return new ServiceResponse<OrderRecipient> {
				Success = false, Message = "ไม่พบ Token ดังกล่าว"
			};
		}

		OrderRecipients.Add(new OrderRecipient {
			Id = _orderRecipientRegistry++, Message = orderRecipient.Message,
			Recipient = UserService.TryGetUserByUsernameClean(checkToken.Owner.Username),
			Order = OrderService.TryGetOrder(orderRecipient.Order.Id)
		});
		
		return new ServiceResponse<OrderRecipient>();
	}
}