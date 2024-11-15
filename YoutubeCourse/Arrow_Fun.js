//Use arrow function to consize the error
//var x=(val)=>val+2;
//rest operator(...)
function sum(...numbers){
    var total=0;
    for(var number of numbers){
        total+=number;
    }
return total;}
//console.log(sum(2,3,4,5,6))
function sum(){
    var summ=0;
    for(var i=0;i<10;i++)
    {
        summ+=i;
    }return summ;
}console.log(sum())
//spread operator
const array1=[1,2,3,4,5];
let array2=[...array1];
const mergeArray=[...array1,...array2];
console.log(array2)
