using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services;

public class OrderService : IOrderService {
	private static readonly List<Order> Orders = new();
	private static int _orderRegistry = 1;

	public static Order? TryGetOrderWithCount(int id) {
		var order = Orders.FirstOrDefault(o => o.Id == id);

		if (order?.Location == null)
			return null;
		if (order.Rider == null)
			return null;

		var orderRecipients = OrderRecipientService.GetOrderRecipients(id);

		return new Order {
			Id = order.Id, Message = order.Message, OrderCount = orderRecipients.Count,
			MaxOrder = order.MaxOrder, IsComplete = order.IsComplete, DateTime = order.DateTime,
			Rider = UserService.TryGetUserByUsernameClean(order.Rider.Username),
			Location = LocationService.TryGetLocation(order.Location.Id),
		};
	}

	public static Order? TryGetOrder(int? id) {
		var order = Orders.FirstOrDefault(o => o.Id == id);

		if (order?.Location == null)
			return null;
		if (order.Rider == null)
			return null;

		return new Order {
			Id = order.Id, Message = order.Message, DateTime = order.DateTime,
			MaxOrder = order.MaxOrder, IsComplete = order.IsComplete,
			Rider = UserService.TryGetUserByUsernameClean(order.Rider.Username),
			Location = LocationService.TryGetLocation(order.Location.Id),
		};
	}

	public ServiceResponse<List<Order>> GetAll() {
		return new ServiceResponse<List<Order>> {
			Data = (from order in Orders select TryGetOrder(order.Id)).ToList()
		};
	}

	public ServiceResponse<List<Order>> GetAllActive() {
		var activeOrders = Orders.Where(o => o.IsComplete == false).ToList();

		return new ServiceResponse<List<Order>> {
			Data = (from order in activeOrders select TryGetOrder(order.Id)).ToList()
		};
	}

	public ServiceResponse<List<Order>> GetAllCompleteByUser(string username) {
		var completeOrders = Orders.Where(o => o.IsComplete && o.Rider?.Username == username).ToList();
		completeOrders.Sort((x, y) => y.DateTime.CompareTo(x.DateTime));

		return new ServiceResponse<List<Order>> {
			Data = (from order in completeOrders select TryGetOrderWithCount(order.Id)).ToList()
		};
	}

	public ServiceResponse<List<Order>> GetAllCompleteSortByPoint() {
		var completeOrders = Orders.Where(o => o.IsComplete).ToList();
		completeOrders = (from order in completeOrders select TryGetOrderWithCount(order.Id)).ToList();
		var orders = completeOrders.OrderBy(o => o.OrderCount).ToList();

		return new ServiceResponse<List<Order>> {
			Data = orders
		};
	}

	public ServiceResponse<Order> Complete(Order order) {
		if (order.Id < 1 || order.Rider == null) {
			return new ServiceResponse<Order> {
				Message = "กรุณากรอกข้อมูลให้ครบ", Success = false
			};
		}

		var checkOrder = TryGetOrder(order.Id);
		if (checkOrder == null) {
			return new ServiceResponse<Order> {
				Success = false, Message = "ไม่พบ Order ดังกล่าว"
			};
		}

		Orders.RemoveAll(o => o.Id == order.Id);

		checkOrder.IsComplete = true;
		Orders.Add(checkOrder);

		return new ServiceResponse<Order>();
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

		Orders.Add(new Order {
			Id = _orderRegistry++, MaxOrder = order.MaxOrder,
			Rider = UserService.TryGetUserByUsernameClean(checkToken.Owner.Username),
			Message = order.Message, Location = LocationService.TryGetLocation(order.Location.Id),
		});

		return new ServiceResponse<Order>();
	}
}