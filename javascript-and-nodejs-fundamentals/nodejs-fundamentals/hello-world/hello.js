console.log("Hello, Hi there! I am JavaScript Language!");


const math = require("./math"); 

console.log("Math value is:", math.add(2, 9)); 

console.log(math);  // { add: [Function: add], sub: [Function: sub] }  // bec. in math.js file module.exports has two functions.  

