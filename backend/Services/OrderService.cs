using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services;

public class OrderService : IOrderService {
	private static readonly List<Order> Orders = new();

	public ServiceResponse<List<Order>> GetAllActive() {
		var orders = new List<Order> {
			new() {
				Id = 1,
				Rider = new User { ProfileImage = "", Username = "kornyellow", Nickname = "กร", Aliasname = "เยลโล่" },
				Message = "จะไปซื้อข้าวมันไก่ต้ม ใครจะเอาอะไรมั้ย",
				Location = new Location { Id = 11, Name = "ร้านข้าวมันไก่" }, CurrentOrder = 1, MaxOrder = 3
			},
			new() {
				Id = 2, Rider = new User { ProfileImage = "", Username = "porporth", Nickname = "ป๋อป้อ", Aliasname = "คาปูชิโน่ยังมีฟอง แล้วเมื่อไรคนที่มองจะมีใจ" },
				Message = "เรากำลังจะกลับจากพาร์ทไทม์ ใครเอาเครื่องดื่มอะไรมั้ย",
				Location = new Location { Id = 12, Name = "ร้านคาเฟ่ป๋อป้อ" }, MaxOrder = 5
			},
			new() {
				Id = 3, Rider = new User { ProfileImage = "", Username = "game", Nickname = "เกมตัวตึง", Aliasname = "เลิกแล้วดื่มเบียร์ มีเมียแล้วดีใจ" },
				Message = "หิวข้าวหน้าเนื้อว่ะ ใครอยากเอาด้วยบ้าง",
				Location = new Location { Id = 13, Name = "ร้านอิสลาม" }, MaxOrder = 2
			}
		};
		return new ServiceResponse<List<Order>> {
			Data = orders.Where(o => o.IsComplete == false).ToList(),
		};
	}

	public ServiceResponse<Order> Add(Order order) {
		Orders.Add(order);
		return new ServiceResponse<Order>();
	}
}