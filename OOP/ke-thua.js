//

class School {
  constructor(id, name, birthYear) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
  }
  // Phương thức của lớp scholl
  calcAge(Year) {
    return Year - this.birthYear;
  }
}
// Tạo ra nhiều lớp đối tượng của lớp scholl
const p1 = new School("25773673", "Nguyễn Văn B ", 2000);
console.log(p1.calcAge(2025));
console.log(p1.birthYear);
console.log(p1.id);
School.prototype.CV = function () {
  return `${this.name},${this.birthYear},${this.calcAge(2025)}`;
};
console.log(p1);
console.log(p1.CV());

// Lớp Student kế thừa từ lớp School
// class tên lớp kế thừa extends tên lớp mún kế thừa;
class Student extends School {}
const john = new Student("2578388", "John", 2005);
console.log(john.birthYear);
console.log(john.CV());
console.log(john.id);
console.log(john.calcAge(2025));

// Lớp studen kế thừa từ lớp school ( có thêm thuộc tính và phương thức riêng)
class Student1 extends School {
  constructor(id, name, birthYear, major) {
    super(id, name, birthYear); // Gọi hàm constructor của class cha
    this.major = major; // thuộc tính riêng của sinh viên
  }
  // Phương thức của lớp Student1
  study() {
    console.log(`${this.name} is studying ${this.major}`);
  }
}
const Peter = new Student1("2588773", "Peter", 2003, "Computer Science");
console.log(Peter);
School.prototype.city = "An Giang";
console.log(Peter.city);
console.log(Peter.calcAge(2025));
console.log(Peter.CV());
Peter.study();
