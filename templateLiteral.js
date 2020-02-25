/* Learn to use backticks */

const person = {
    name: "Jerico",
    age: 21
  };
  
  // Template literal with multi-line and string interpolation
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting); 
  
  
  
  
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    const resultDisplayArray = null;
  
    return resultDisplayArray;
  }

  const resultDisplayArray = makeList(result.failure);

  //Output: 
  // Hello, my name is Jerico! I am 21 years old.


const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Jerico", 21, "male")); 

//Output: 
// Hello, my name is Jerico! I am 21 years old.



const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  
bicycle.setGear(3);
console.log(bicycle.gear);

//Output:
//3

