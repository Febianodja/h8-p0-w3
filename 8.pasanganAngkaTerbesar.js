function pasanganTerbesar(num) {
  var strNum = String(num);
  var result = 0;

    for (var i = 0 ; i < strNum.length ; i++) {
        if (result < strNum[i]) {
            result = strNum[i] + strNum[i+1];
        }
    }
    return Number(result);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
