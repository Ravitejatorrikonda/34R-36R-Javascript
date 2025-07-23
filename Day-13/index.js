/**
 * 
 */

// console.log("start");
// setTimeout(() => {
//     console.log("First call back")
// }, 3000);
// console.time("time")
// for(let i=0;i<50000;i++){
//     console.log("i")
// }
// console.timeEnd("time")
// setTimeout(() => {
//     console.log("second call back");
    
// }, 1000);

// 3 sec
// 20 sec


// var a=(val,callback)=>callback(val+10);

// a(10,(message)=>{
// console.log(message);

// })
function add(val,callback){
    callback(val+10)
}
function sub(val,callback){
    callback(val-5)
}
function mul(val,callback){
    callback(val*2)
}
function div(val,callback){
    callback(val/2)
}

add(10,(addres)=>{
// console.log(addres);
sub(addres,(subres)=>{
// console.log(subres);
mul(subres,(mulres)=>{
// console.log(mulres);
div(mulres,(divres)=>{
console.log(divres);

})

})


})

})




// div(10,(message)=>{
//     console.log(message);
    
// })
// mul(5,(message)=>{
//     console.log(message);
    
// })

// sub(50,(message)=>{
//     console.log(message);
    
// })


// add(10,(message)=>{
//     console.log(message);
    
// })
console.clear()

function orderPlaced(callback){
    console.log("order placed");
    callback("failed to dispatch",false)
    
}
function shipping(callback){
    console.log("shipping success");
    callback("outof delivery")
    
}
orderPlaced((message1,status)=>{
    if(status){
    console.log(message1);
    
    shipping((message2)=>{
        console.log(message2);
        
    })

}else{
    console.log(message1);
    
}
})