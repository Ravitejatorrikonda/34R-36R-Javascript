/**
 * 
 * 
 */

// let promise=new Promise((resolve,reject)=>{
//    reject()
// })
// promise.then(data=>console.log("success"))
// .catch(data=>console.warn("error"))

// let promise=new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         console.log("something")
//     },1000)
//     reslove()
// })
// promise.then(data=>console.log("success"))

//https://fakestoreapi.com/products

// fetch(URL).then(response=>{
    
    //     if(response.ok){
        //         return response.json()
        //     }
        // })
        // .then(data=>console.log(data))
        
        // fetch(URL).then(response=>response.json())
        // .then(data=>console.log(data)).catch((data)=>console.log("error"))
        
        
        const URL="https://fakestoreapi.com/products"

        fetch(URL).then(data=>data.json())
        .then((data=>{
            for(let i=0; i<data.length;i++){
                console.log(data[i])
            }
        }))