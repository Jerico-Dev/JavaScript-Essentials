//LET

/*
let person = "Morris";
let quote;

person = "John";

function personTalk() {
  "use strict";

  person = "Juan";
  quote = person + " says Hello!";

}

personTalk();
*/



/*
function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }

checkScope();
*/

// CONST

/*
function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");
*/