/**
 * functions
 * parameters,arguments
 * return 
 * FEC
 * 
 */

function one(a, b) {
    console.log("one");
    return a + b + two(b, a)

}
function two(a, b) {
    console.log("two");
    return a * b;

}
console.log(two(12, 40) + one(12, 40))

console.clear()


//callback
/**
 * callback :-
 *  function defination are passed through a an argument to another function as a parameter
 * 
 * callback functions are used in asynchronous operations, array methods,and events, and promises.
 * 
 * syn:-
 * 
 *     function functionName(parameters){
 *         //statements
 *       parameter[arguments]
 * }
 * functionCallig(anotherFunctionName)
 * 
 */

function sayHI(sayHello){
    console.log("hi")
    console.log(sayHello);
    sayHello()
    
}
function sayHello(){
    console.log("Hello");
    
}
sayHI(sayHello)
console.clear();


function x(){
    console.log(y, z);
    console.log("x function");
    y()
}
function y(){
    console.log("y Function")
}
function z(){
    console.log("Z function")
}
x()








