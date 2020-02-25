//Prevent Object Mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  
  const PI = freezeObj();
  
  console.log(PI);


  // Expected Output: 
  // TypeError: Cannot assign to read only property 'PI' of object '#<Object>' (/index.js:13)
  // 3.14