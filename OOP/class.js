// class k có hosting
// Class expression ( ít dùng hơn)
const SinhVienEX = class {};

// Class decoration(Thường được dùng vì nó ngắn gon hơn)
class SinhVien {
  constructor(fullName, ID, birthYear, homeTown) {
    // Các thuộc tính của đối tượng
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  // các phương thức khai báo ngoài constructor
  //không cần function keyword
  showInfo() {
    return `${this.fullName},${this.ID},${this.homeTown}`;
  }
}
const student1 = new SinhVien("Nguyễn Văn A", 157726, 2000, "An Giang");
const student2 = new SinhVien("Nguyễn Văn B", 84448, 2008, "Bến Tre");
console.log(student1);
console.log(student1.showInfo());
console.log(Object.getPrototypeOf(student1)); // Kiểm tra cha của thằng student1
console.log(Object.getPrototypeOf(student2));
// Thêm phương thức vào sinnhVien thủ công sau khi có class
SinhVien.prototype.calcAge = function (currentYear) {
  return currentYear - this.birthYear;
};
console.log(student1.calcAge(2025));
console.log(student1);
console.log(student2);
SinhVien.prototype.city = "Hồ Chí Minh";
console.log(student1);
// Xóa chỉ xóa trức tiếp trên đối tượng
delete student1.fullName;
console.log(student1);
console.log(student1.hasOwnProperty("ID")); // 👉 true

// in dùng để kiểm tra thuộc tính kế thừa
console.log("homeTown" in student1);
