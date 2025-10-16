// Bài 1 Xuất n số chính phương đầu tiên với n>0 nhập từ bàn phím
// vd n=3 thì 3 số chính phương đầu tiên là 1,4,9
// phương pháp giải 1*1=1,2*2=4
let A = [];
function squareNumber(n) {
  for (let i = 1; i <= n; i++) {
    let chinhphuong = i * i;
    A.push(chinhphuong);
  }
  return A;
}
while (true) {
  let n = Number(prompt("Mời bạn nhập số nguyên n"));
  if (Number.isNaN(n) || !Number.isInteger(n)) {
    alert("Mời bạn nhập lại");
  } else {
    console.log("Kết quả là ", squareNumber(n));
    break;
  }
}

// Bài 2 Xuất n số nguyên tố đầu tiên với n>0 nhập từ bản phím
// vd nhập n=5 5 số nguyên tố là 2,3,5,7,11;

function kiemtra(x) {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function laysonguyento(n) {
  let A = [];
  let dem = 0;
  for (let i = 2; dem < n; i++) {
    if (kiemtra(i)) {
      A.push(i);
      dem++;
    }
  }
  return A;
}

// Nhập từ bàn phím
while (true) {
  let n = Number(prompt("Mời bạn nhập số nguyên n > 0"));
  if (isNaN(n) || !Number.isInteger(n) || n <= 0) {
    alert("Vui lòng nhập lại số nguyên dương.");
  } else {
    let kq = laysonguyento(n);
    alert("Các số nguyên tố đầu tiên là: " + kq.join(", "));
    break;
  }
}
// Bài 3 Đếm số ước nguyên của N

function Usonguyen(N) {
  let B = [];
  for (let i = 1; i < N; i++) {
    if (N % i == 0) {
      B.push(i);
    }
  }
  return B;
}
//  yêu cầu ng dùng nhập từ bàn phím số nguyên
while (true) {
  let N = Number(prompt("mời bạn nhập số nguyên n"));
  if (Number.isNaN(N) || Number.isInteger(N) || N <= 0) {
    alert("vui lòng nhập lại ");
  } else {
    let dap_an = Usonguyen(N);
    alert(`Số ước của số nguyên N là ${dap_an.join(",")}`);
    break;
  }
}

//
