// Getter là một phương thức được sử dụng để lấy ra giá trị của một thuộc tính
// Setter là một phương thức được sử dụng để thiết lập giá trị cho một thuộc tính.
class School {
  constructor(id, name, birthYear, score, address) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
    this.city = {
      address: address,
    };
    this._score = score; // sử dụng thuộc tính protect để lưu trữ điểm số
    //thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái protected
    //và không nên truy cập, sửa đổi trực tiếp từ bên ngoài
  }
  // phương thức
  calcAge() {
    let currentDatae = new Date().getFullYear();
    return currentDatae - this.birthYear;
  }
  // getter cho thuộc tính score
  get score() {
    return this._score;
  }
  set score(value) {
    // Thêm các biểu thức logic vào
    if (value >= 0 && value < 100) {
      this._score = value;
    } else {
      console.log("Điểm số không hợp lệ");
    }
  }
}
// tạo đối tượng
const Jonh = new School("2777", "Jonh", 2005, 85, "Paris");
console.log(Jonh);
console.log(Jonh.calcAge());
console.log(Jonh.birthYear);
console.log(Jonh.id);
console.log(Jonh.city.address);
console.log(Jonh._score); // không nên truy cập trực tiếp

// sử dụng getter
console.log("--------");
console.log(Jonh.score); // Khi gọi hàm getter không cần dấu "()"
// Dùng setter
// Jonh.score = 300;
Jonh.score = 35;
console.log(Jonh.score);
