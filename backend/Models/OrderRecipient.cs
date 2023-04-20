namespace kmitl_web_app_project_backend.Models; 

public class OrderRecipient {
	public int Id { get; set; } = 0;
	public User? Recipient { get; set; }
	public Order? Order { get; set; }
	public string Message { get; set; } = string.Empty;
	public DateTime DateTimeCreated { get; set; } = DateTime.Now;
}