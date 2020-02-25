// Boolean represents one of two values: true or false.
// 1 is TRUE, 0 is FALSE

Boolean(10 > 9)       
 // returns true

(10 > 9)              // also returns true
10 > 9                // also returns true

/*
==	equal to	if (day == "Monday")
>	greater than	if (salary > 9000)
<	less than	if (age < 18)

*/



var x = 0;
Boolean(x);      
 // returns false


var x = -0;
Boolean(x);       
// returns false


var x = 10 / "H";
Boolean(x);       // returns false

//The Boolean :  NaN is false:

//Declaration

var x = false;
var y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object