//input "hello world!"
//output
// "!dlrow olleh"

function balikString (kata) {
    var result = '';
    for (var i = kata.length-1 ; i >= 0 ; i--) {
        result += kata[i];
    }
    return result;
}

console.log(balikString('hello world!'));