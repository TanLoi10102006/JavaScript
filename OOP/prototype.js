// Mảng thực chất có kiểu dữ liệu object
// khai báo mảng
let M = new Array();
console.log(typeof M);
console.log(M);

// Rõ ràng mảng M rỗng,
// Nhưng vì kế thừa các phương thức và thuộc tính của cha
// nên chúng ta có thể sử dụng các thuộc tính
// và phương thức từ nguyên mẫu cha mẹ
console.log(M.length);
M.push(5);
console.log(M);

// Quay trở lại vì đối tượng student
function Student(fullName, ID, birthYear, homeTown) {
  this.fullName = fullName;
  this.id = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  this.showInfo = function () {
    return `${this.fullName} ${this.id} ${birthYear} ${this.homeTown}`;
  };
}
const sv1 = new Student("Đoàn Tấn Lợi", "2000056", 2006, "An Giang");
console.log(sv1);

// Có cách nào để kiểm tra nguyên mẫu cha mẹ của đối tượng không?
//4. Xem nguyên mẫu - cha mẹ của đối tượng sv1
console.log("Kiểm tra nguyên mẫu cha mẹ của sv1");
console.log(Object.getPrototypeOf(sv1));
console.log(sv1.__proto__); // cách kiểm tra cũ k nên dùng

// Mọi hàm trong js đều có prototype
console.log("student.prototype######");
console.log(Student.prototype);

// check
console.log(Student.prototype === Object.getPrototypeOf(sv1)); // true
//Cách khác
console.log(Student.prototype.isPrototypeOf(sv1)); // true

//5. Thêm phương thức vào Student.prototype

Student.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
console.log(sv1);
sv1.calcAge();

//6. Thêm thuộc tính vào Student.prototype
Student.prototype.email = "tanloi10102006@gmail.com";
console.log(sv1.email);

//Thực vậy,nếu kiểm tra sv1 có trực tiếp chứa thuộc tính email?
console.log(sv1.hasOwnProperty("email"));
console.log(Student.prototype.hasOwnProperty("email"));
console.log(sv1.hasOwnProperty("fullName"));
