/**
 * 
 * refarr.method()
 * 
 * Array Itarative mathods:-
 * 
 * Map
 * filter
 * foreach
 * find
 * reduce
 * reduceright
 * some
 * 
 * refarr.method(callback)
 * 
 */

// let arr=[1,2,3, 4,5]
// let print=function(element,index,arr){
//     console.log(element,index,arr)
// }

// arr.forEach((ele,ind,arr)=>console.log(ele,ind,arr))

// data=[
//     {
//       "id": 1,
//       "todo": "Do something nice for someone you care about",
//       "completed": false,
//       "userId": 152
//     },
//     {
//       "id": 2,
//       "todo": "Memorize a poem",
//       "completed": true,
//       "userId": 13
//     },
//     {
//       "id": 3,
//       "todo": "Watch a classic movie",
//       "completed": true,
//       "userId": 68
//     },
//     {
//       "id": 4,
//       "todo": "Watch a documentary",
//       "completed": false,
//       "userId": 84
//     },
//     {
//       "id": 5,
//       "todo": "Invest in cryptocurrency",
//       "completed": false,
//       "userId": 163
//     }
// ]
// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     }
// }
// data.forEach(element => {
//     // console.log(element)
//     let obj=element
//     options.body=JSON.stringify(obj)
//     fetch("http://localhost:3000/todo",options)
//     .then(res=>{
//         if(res.ok){
//             console.log(res.statusText)
//         }else{
//             console.log("data Not Posted")
//         }
//     })
// });
// let arr=["varun","pavan","akash","raviteja"]
// refArr=[]
// arr.forEach((element,ind,arr)=>
// refArr.push(element.toUpperCase())
// arr[ind]=element.toUpperCase()
// )
// console.log(arr)
// let refArr=arr.map(element=>element.toUpperCase())
// console.log(refArr)

let arr2=[1,2,3,4,5]
let refArr2=[]
for(let i=0;i<arr2.length;i++){
    refArr2.push(arr2[i]**2)
}
console.log(refArr2)

let refArr=arr2.map(ele=>ele*ele)
console.log(refArr)

// [1,4,9,16,25]