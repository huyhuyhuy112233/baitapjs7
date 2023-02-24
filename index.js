var arrNum = [12, 19, 20, 17, 41, 38, 45, -2, -6, -5, -4, -3, -10];
var arrNum2 = [-1,1,  -2,2,-3,3,-4,4,-5,5,6.5,7.5];
// bai 1
document.getElementById("btn-tinh-tong").onclick = function () {
  var outPut = 0;

  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      outPut += arrNum[i];
    }
  }
  document.getElementById("ketquabai1").innerHTML = outPut;
};
// bai 2
document.getElementById("btn-dem-so").onclick = function () {
  var count = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      count++;
    }
  }
  document.getElementById("ketquabai2").innerHTML = count;
};
// bai 3
document.getElementById("btn-tim-so").onclick = function () {
  var min = arrNum[0];
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < min) {
      min = arrNum[i];
    }
  }
  document.getElementById("ketquabai3").innerHTML = min;
};
// bai 4
document.getElementById("btn-so-duong").onclick = function () {
  var soDuongBeNhat = Math.min.apply(
    null,
    arrNum.filter(function (n) {
      return n > 0;
    })
  );
  document.getElementById("ketquabai4").innerHTML = soDuongBeNhat;
};
// bai 5
document.getElementById("btn-so-chan").onclick = function () {
  var lastNum = -1;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 === 0) {
      lastNum = arrNum[i];
      // break;
    }
  }
  document.getElementById("ketquabai5").innerHTML = lastNum;
};

// bai 6:
document.getElementById("btn-hoan-vi").onclick = function () {
  var so1 = +document.getElementById("soMot").value;
  var so2 = +document.getElementById("soHai").value;

  var outPutA = '';
  var outPutB = '';

  // Lấy giá trị của phần tử thứ 1 và phần tử thứ 2
  outPutA = arrNum[so1];
  outPutB = arrNum[so2];

  // Hoán đổi giá trị của 2 phần tử
  var temp = outPutA;
  arrNum[so1] = outPutB;
  arrNum[so2] = temp;

  document.getElementById('ketquabai6').innerHTML = "[" + arrNum + "]";;
};


// bai 7
document.getElementById("btn-sap-xep").onclick = function () {
  var temp = 0;
  for (var i = 0; i < arrNum.length; i++) {
    for (var j = i + 1; j < arrNum.length; j++) {
      if (arrNum[j] < arrNum[i]) {
        temp = arrNum[j];
        arrNum[j] = arrNum[i];
        arrNum[i] = temp;
      }
    }
    document.getElementById("ketquabai7").innerHTML = "[" + arrNum + "]";
  }
};

// bai 8:
document.getElementById('btn-nguyen-to').onclick =  function() {
  for (var i = 0; i < arrNum.length; i++) {
    if (kiemTraSoNguyenTo(arrNum[i])) {
      document.getElementById('ketquabai8').innerHTML = arrNum[i];
      break; 
    }
  }
}


// bai 9 :
document.getElementById('btn-so-nguyen').onclick = function() {
  var sum = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (Number.isInteger(arrNum[i])) {
      sum += 1;
    }
  }
  
  for (var i = 0; i < arrNum2.length; i++) {
    if (Number.isInteger(arrNum2[i])) {
      sum += 1;
    }
  }
document.getElementById('ketquabai9').innerHTML = sum;
}
// bai 10: 
document.getElementById('btn-so-sanh').onclick = function() {
  var soDuong = 0;
  var soAm = 0;

for (var i = 0; i < arrNum.length; i++) {
  if (arrNum[i] > 0) {
    soDuong++;
  } else {
    soAm++;
  }
}

for (var i = 0; i < arrNum2.length; i++) {
  if (arrNum2[i] > 0) {
    soDuong++;
  } else {
    soAm++;
  }
}
 
  if(soDuong > soAm ){
    document.getElementById('ketquabai10').innerHTML = " Số dương có " + soDuong + " giá trị lớn hơn " + " số âm  có " + soAm + " giá trị "; 
  }
  else{
    document.getElementById('ketquabai10').innerHTML = " Số âm có " + soAm + " giá trị lớn hơn " + " số dương   có " + soDuong+ " giá trị "; 
  }
}
