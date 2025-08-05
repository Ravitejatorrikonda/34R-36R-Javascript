/**
 * 
 * 
 */

let options={
    "method":"DELETE",
    // "headers":{
    //     "Context-Text":"application/json"
    // },
    // "body":JSON.stringify({
        
    //     "name":"Monkey"
    // })
}
fetch("http://localhost:5000/data/")
.then(response=>{
   return response.json()
})
.then(data=>{
    for(let i=0;i<data.length;i++){
        fetch(`http://localhost:5000/data/${data[i].id}`,options)
        .then(response=>{
            if(response.ok){
                console.log("deleted",response.statusText)
            }else{
                console.log("Not Deleted");
                
            }
        })
    }
})