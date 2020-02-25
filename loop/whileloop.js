var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}

console.log(text)
//Output:
// BMW
// Volvo
// Saab
// Ford
