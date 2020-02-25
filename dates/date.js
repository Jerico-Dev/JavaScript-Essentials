
var d = new Date();
console.log(d);
/*
Short Dates.
Short dates are written with an "MM/DD/YYYY" syntax like this:
*/

var d = new Date("03/25/2015");
console.log(d);

/*
Long Dates.
Long dates are most often written with a "MMM DD YYYY" syntax like this:
*/

var d = new Date("Mar 25 2015");
console.log(d);

/* Parsing Dates */

var msec = Date.parse("March 21, 2012");
console.log(msec);
