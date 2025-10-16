class Cicle {
  constructror(radius) {
    this.radius = radius;
  }
  // instance method
  draw() {
    console.log("Phương thức draw được gọi");
  }
  // static method
  static calcArea(radius) {
    return Math.PI * radius * radius;
  }
}
//tạo đối tượng
const c1 = new Cicle(10);
const c2 = new Cicle(5);
console.log(c1.draw());
console.log(c2.draw());
//
c1.draw();
c2.draw();

// gọi phương thức static method
console.log(Cicle.calcArea(10));

// vd dễ hiểu
a = -10;
console.log(Math.abs(a));
