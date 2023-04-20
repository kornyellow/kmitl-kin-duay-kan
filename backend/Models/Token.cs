namespace kmitl_web_app_project_backend.Models;

public class Token {
	public string Id { get; set; } = string.Empty;
	public User? Owner { get; set; }
}