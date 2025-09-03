/**
 * intraduction
 * datatypes
 * v8 structure
 * opratores
 * conditional statements
 * loops
 *
 *  
 * functions
 *  named functions
 * callbacks
 * anonymous function
 * arrow functions
 * callbackhell
 * promises
 * fetch
 * array methiods
 * asynch and await
 * 
 * 
 * callbacks in js:-
 * ---------------
 * a function which is passed  as a arugument to the another function callbacks
 * 
 * function funName(){
 * //statements
 * }
 * funname
 * 
 * anotherfun(funName)
 */

// function sum(callback){

//     console.log(callback(10+10));


// }




// sum(a=>{

// })

// function x(a, b, c) {
//     console.log("start")
//     console.log(b(a + 10))
//      console.log(c(a));



// }

// x(10,
//     a => a + 10,
//     a => a + 10
// )

/**
 * promises are used to perform asynchronous operations
 * and also it used fot the to overcome the callback hells
 * es-6
 * 
 * let variablename=new Promise((res,rej)=>{
 * //statements
 * res()
 * rej()
 * })
 * 
 */


// function sum(){
//     return  Promise.resolve("success")
// }
// console.log(sum())
// sum().then(res=>console.log(res))



// console.log(Promise.resolve("hello").then(res=>console.log(res)));
// Promise.reject("fail").catch(res=>console.log(res))



// function a(){
//     console.log("A");

// }
// function b(){
//     setTimeout(()=>{
//         console.log("B");
//     },1000)

// }
// function c(){
//     return Promise.resolve("success")

// }
// function d(){
//     console.log("D");

// }
// a()
// b()
// c().then(res=>console.log(res))
// d()


/**
 * async and await
 * 
 * 
 */
// async function x() {
//     return Promise.resolve("hello there")
// }
// console.log((x()));
// x().then(res=>console.log(res))



async function sum() {
    let promise1 = new Promise((resolve, reject) => {
        resolve("hello")
    })
    // promise1.then(res=>console.log(res))
    let res=await promise1
    console.log(res)

}
// console.log(sum())
sum()

fetch("url").then(res=>res.json()).then(data=>console.log(data))

async function getdata() {
    let res=await fetch("url")
   
    let data=await res.json()
    console.log(data)
}















