// vd đơn giản
class Circle {
  #radius; // private field

  constructor(radius) {
    this.#radius = radius;
  }

  getArea() {
    return Math.PI * this.#radius ** 2;
  }
}
// Tạo đối tượng
const c = new Circle(10);
console.log(c.getArea()); // ✅ 314.159...

// vd chi tiết nhất

class UserAccount {
  #username;
  #password;
  #email;
  #isAdmin;

  constructor(username, password, email, isAdmin = false) {
    this.#username = username;
    this.#password = password;
    this.#email = email;
    this.#isAdmin = isAdmin;
  }

  // ✅ Getter cho username
  getUsername() {
    return this.#username;
  }
  getemail() {
    return this.#email;
  }

  // ✅ Kiểm tra quyền admin
  isAdminUser() {
    return this.#isAdmin;
  }

  // ✅ Đổi mật khẩu (có xác thực)
  changePassword(oldPass, newPass) {
    if (oldPass === this.#password) {
      this.#password = newPass;
      return "✅ Mật khẩu đã đổi!";
    } else {
      return "❌ Sai mật khẩu cũ!";
    }
  }
}

const user1 = new UserAccount("loi123", "matkhaucu", "loi@example.com");
console.log(user1.getUsername()); // 👉 "loi123"
console.log(user1.isAdminUser()); // 👉 false
console.log(user1.changePassword("matkhaucu", "matkhaumoi")); // ✅ đổi thành công
console.log(user1.isAdminUser());
console.log(user1.getemail());

// // Private method

class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  // 🔒 Private method
  #formatName() {
    return this.#name.toUpperCase();
  }

  // Public method gọi private method
  greet() {
    return `Xin chào, ${this.#formatName()}!`;
  }
}
const user = new User("Lợi");
console.log(user.greet()); // 👉 "Xin chào, LỢI!"
