namespace kmitl_web_app_project_backend.Models;

public class Order {
	public int Id { get; set; }
	public User? Rider { get; init; }
	public string Message { get; init; } = string.Empty;
	public Location? Location { get; init; }
	public int CurrentOrder { get; set; }
	public int MaxOrder { get; init; } = 3;
	public DateTime DateTimeCreated { get; set; } = DateTime.Now;
	public int Score { get; set; } = 0;
	public bool IsComplete { get; set; } = false;
}