let rows = 6;
let string = "";

// External loop
for (let i = 1; i <= rows; i++) {
  
  // printing spaces
  for (let j = 1; j <= rows - i; j++) {
    string += " ";
  }
  
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);