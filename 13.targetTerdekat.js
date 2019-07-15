function targetTerdekat(arr) {
    var a = 0;
    var b = 0;
    var c = 0;
    var arrX = [];
    
    if(arr.indexOf('x') === - 1) {
      return 0;
    }
    else {
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'x') {
          a = i;
          // console.log(a)
          arrX.push(a);
          // console.log(arrX)
        }
        else if(arr[i] === 'o') {
          b = i;
          //console.log(b)
        }
        var output = [];
        for(var j = 0; j < arrX.length; j++) {
          c = Math.abs(b - arrX[j]);
          output.push(c);
          //console.log(output)
          output.sort();
        }
      }
      return output[0];
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2