/**
 * 
 * 
 */

// let table=document.createElement("table")
// let tr=document.createElement("tr")
// for(let i=1;i<=3;i++){
//     let td=document.createElement("td")
//     td.innerText=i
//     tr.appendChild(td)
// }
// table.appendChild(tr)
// document.body.appendChild(table)

// let div=document.createElement("div")
// div.innerText="<i style='color:red;'>javascript</i>"

// let div2=document.createElement("div")
// div2.innerHTML="<i style='color:red;'>javascript</i>"
// console.log(div,div2)
// document.body.append(div,div2)


/**
 * 
 * let arr=[]
 * 
 * div
 *    ->p names
 *    ->p names
 *    ->p names
//  */
// let arr=["raju","ramu","rani","sujatha","vishnu","devara"]

// let container=document.createElement("div")
// arr.forEach(data=>{
//     let p=document.createElement("p")
//     p.innerText=data
//     container.appendChild(p)
// })
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// document.body.appendChild(container)

// for(let data of arr){
//     console.log(data)
// }
// for(let data in arr){
//     console.log(arr[data])
// }

const users = [
  { id: 1, name: "Ravi", age: 25, city: "Hyderabad" },
  { id: 2, name: "Anita", age: 28, city: "Bengaluru" },
  { id: 3, name: "Kiran", age: 22, city: "Chennai" },
  { id: 4, name: "Sita", age: 30, city: "Mumbai" },
  { id: 5, name: "Arjun", age: 27, city: "Delhi" },
  { id: 6, name: "Meena", age: 24, city: "Kolkata" },
  { id: 7, name: "Vikram", age: 29, city: "Pune" },
  { id: 8, name: "Priya", age: 26, city: "Hyderabad" },
  { id: 9, name: "Ramesh", age: 32, city: "Ahmedabad" },
  { id: 10, name: "Lakshmi", age: 23, city: "Visakhapatnam" }
];

/**div
 *  p
 * id:1,name:hgsddhs,age:25
 * 
 */

// let container=document.createElement("div")
// users.forEach(data=>{
//     let p=document.createElement("p")
//     p.innerText=`id: ${data.id}, name: ${data.name}, age: ${data.age}.....`
//     container.appendChild(p)
// })
// document.body.append(container)

// let div=document.createElement("div")

// div.id="main"
// div.className="container"
// div.setAttribute("name","value")
// console.log(div);
let arr=["Home", "about us","contact","Projects"]

let header=document.createElement("header")
header.className="main"
arr.forEach(data=>{
    let nav=document.createElement("nav")
    nav.innerText=data
    header.appendChild(nav)
})
document.body.appendChild(header)
