/**
 * async and await 
 * async key word is used to perform a asynchronous operations
 * async is return a promise object
 * 
 */

// function x(){
//     return Promise.resolve("hello")
// }
// // console.log(x())



// x().then(res=>console.log(res))
// console.log(Promise.resolve("hello").then(res=>console.log("hello")));
// let promise1=new Promise(res=>{
//     res("hello")
// })
// promise1.then(res=>console.log(res))

// let promise1=new Promise((resolve,reject)=>{
//     resolve("hello there")
// })

// async function getdata(){
//    let res= await promise1
//    console.log(res)
// return promise1.then(res=>res)

// }
// console.log(getdata())
// getdata().then(res=>console.log(res))

// let promise1=new Promise((resolve)=>{
// resolve("hello world")
// })

// function y(){
//     return promise1.then(res=>res)
// }
// y().then(res=>console.log(res))

// async function x() {
//     let res=await promise1
//     console.log(res)
// }
// x()

// fetch("http://localhost:3000/data")
// .then(res=> res.json())
// .then(data=>console.log(data))
// async function getdata() {
//   let res= await fetch("http://localhost:3000/data")
// //   console.log(res)

// let data=await res.json()
// console.log(data)

//   let data=await res.json()
//   console.log(data)
// }
// getdata()
// let promise1=new Promise(resolve=>{
//     resolve("hello there")
// })

// async function x(){
//  let res=await Promise.resolve("hello")
//  console.log(res)
    
//  console.log("completed")
// }
// x()

// async function printdata() {
//     let promise1=new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("Hello There")
//         },2000)
//     })
//     // promise1.then(res=>console.log(res))
//     let res= await promise1
//     console.log(res)
//     console.log("completed")
    
// }
// printdata()
// Promise.resolve(10).then(x => x * 2).then(x => console.log(x));
new Promise((resolve, reject) => {
  reject("Failure");
})
.then(() => console.log("Resolved"))
.catch(() => console.log("Caught"))
.finally(() => console.log("Done"));
