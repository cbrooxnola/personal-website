console.log("Hello World!");
//chessboard for practice (from Eloquent Javascript)
let output = '';
for (let i = 0; i <= 7; i++){
  for (let n = 0; n <= 7; n++){
    if ((i + n) % 2 === 0) {
      output += '#';
    }
    else {
      output += ' ';
    }
  }
  output += '\n';
}
console.log(output);
