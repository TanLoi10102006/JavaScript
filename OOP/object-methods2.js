//5. Object.hasOwnProperty(prop)
// Phương thức này kiểm tra xem đối tượng có một thuộc tính nào đó hay không và trả về true nếu có và flase nếu không
let car = {
  name: "BMW",
  Year: 109,
  109: "hhdhh",
};

console.log(car.hasOwnProperty("Year")); // true
console.log(car.hasOwnProperty(109)); // true

//6. Object.freeze(obj)
// Phương thức này đóng băng đối tượng, làm cho nó không thể thêm,sửa,xóa
let phone = {
  name: "Iphone16",
  color: "black",
  addree: {
    city: "Hà Nội",
  },
};
Object.freeze(phone);
phone.name = "samsung"; // không sửa được
phone.email = "tanloi10102006"; // không thêm được
delete phone.name; // không xóa được
console.log(phone);

//7. Object.seal(obj)
// Ngăn không cho thêm,xóa thuộc tính,chỉ có phép sửa giá trị
let student = {
  name: "Đoàn tấn Lợi",
  class: "12A1",
  year: 2024,
};
Object.seal(student); // cho phép được sửa giá trị không cho phép thêm hoặc xóa
student.name = "ĐTL";
student.class = "12A11";
delete student.name; // Không thực hiện được
student.birthday = 10 / 10 / 2006; // Không thực hiện được
console.log(student);
