const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export { capitalizeString };
  
  export const foo = "bar";
  export const bar = "foo";


  // Create and export fall back and default export
export default function subtract(x,y) {return x - y;}

import subtract from "math_functions";

subtract(7,4);