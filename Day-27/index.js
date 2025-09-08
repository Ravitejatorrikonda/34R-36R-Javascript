/**
 * Error handling in javascript
 * -----------------------------
 * 
 * try, catch, throw,finally
 * 
 */


// try{
//     console.log(x)
// }
// catch(err){
//     console.error(err.message)
// }
// console.log("completed")


// function X(val1,val2){
// try {
//     if(val2===0){
//         throw new Error( "Zero is Not valid")
//     }
//     else{
//         console.log(val1/val2)
//     }
// } catch (error) {
//     console.error(error.message)
// }
// }
// X(10,10)

// function x(){
//     throw new Error("Hello there")
// }
// try {
//     x();

// } catch (error) {
//     console.error(error.message);

// }
// console.log("completed");


// fetch("http://localhost:3000/data/1")
//     .then(res => {
//         if (!res.ok) {
//             throw `data not get ${res.status + res.statusText}`
//         }
//         return res.json()
//     })
//     .then(res => console.log("hello"))
//     .catch(data => console.error(data))


//Promise.resolve("javascript")
// async function x() {
//     console.log("redux");
//     let data= await "javascript"
//     console.log(data);
    
//     console.log("nodejs");
// }
// x()
// console.log("react");


// async function getsum(){
//     try {
//        let res= await fetch("http://localhost:3000/data/1")
//        if(!res.ok){
//         throw `data not enter ${res.status + res.statusText}`
//        }
//        let data=await res.json()
//        console.log(data);
       
//     } catch (error) {
//         console.error(error)
//     }
    
    
// }
// getsum()


let deletDataByGet=async (name) => {
    try {
        let res=await fetch("http://localhost:3000/data")
        if(res.ok){
             let data=await res.json()
             data.forEach(async obj => {
                let res=await obj.name
                console.log(res)
             });
        }else{
                throw "data not enter"
        }
    } catch (error) {
        
    }
}
deletDataByGet("raju")





