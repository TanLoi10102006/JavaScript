// Private fiels : Trường riêng tư

class Wallet {
  #pin;
  #balance;
  #isPinEnter = false;
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin;
    this.#balance = 0; // Tài khoản bằng 0 lúc tạo thẻ
  }
  //Phương thức giửi tiền vào tài khoản
  deposit(value) {
    if (!this.#isPinEnter) {
      console.log("kiểm tra lại mã pin ");
      return;
    }
    this.#balance += value;
  }
  //================================
  // Private method
  #validatePin(pin) {
    return (this.#pin = pin);
  }

  // Pulic method
  enterpin(pin) {
    if (this.#validatePin(pin)) {
      this.#isPinEnter = true;
    } else {
      console.log("Invalid pin.");
    }
  }

  //================================

  // Rút tiền
  withdraw(value) {
    if (!this.#isPinEnter) {
      console.log("kiểm tra lại mã pin ");
      return;
    }
    if (value > this.#balance) {
      console.log("số tiền trong tài khoản không đủ");
    } else {
      this.#balance -= value; // this.#balance=balance-value
      console.log("Rút tiền thành công ");
    }
  }

  // Getter
  get balance() {
    if (!this.#isPinEnter) {
      console.log("Kiểm tra lại mã pin ");
      return;
    }
    return this.#balance;
  }
}
// Tạo đối tượng
const wallet = new Wallet("MB", "1234");
// Nhập mã pin
wallet.enterpin("1234");
wallet.deposit(10000);
wallet.withdraw(5000);
// xem số tiền trong tài khoản
console.log(wallet.balance);
