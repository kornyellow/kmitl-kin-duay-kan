using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services;

public class LocationService : ILocationService {
	private static readonly List<Location> Locations = new();

	public LocationService() {
		Locations.Add(new Location { Id = 1, Name = "ร้านเทคโนอินเตอร์" });
		Locations.Add(new Location { Id = 2, Name = "ร้านส้มตำ" });
		Locations.Add(new Location { Id = 3, Name = "ร้านข้าวราดแกง" });
		Locations.Add(new Location { Id = 4, Name = "ร้านก๋วยเตี๋ยว" });
		Locations.Add(new Location { Id = 5, Name = "ร้านข้าวมันไก่" });
		Locations.Add(new Location { Id = 6, Name = "ร้านอาหารตามสั่ง" });
		Locations.Add(new Location { Id = 7, Name = "ร้านอิสลาม" });
		Locations.Add(new Location { Id = 8, Name = "ร้านขนมหวาน" });
		Locations.Add(new Location { Id = 9, Name = "ร้านน้ำ" });
		Locations.Add(new Location { Id = 10, Name = "ร้านอื่น ๆ" });
	}

	public ServiceResponse<List<Location>> GetAll() {
		return new ServiceResponse<List<Location>> {
			Data = Locations
		};
	}
}