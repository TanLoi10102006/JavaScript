//quay trở lại bài toán sinh viên,các siinh viên điều có điểm chung.
//Nếu tạo theo cách trên thì sẽ lặp code rất nhiều lần
const student = {
  fullname: "Đoàn Tấn Lợi",
  birthYear: 2006,
  address: {
    city: "An Giang",
    country: "Việt Nam",
  },
  scores: [8, 9, 10],
  // phương thức
  //vd1  Phương thức tính tuổi
  getAge: function () {
    return 2025 - this.birthYear;
  },
  //vd2 Phương thức để đi tính điểm trung bình
  diemTrungbinh: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  },
};

// Function constructor:
/** sử dụng để tạo khuôn mẫu (prototype)
 * có 3 cách khai báo hàm * Lưu ý : khai báo constructor không dùng arrow function
 * Viết hoa chữ cái đầu để phân biệt với các hàm thông thường
 */

// Sử dụng function expression(ít dùng)
const SinhVien = function (fullname, ID, birthYear, homeTown) {
  // Thuộc tính
  this.fullName = fullname; // value là giá trị truyền vào hàm
  this.id = ID;
  this.SinhNhat = birthYear;
  this.HomeTown = homeTown;

  // Phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.id} ${this.HomeTown}`;
  };
};

// sử dụng function declaration ( thường dùng hơn)
function Student(fullName, ID, birthYear, homeTown) {
  this.fullName = fullName;
  this.id = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  this.showInfo = function () {
    return `${this.fullName} ${this.id} ${birthYear} ${this.homeTown}`;
  };
}
// Các bước tạo đối tượng
/**
Step 1: sử dụng từ khóa new để tạo một thể hiện mới của hàm được tạo,
--> đối tượng mới rỗng sẽ được tạo ra
Steep 2: Gọi đến hàm tạo Student().
Trong quá trình này, từ khóa this trong hàm tạo tham chiếu đến đối tượng mới vừa tạo,
nơi các thuộc tính phương thức được gán.
Step 3:{} linked đến prototype:
Khi một thể hiện mới được tạo, javaScrip tự động liên kết nó với nguyên mẫu
Sẽ được học sau
Step 4: Sau khi các thuộc tính và phương thức được gán cho đối 
tượng mới thông qua từ khóa this,hàm tạo sẽ tự động trả về đối tượng mới này
 */
const sv1 = new Student("Đoàn Tấn Lợi", "2000056", 2006, "An Giang");
const sv2 = new Student("Nguyễn Văn A", "2003839", 2004, "Cần Thơ");
console.log(sv1.fullName); //  "Đoàn Tấn Lợi"
console.log(sv1["birthYear"]); // 2006
console.log(sv1.showInfo()); // "Đoàn Tấn Lợi 2000056 2006 An Giang"
console.log(sv1.id); // 2000056
console.log(sv2.fullName); //"Nguyễn Văn A";
console.log(sv2.birthYear); // 2004

//instanceof: dùng để kiểm tra xem một đối tượng có phải là một thể hiện (instance) của một hàm tạo (constructor) hoặc lớp (class) cụ thể hay không.
/** Cú pháp: object instanceof constructor
 * object: đối tượng bạn muốn kiểm tra
 * constructor: Hàm tạo hoặc lớp mà bạn muốn so sánh.
 */
console.log("check instance:");
let abc = 7;
console.log(sv1 instanceof Student); //true
console.log(abc instanceof Student); // false

// Thêm sửa xóa thuộc tính
sv2.email = "tanloi@gmail.com";
sv2.birthYear = 2002;
console.log(sv2.birthYear);
delete sv2.id;
console.log(sv2);
