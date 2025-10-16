// Hãy viết chương trình tính diện tích của hình vuông,hình chữ nhật sử dụng mô hình kế thừa trong js
class Shape {
  constructor(name) {
    this.name = name;
  }
  // phương thức

  calculateArea() {
    return 0;
  }
}
class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }
  // phương thức
  calculateArea() {
    return this.side * this.side;
  }
}
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  // phương thức
  calculateArea() {
    return this.width * this.height;
  }
}
let ShapeType = prompt("Mời bạn nhập tên hình vuông hoặc chữ nhật");
if (ShapeType === "vuông") {
  const side = Number(prompt("Mời bạn nhập cạnh hình vuông "));
  const square = new Square(ShapeType, side);
  console.log(square.side);
  console.log(`Diện tích hình vuông là ${square.calculateArea()}`);
} else if (ShapeType === "chữ nhật") {
  const Width = Number(prompt("Mời bạn nhập chiều rộng"));
  const Height = Number(prompt("Mời bạn nhập chiều cao"));
  const rectangle = new Rectangle(ShapeType, Width, Height);
  console.log(rectangle.width);
  console.log(rectangle.height);
  console.log(`Diện tích hình vuông là ${rectangle.calculateArea()}`);
} else {
  console.log("Bạn đã nhập sai ");
}
