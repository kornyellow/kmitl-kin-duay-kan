namespace kmitl_web_app_project_backend.Models;

public class Token {
	public string Id { get; set; } = string.Empty;
	public User Owner { get; set; } = new User();
	public DateTime DateTimeCreate { get; set; } = DateTime.Now;
	public DateTime DateTimeExpire { get; set; } = DateTime.Now.AddDays(1);
}