using kmitl_web_app_project_backend.Functions;
using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services;

public class UserService : IUserService {
	private static readonly List<User> Users = new();
	private static readonly List<Token> Tokens = new();

	public ServiceResponse<User> GetUserByToken(Token token) {
		var checkToken = Tokens.FirstOrDefault(t => t.Id == token.Id);
		if (checkToken == null) {
			return new ServiceResponse<User> {
				Success = false, Message = "ไม่พบ Token ดังกล่าว"
			};
		}

		if (checkToken.Owner == null) {
			return new ServiceResponse<User> {
				Success = false, Message = "สิ่งนี้ไม่ควรเกิดขึ้น"
			};
		}

		var checkUser = Users.FirstOrDefault(u => u.Username == checkToken.Owner.Username);
		if (checkUser == null) {
			return new ServiceResponse<User> {
				Success = false, Message = "ไม่พบ User ดังกล่าว"
			};
		}

		return new ServiceResponse<User> { Data = GetCleanUser(checkUser) };
	}

	public ServiceResponse<User> Edit(User user) {
		var checkToken = Tokens.FirstOrDefault(t => t.Id == user.Password);
		if (checkToken == null) {
			return new ServiceResponse<User> {
				Success = false, Message = "ไม่อนุญาตให้แก้ไขข้อมูล"
			};
		}

		if (checkToken.Owner == null) {
			return new ServiceResponse<User> {
				Success = false, Message = "สิ่งนี้ไม่ควรเกิดขึ้น"
			};
		}

		var checkUser = Users.FirstOrDefault(u => u.Username == checkToken.Owner.Username);
		if (checkUser == null) {
			return new ServiceResponse<User> {
				Success = false, Message = "ไม่พบ User ดังกล่าว"
			};
		}

		checkUser.Nickname = user.Nickname;
		checkUser.Aliasname = user.Aliasname;
		checkUser.ProfileImage = user.ProfileImage;
		checkUser.Reputation = user.Reputation;

		return new ServiceResponse<User>();
	}

	public ServiceResponse<User> SignUp(User user) {
		if (user.Username == string.Empty ||
		    user.Nickname == string.Empty ||
		    user.Password == string.Empty) {
			return new ServiceResponse<User> {
				Message = "ฮั่นแน่~ เกมตัวตึงเห็นคุณแอบกรอกข้อมูลไม่ครบ ละส่งมาได้ยังงายยย ส่งใหม่นะครับบบ",
				Success = false
			};
		}

		if (Users.FirstOrDefault(u => u.Username == user.Username) != null) {
			return new ServiceResponse<User> {
				Message = "เกมตัวตึงรู้สึกว่าคุ้น ๆ ดูเหมือนชื่อคุณมีอยู่ในระบบแล้ว",
				Success = false
			};
		}

		user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
		Users.Add(user);
		return new ServiceResponse<User>();
	}
	public ServiceResponse<Token> SignIn(User user) {
		var checkUser = Users.FirstOrDefault(u => u.Username == user.Username);
		if (checkUser == null || !BCrypt.Net.BCrypt.Verify(user.Password, checkUser.Password)) {
			return new ServiceResponse<Token> {
				Success = false, Message = "ชื่อผู้ใช้หรือรหัสผ่านผิด",
			};
		}

		var randomString = KornString.GenerateRandomString(32);
		while (Tokens.FirstOrDefault(t => t.Id == randomString) != null) {
			randomString = KornString.GenerateRandomString(32);
		}

		var token = new Token { Id = randomString, Owner = checkUser };
		Tokens.Add(token);

		return new ServiceResponse<Token> { Data = new Token { Id = randomString } };
	}
	public ServiceResponse<Token> SignOut(Token token) {
		var checkToken = Tokens.FirstOrDefault(t => t.Id == token.Id);
		if (checkToken == null) {
			return new ServiceResponse<Token> {
				Success = false, Message = "ไม่พบ Token ดังกล่าว",
			};
		}

		Tokens.Remove(checkToken);
		return new ServiceResponse<Token>();
	}

	private static User GetCleanUser(User user) {
		return new User {
			Nickname = user.Nickname,
			Username = user.Username,
			Aliasname = user.Aliasname,
			ProfileImage = user.ProfileImage,
			Reputation = user.Reputation,
		};
	}
}