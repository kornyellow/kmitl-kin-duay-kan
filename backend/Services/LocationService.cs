using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services;

public class LocationService : ILocationService {
	private static readonly List<Location> Locations = new() {
		new Location { Id = 1, Name = "เทคโนอินเตอร์" },
		new Location { Id = 2, Name = "ส้มตำเจ๊ปู" },
		new Location { Id = 3, Name = "ข้าวราดแกงยายมด" },
		new Location { Id = 4, Name = "ก๋วยเตี๋ยวป้ายง" },
		new Location { Id = 5, Name = "ข้าวมันไก่ตารงค์" },
		new Location { Id = 6, Name = "อาหารตามสั่งเจ๊จง" },
		new Location { Id = 7, Name = "อิสลามข้าวแกง" },
		new Location { Id = 8, Name = "ขนมหวานแม่ปู" },
		new Location { Id = 9, Name = "ป๋อป้อคาเฟ่" },
		new Location { Id = 10, Name = "อื่น ๆ" }
	};

	public static Location? TryGetLocation(int id) {
		return Locations.FirstOrDefault(l => l.Id == id);
	}
	
	public ServiceResponse<List<Location>> GetAll() {
		return new ServiceResponse<List<Location>> {
			Data = Locations
		};
	}
}