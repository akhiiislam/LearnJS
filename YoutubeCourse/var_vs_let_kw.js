//let doesn't declare the variable twice 
//Ex1:
/*function Cat(){
    "use strict";
let catName="Tuli";
catName="Pussy";//won't run(let) 1stly initialize
return catName;
}*/
//console.log(Cat())
function checak(){
    let i="function scope";
    if(true){
      let i="block scope";
        console.log("block skope is",i);
    }
    
    console.log("function scope is ",i);
    return i;
}
checak();
//let will be in the same scope but var isn't it is in the result of previous scope.