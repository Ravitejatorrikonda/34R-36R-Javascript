/**
 * 
 * 
 */

// function order(orderId, callback) {
//     setTimeout(() => {
//         callback(`order${orderId} placed`)
//     }, 1000)
// }

// function dispatch(orderId, callback) {
//     setTimeout(() => {
//         callback(`order${orderId}dispatched`)
//     }, 1000)
// }
// function shipping(orderId, callback) {
//     setTimeout(() => {
//         callback(`order${orderId}shipping`)
//     }, 1000)
// }
// function diliver(orderId, callback) {
//     setTimeout(() => {
//         callback(`order${orderId}dilvered`)
//     }, 1000)
// }
// order(1234, (ordres) => {
//     console.log(ordres);
//     dispatch(1234, (disres) => {
//         console.log(disres);
//         shipping(1234, (shipres) => {
//             console.log(shipres);
//             diliver(1234, (divres) => {
//                 console.log(divres);

//             })
//         })

//     })

// })



// order(1234,(ordres)=>{
// console.log(ordres);

// })

/**
 * 
 * Promises in javascript
 * To Overcome CallbackHells
 * 
 * Promises are difined as state, whether it is success state or failure state
 * 
 * sy:-
 * 
 * variable refvariable=new Promise(callback)
 */

// let promise=new Promise((resolve,reject)=>{
//   if(false)
//     resolve()
// else
//   reject()
// })
// promise.then(()=>{console.log("success")})
// .catch(()=>{console.log("failure")})


// function promise(callback){
//     return new Promise(callback)
// }
// promise(()=>{
//     console.log("something happend");

// })

// function call(callback) {
//     console.log("start");

//     setTimeout((resolve, reject) => {
//         resolve("success")
//     },1000)
//     console.log("end");

// }
// call(()=>{
//     console.log("hello");

// })

// function logA(){console.log("A")}
// function logB(){
//     setTimeout(() => {
//         console.log("B");

//     }, 1000);
// }
// function logC(){
//     Promise
// }
// function logD(){console.log("A")}

// Promise.resolve().then(()=>{console.log("success");})
// Promise.reject().catch(()=>{console.log("failure");})

// function sum(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val + 10)
//     })
// }

// function sub(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val - 5)
//     })
// }
// function mul(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val * 5)
//     })
// }
// function div(val, callback) {
//     return new Promise((resolve, reject) => {
//         resolve(val / 2)
//     })
// }

// sum(10).then((sumres) => sub(sumres))
//     .then((subres) => mul(subres))
//     .then((mulres) => div(mulres))
//     .then((divres) => console.log(divres))

// sum(10, (sumres) => {
//     // console.log(sumres);
//     sub(sumres, (subres) => {
//         // console.log(subres);
//         mul(subres, (mulres) => {
//             div(mulres, (divres) => {
//                 console.log(divres);

//             })
//         })

//     })

// })
let promise1 = new Promise((resolve, reject) => {
    console.log("Promise 1");
    setTimeout(() => {
        resolve()
    }, 1000)

})
let promise2 = new Promise((resolve, reject) => {
    console.log("Promise 2");
    setTimeout(() => {
        resolve()
    }, 3000);

})
let promise3 = new Promise((resolve, reject) => {
    console.log("Promise 3");
    setTimeout(() => {
        resolve()
    }, 1500);

})
promise1.then(() => {
    console.log("Promise 1 success")

    promise2.then(() => {
        console.log("Promise 2 success")

        promise3.then(() => {
            console.log("promise 3 success")

        })
    })
})

// promise1.then(()=>{console.log("promise 1 success")})
// promise2.then(()=>{console.log("Promise 2 success")})
// promise3.then(()=>{console.log("promise 3 success")})

let Promise1=new Promise((resolve,reject)=>{
resolve()
})
promise1.then(()=>console.log("success")
)