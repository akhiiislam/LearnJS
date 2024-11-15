function wordworld(myadv,myverb,mynoun){
var result="";
result += myadv+" "+mynoun+" "+myverb+" is Johny";
return result;
}
console.log(wordworld("The","name","dog"))
var myarray=["akhi","nipu","liton"];
var myArray=[["akhi","bakar"],[["nipu","abir"],["bristy","abir"]]];
//console.log(myarray[1][0])
//push for include variables in array and pop for removing the elements
myarray.push(["dog","cat"])
//console.log(myarray)
//console.log(myarray.pop())
myarray.pop()
//console.log(myarray)
//myarray.shift()
//console.log(myarray)
/*function reusable(){
var x=10;
x+=1;
console.log(x)
}
reusable();
reusable();*/
function reusable(x){
    x++;
   // console.log(x)
    }
    reusable(10);
    reusable(11);



