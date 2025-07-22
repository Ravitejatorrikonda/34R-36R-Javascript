/**
 * 
 * Arrow functions
 * let a=()=>{
 * 
 * }
 * 
 * Synchronous vs Asynchronous
 * 
 */


// function x(){
//     console.log("x function");
    
    
// }
// function y(){
//     console.log("y function")
// }
// x()
// y()

// function x(){
//     var a=10;
//     console.log(a)
// }
// x();
// console.log(a)

// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// },2000)
// console.log("3")

// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"), 500);
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

function x(){
    console.log("X Function");
    
}
function y(){
    setTimeout(()=>console.log("y function"),3000)
}
function z() {
    setTimeout(()=>console.log("Z Function"), 2000)
    
}
x()
y()
z()