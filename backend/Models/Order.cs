namespace kmitl_web_app_project_backend.Models;

public class Order {
	public int Id { get; set; }
	public User? Rider { get; init; }
	public string Message { get; init; } = string.Empty;
	public Location? Location { get; init; }
	public int MaxOrder { get; init; } = 3;
	public int OrderCount { get; set; }
	public bool IsComplete { get; set; }
	public DateTime DateTime { get; set; } = DateTime.Now;
}