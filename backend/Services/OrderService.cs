using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services;

public class OrderService : IOrderService {
	private static readonly List<Order> Orders = new();
	private static int _orderRegistry = 1;

	public ServiceResponse<List<Order>> GetAllActive() {
		return new ServiceResponse<List<Order>> {
			Data = Orders.Where(o => o.IsComplete == false).ToList(),
		};
	}

	public ServiceResponse<Order> Create(Order order) {
		if (order.Message == "" || order.Rider == null || order.Location == null) {
			return new ServiceResponse<Order> {
				Message = "กรุณากรอกข้อมูลให้ครบ", Success = false
			};
		}

		if (order.MaxOrder is < 1 or > 5) {
			return new ServiceResponse<Order> {
				Message = "จำนวนที่รับฝากมากหรือน้อยเกินไป", Success = false
			};
		}
		
		var checkToken = UserService.TryGetToken(order.Rider.Password);
		if (checkToken?.Owner == null) {
			return new ServiceResponse<Order> {
				Success = false, Message = "ไม่พบ Token ดังกล่าว"
			};
		}

		var newOrder = new Order {
			Id = _orderRegistry++, MaxOrder = order.MaxOrder,
			Rider = UserService.TryGetUserByUsernameClean(checkToken.Owner.Username),
			Message = order.Message, Location = LocationService.TryGetLocation(order.Location.Id),
		};
		Orders.Add(newOrder);
		
		return new ServiceResponse<Order>();
	}
}