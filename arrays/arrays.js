const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  //s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();

console.log(s)



const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1]; // change this line
  arr1[0] = 'potato'
})();
console.log(arr2);

//Output:
// ["JAN", "FEB", "MAR", "APR", "MAY"]