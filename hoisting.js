// hoisting

// no error
console.log(firstname)
var firstname = "Femi";
console.log(firstname)

// //throw error
// console.log(firstname) 
// let firstname = "Femi";

// //throw error
// console.log(firstname)
// const firstname = "Femi";

//TD-TEMPORAL

//throws error:
// sayMyName();

// var sayMyName = function(){
//     console.log("Femi")
// }

// sayMyName();

// let sayMyName = function(){
//     console.log("Femi")
// }
// sayMyName();

// arrow_function()

// var arrow_function = () => {
//     console.log("WIT class")
// }

// arrow_function()

// let arrow_function = () => {
//     console.log("WIT class")
// }

var foo = function() {
 return "I love Codecademy!"; // put code here
};
 
function foo() {
 return "I love programming!"; // put code here
}

let phrase = foo();
console.log(phrase);