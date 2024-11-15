/*var myGlobal=10;
function fun1(){

var oopglobal=14;
oopsglobal=5;
}
function fun2()
{
var output="";
if(typeof myGlobal!="undefined")
{
output+="my global:"+myGlobal;

}
if(typeof oopsglobal!=undefined){
output+="\n"+oopsglobal;
}
console.log(output);

}
fun1();
fun2();

//priority local and golbal scope
var outerwear="T-shirt";
function wear(){
var outerwear="Gown";
return outerwear;
}
console.log(wear())
console.log(outerwear)
function timesfive(num){

return num*5;
}
console.log(timesfive(10))
var sum=0;
function add()
{
sum+=5;
}

console.log(add());
var process=0;
function processArg(num){
var sum=10;
return sum+num;
}
process=processArg(10);
console.log(process)
function inlinearray(array,item)
{array.push(item);
    return array.shift();

}
var textarray=[1,2,3,4,5];
console.log(textarray)
console.log(inlinearray(textarray,6))
console.log(JSON.stringify(textarray))//JSON.stringify converts the interger into string
function boolean(a,b){
if(a==b)
{return "true";}
return "false";}
console.log(boolean(10,"10"));//for double = the ans true for triplr false*/
/*function comparison(num){
if(num>20)
{
    return "greater";
}
else if(num<20)
{
    return "smaller";
}
else
return "equally";
}
console.log(comparison(20))
function comparison(num){
if(num<5)
    return "tiny";
else if(num<10)
    return "small";
else if(num<15)
    return "medium";
else if(num<20)
    return "large";
else
    return"extra large";
}
console.log(comparison(10))
var names=["Hole-in-one","eagle","bardie","par","bogey","double bogey"];
function comparison(par,strokes){
if(strokes==1)
    return names[0];
else if(strokes<=par-2)
    return names[1];
else if(strokes==par-1)
    return names[2];
else if(strokes==par)
    return names[3];
else if (strokes==par+1)
    return names[4];
else if(strokes==par+2)
    return names[5];
else
    return"change it";
}
console.log(comparison(1,5))
function casesensitive(val)
{
var answer="";
switch(val){
case 1: answer="alpha";
break;
case 2: answer="bita";
break;
case 3: answer="gama";
break;
case 4: answer="theta";
break;
default:
    answer="nothing";
}
return answer
}
console.log(casesensitive(0))
function isless(a,b){
return a>b;
}
console.log(isless(10,5))*/
