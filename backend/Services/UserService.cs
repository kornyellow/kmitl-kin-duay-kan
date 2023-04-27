using kmitl_web_app_project_backend.Functions;
using kmitl_web_app_project_backend.Models;

namespace kmitl_web_app_project_backend.Services;

public class UserService : IUserService {
	private static readonly List<User> Users = new();
	private static readonly List<Token> Tokens = new();

	public static User? TryGetUserByUsernameClean(string username) {
		return GetCleanUser(Users.FirstOrDefault(u => u.Username == username));
	}
	public static User? TryGetUserByUsername(string username) {
		return Users.FirstOrDefault(u => u.Username == username);
	}
	public static Token? TryGetToken(string token) {
		return Tokens.FirstOrDefault(t => t.Id == token);
	}

	public static void ModifyUser(User user, User newUser) {
		Users.Remove(user);
		user.Nickname = newUser.Nickname;
		user.Aliasname = newUser.Aliasname;
		user.ProfileImage = newUser.ProfileImage;
		Users.Add(user);
	}
	
	public ServiceResponse<User> GetUserByToken(Token token) {
		var checkToken = TryGetToken(token.Id);
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

		var checkUser = TryGetUserByUsernameClean(checkToken.Owner.Username);
		if (checkUser == null) {
			return new ServiceResponse<User> {
				Success = false, Message = "ไม่พบ User ดังกล่าว"
			};
		}

		return new ServiceResponse<User> { Data = checkUser };
	}

	public ServiceResponse<User> Edit(User user) {
		var checkToken = TryGetToken(user.Password);
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

		var checkUser = TryGetUserByUsername(checkToken.Owner.Username);
		if (checkUser == null) {
			return new ServiceResponse<User> {
				Success = false, Message = "ไม่พบ User ดังกล่าว"
			};
		}
		
		ModifyUser(checkUser, user);
		
		return new ServiceResponse<User>();
	}

	public ServiceResponse<User> SignUp(User user) {
		if (user.Username == string.Empty ||
		    user.Nickname == string.Empty ||
		    user.Password == string.Empty) {
			return new ServiceResponse<User> {
				Message = "กรุณากรอกข้อมูลให้ครบ",
				Success = false
			};
		}

		if (TryGetUserByUsername(user.Username) != null) {
			return new ServiceResponse<User> {
				Message = "พบชื่อผู้ใช้อยู่ในระบบแล้ว",
				Success = false
			};
		}

		user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
		Users.Add(user);
		return new ServiceResponse<User>();
	}
	public ServiceResponse<Token> SignIn(User user) {
		var checkUser = TryGetUserByUsername(user.Username);
		if (checkUser == null || !BCrypt.Net.BCrypt.Verify(user.Password, checkUser.Password)) {
			return new ServiceResponse<Token> {
				Success = false, Message = "ชื่อผู้ใช้หรือรหัสผ่านผิด",
			};
		}

		var randomString = KornString.GenerateRandomString(32);
		while (TryGetToken(randomString) != null) {
			randomString = KornString.GenerateRandomString(32);
		}

		var token = new Token { Id = randomString, Owner = checkUser };
		Tokens.Add(token);

		return new ServiceResponse<Token> { Data = new Token { Id = randomString } };
	}
	public ServiceResponse<Token> SignOut(Token token) {
		var checkToken = TryGetToken(token.Id);
		if (checkToken == null) {
			return new ServiceResponse<Token> {
				Success = false, Message = "ไม่พบ Token ดังกล่าว",
			};
		}

		Tokens.Remove(checkToken);
		return new ServiceResponse<Token>();
	}

	private static User? GetCleanUser(User? user) {
		if (user == null)
			return null;
		return new User {
			Nickname = user.Nickname,
			Username = user.Username,
			Aliasname = user.Aliasname,
			ProfileImage = user.ProfileImage,
		};
	}
}