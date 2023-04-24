namespace kmitl_web_app_project_backend.Models;

public class Order {
	public int Id { get; set; } = 0;
	public User? Rider { get; set; }
	public string Message { get; set; } = string.Empty;
	public Location? Location { get; set; }
	public int CurrentOrder { get; set; } = 0;
	public int MaxOrder { get; set; } = 3;
	public DateTime DateTimeCreated { get; set; } = DateTime.Now;
	public int Score { get; set; } = 0;
	public bool IsComplete { get; set; } = false;
}