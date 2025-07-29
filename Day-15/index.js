/**
 * 
 * Promises in javascript:-
 * -----------------------
 * To overcome the callbaqck Hells
 * to perform asynchronous operations
 * 
 * sy:-
 * variable ref variable=new Promise(callback)
 * 
 */

// let promise=new Promise((response,reject)=>{
// let data=10;
// if(data==="10"){
//     response()
// }
// else{
//     reject()
// }
// })
// promise.then(()=>console.log("success")).catch(()=>console.log("failure"))


// function exicute(callback){
//     return new Promise(callback)
// }
// exicute((resolve,reject)=>{
//     reject("failure")
// }).then(()=>{console.log("success")}).catch((rej)=>console.log(rej))

// function A(){
//     console.log("A")
// }
// function B(){
//     console.log("B")
// }
// function C(){
//     console.log("C")
// }
// function D(){
//     console.log("D")
// }
// A()
// setTimeout(B,1000)
// Promise.resolve().then(()=>C())
// D()

// function sum(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val + 10)
//     })
// }
// function sub(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val -5)
//     })
// }
// function mul(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val * 5)
//     })
// }
// function div(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val / 2)
//     })
// }

// sum(10).then((sumres) => sub(sumres))
// .then((subres)=>mul(subres))
// .then((mulres)=>div(mulres))
// .then((divres)=>console.log(divres))












// sub(15).then((subres)=>console.log(subres))

// function sub(val, callback) {
//     setTimeout(() => {
//         callback(val -5)
//     })
// }
// function mul(val, callback) {
//     setTimeout(() => {
//         callback(val * 5)
//     })
// }
// function div(val, callback) {
//     setTimeout(() => {
//         callback(val / 2)
//     })
// }
// sum(10,(sumres)=>{
// // console.log(sumres);
// sub(sumres,(subres)=>{
// // console.log(subres);
// mul(subres,(mulres)=>{
//     div(mulres,(divres)=>{
//         console.log(divres)
//     })
// })

// })

// })
function PlaceOrder(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`order${orderId} Placed`)
       resolve()
    })
}
function dispatchOrder(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`order${orderId} dispatched`)
        resolve()
    })
}
function shippingOrder(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`order${orderId} shipped`)
        resolve()
    })
}
function DeliverOrder(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`order${orderId} delivered`)
        resolve()
    })
}




PlaceOrder(1234).then(()=>{dispatchOrder(1234)})
.then(()=>shippingOrder(1234))
.then(()=>DeliverOrder(1234))
.then(()=>console.log("Tracking completed"))

// async function call() {

//     await dispatchOrder(1234)
//     await shippingOrder(1234)
//     await DeliverOrder(1234)
//     console.log("Tracking completed")
    
// }
// call()





// let promise=new Promise((resolve,reject)=>{
//     resolve()
// })
// promise.then(()=>{console.log("success")})
// console.log(promise);











// function dispatchOrder(orderId, callback) {
//     console.log(`order${orderId} dispatch`)
//     callback()
// }
// function shippingOrder(orderId, callback) {
//     console.log(`order${orderId} Shipped`)
//     callback()
// }
// function DeliverOrder(orderId, callback) {
//     console.log(`order${orderId} Dilivered`)
//     callback()
// }

// PlaceOrder(1234, () => {
//     dispatchOrder(1234, () => {
//         shippingOrder(1234, () => {
//             DeliverOrder(1234, () => {
//                 console.log("Tracking completed")
//             })
//         })
//     })
// })