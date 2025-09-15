/**
 * 
 * document.body
 * document.links
 * document.html
 * document.image
 * 
 * methods:-
 * ----------
 * getElementById
 * getELementsByClassName
 * getELementByquerrySelectiore
 * querySelectoreAll 
 */

// let div=document.getElementById("container")
// console.log(div);
// console.log(div.innerText);
// console.log(div.innerHTML);
// div.innerText="hello There 2"
// div.innerHTML="hello There 3"
//div
//   p:id:1
    //    id:2
    //    id:3

// let div=document.getElementById("container")
// let arr=[{"id":1},{"id":2},{"id":3},{"id":4}]
// arr.forEach(obj=>{
//     let p=document.createElement("p")
//     p.innerText=`id:${obj["id"]}`
//     div.appendChild(p)
// })
let div=document.getElementById("container")
async function getData() {
    let res= await fetch("http://localhost:3000/products",{"method":"GET"})
    let data=await res.json()
   printdata(data)
    
}

function printdata(data){
    data.forEach(obj => {
        let item=document.createElement("div")
        item.innerHTML=
        `
        <h3>${obj.id}</h3>
        <p>${obj.title}</p>
        <p>${obj.price}</p>
        <img src='https://m.media-amazon.com/images/I/61Rx9tHudUL._UF1000,1000_QL80_.jpg'>
        <p>${obj.description}</p>
        `
        div.appendChild(item)
    });

}

getData()







