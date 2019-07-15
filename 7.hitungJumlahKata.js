// function hitungJumlahKata(kalimat) {
//     var result = 0;
//     for (var i = 0 ; i < kalimat.length ; i++) {
//         if (kalimat[i] === ' ') {
//             result++;
//         }
//     }
//     return result += 1;
// }

function hitungJumlahKata(kalimat) {
    var arr = '';
    for (var i = 0 ; i < kalimat.length ; i++) {
        arr += kalimat[i];
    }
    var arrSplit = arr.split(' ');
    return arrSplit.length;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5