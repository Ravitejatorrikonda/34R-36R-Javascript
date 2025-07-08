/**
 * functions
 * it is a block of code
 * it can be used any number of times
 * re arrange the javascript code
 * named functions can be hoisted in javascript
 * 
 * function defination
 * 
 * function functionName([parameters]){
 * //statements
 * [return]
 * }
 * 
 * function calling
 * functionname([arguments])
 * 
 * 
 * parameters and aruguments
 * 
 * 2*150=300
 */

function maagie(maagiepacket){
    console.log(`removed ${maagiepacket} to start cooking`);
    
}
maagie("2 packets")
console.clear()

function addsum(quantity, price){
    console.log(quantity*price)
}
addsum(2,120,34,43,55,66,777)
console.clear()
// 

function devara(hero, maincharcter){
    console.log("devara");//devara
    pushpa(hero+ maincharcter)//ntrparakashraj
    console.log("hero");//hero
    pushpa("alluarjun", "pk")
    
    
}
function pushpa(hero, villan){
    console.log("pushpa");
    console.log(hero+villan);
    
    
}
devara("ntr","parakashraj")
console.clear();



// return
//return keyword is used for stoping the function exicution,
//if you have any statements will not exicute

function demo(a,b){
   
   return a+b;
    
}
var result=demo(10,20)
console.log(result);

/**
 * 
 * function with return keyword
 * 
 * function functionName(){
 * 
 * return "something"
 * 
 * }
 * 
 * var a=functionName();
 * console.log(a)
 * 
 * console.log(functionName())
 * 
 */
console.clear()




console.clear()

function funTwo(){
    for(i=0; i<=2; i++){
        console.log(i)
        return;
    }
}
funTwo()








