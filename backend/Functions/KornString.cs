using System.Text;

namespace kmitl_web_app_project_backend.Functions;

public abstract class KornString {
	public static string GenerateRandomString(int length) {
		const string validChars =
			"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";

		var result = new StringBuilder();
		var rnd = new Random();

		while (length-- > 0)
			result.Append(validChars[rnd.Next(validChars.Length)]);

		return result.ToString();
	}
}