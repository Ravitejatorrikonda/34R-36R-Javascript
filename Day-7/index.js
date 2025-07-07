/**
 * Functions:-
 * functions are block of code .it can be re arrange our javascript code,it can be re used anu number of times,in javascript named functions are hoisted.
 * 
 * functions are reusable block of code
 * 
 * types of functions:-
 * 
 * named functions
 * first class functions
 * arrow functions
 * anonymous functions
 * counstructon functions
 * call back functions
 * pure functions
 * impure functions
 * lower oredr functions
 * high order functions
 * opetional parameter function
 * default parameter functions
 * Imediate invoked functions
 * reset functions
 * generatore functions
 * 
 * function basic syntax:-
 * 
 * 
 * syntax:-
 * 
 * 1.function defination
 *     function functionName([parameters]){
 *    //statements
 *    return//opetional
 * }
 * 
 * function defination is always stored in function calling
 * 
 * 
 * 2. function calling
 * 
 *     functionName([arguments])
 * 
 * 
 */


function apple(){
    var a=20;
    console.log(a++ + ++a + --a);//63
    banana()
    console.log(a)

    
}
function banana(){
    console.log("Banananaaaaaaaa..........");
    cherry()
    
}
function cherry(){
    var b=10;
    console.log(++b);//11
    console.log(b);//11
    
    
}
apple()
console.clear()


// var a=10
// function funOne(){
//     let b=34;
    
    
//     console.log(b);
// }

// funOne()
