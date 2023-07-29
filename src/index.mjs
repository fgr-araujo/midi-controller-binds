// Type "Hello World" then press enter.
var robot = require("robotjs");


setTimeout(() => {
  // Type "Hello World".
  
  
  setTimeout(() => { robot.typeString("Hello World"); }, 1000);
  setTimeout(() => { robot.keyTap("enter"); }, 2000)
  // Press enter.
  
}, 5000);