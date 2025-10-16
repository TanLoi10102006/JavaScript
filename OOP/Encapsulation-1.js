// Encapsulation - Tính đóng gói
/**
// Public fields : Trường công khai, trường công cộng
// Private fields : Trường riêng tư 
// Public method : Phương thức công khai
// Private method : Phương thức riêng tư 
 */

class Wallet {
  // Pulic fields : Trường phương thức công khai
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.pin = pin;
    this.balance = 0; // Tài khoản người dùng bằng 0
  }
  // Phương thức giửi tiền vào tài khoản
  deposit(value) {
    // Public method : Phương thức công khai
    this.balance += value;
  }
  // Phương thức rút tiền
  withdraw(value) {
    if (value > this.balance) {
      console.log("số tiền tài khoản k đủ");
    } else {
      this.balance -= value;
      console.log("Rút tiền thành công ");
      console.log("Số tiền còn lại là ", this.balance);
    }
  }
}

// Tạo đối tượng
const wallet = new Wallet("MB bank", "1234");
// Nhập vào só tiền bạn muốn giửi
let value = Number(prompt("Nhập số tiền bạn muốn giưi"));
// Kiểm tra điều kiện giửi tiền
if (Number.isNaN(value) || value <= 0) {
  console.log("Mời bạn nhập lại");
} else {
  wallet.deposit(value); // Gửi tiền
  console.log(`Số dư hiện tại là: ${wallet.balance}`); // In ra số dư
}
value = Number(prompt("Nhập số tền bạn muốn rút "));
wallet.withdraw(value);

// xem mã pin
console.log(`Mã pin tài khoản ngân hàng là ${wallet.pin}`);
