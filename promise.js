// // ket witPromise = promise((resollves, rejected) => {
// //     executione ConvolverNoderesolved(" there is a text from the tree resolvedd")
// // })

// const { useOptimistic } = require("react");

// // async = ElementInternalsasync function name (parents {
// //     await response;
// // })


// //setTimeout

// // console.log("1. starting point");
// //     var a = "zero"

// // setTimeout(()=>{
// //     a = "one"
// // }, 1000)

// // console.log(a);

// // call stack {LIFO}
// //  console.log(a)
// //  a = 0
// //  console.log(staring point)

// //  // task queue (FIFO)
// //   console.log(1. staring point)
// //   a = 0
// //   console.log(a)
// //   set timeout

//   console.log("1. starting point");
// var a = "zero"

// setTimeout(()=>{
//     a = "one"
    
// }, 1000)

// // console.log(a);
// c = 5
// function funca(funcb, c){
//     return funcb(c + 2);
// }

// function funcb(c){
//     return c
// }

// funca(funcb, 5)

//Call stack - what am i doing right now (LIFO - last in first out)
//Task queue -  what is ready to run (FIFO - first in first out)

// console.log(`1 ${new Date().getSeconds()}`)
// setTimeout(()=>{
//     console.log(`2 ${new Date().getSeconds()}`)
// }, 10)
// console.log(`3 ${new Date().getSeconds()}`)
// console.log(`4 ${new Date().getSeconds()}`)
// console.log(`5 ${new Date().getSeconds()}`)
// setTimeout(()=>{
//     console.log(`6 ${new Date().getSeconds()}`)
// }, 0)
// console.log(`7 ${new Date().getSeconds()}`)
// console.log(`8 ${new Date().getSeconds()}`)
// console.log(`9 ${new Date().getSeconds()}`)
//console.log(`10 ${new Date().getSeconds()}`)
//   1. wake up
//   2. shower - 3 seconds
//   3. hubby cooks food - 5 secs
//   4. eat breakfast - 2 secs
//   5. get dressed - 1 sec


// console.log(`1. wake up:  ${new Date().getSeconds()}`)

// setTimeout(function shower(){
//     console.log(`2. Shower: ${new Date().getSeconds()}`);
// }, 3000)

// setTimeout(function breakfast(){
//     console.log(`3. Breakfast cooking: ${new Date().getSeconds()}`);
// }, 5000)

// setTimeout(function eat breakfast(){
//     console.log(`4. eat breakfast: ${new Date().getSeconds()}`);
// }, 2000)
// setTimeout(function get dressed(){
//     console.log(`5. get dressed: ${new Date().getSeconds()}`);
// }, 5000)

// creating a promise

const myName = "Kseniia";
const myPromise = new Promise((resolve, reject) => {
    //setTimeout (()=>{
        if(myName === "Kseniia") {
            resolve("Kseniia is a student of MCA")
        }else{
            reject("Kseniia is not a student of MCA")
        }
    //}, 3000)

})

// console.log(myPromise)
// function print(result){
//     console.log(result)

myPromise
    .then((result) => console.log(result))
    .catch((reject) => console.error(reject))
