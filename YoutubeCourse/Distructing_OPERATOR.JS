//it is the method to unpack the array,object and working with thwm
//array distructing
//EX-1
/*const voxel=["akhi","nahida","mmoon"];
const[first,second,...rest]=voxel;
console.log(first)
//EX-2
var x,y,z;
var example={x:3.6,y:4.6,z:5.9};
x=example.x;
y=example.y;
z=example.z;
//const{x:a,y:b,z:c}=example;
//console.log("the previous x",x,y,a,b)
//object distracting
var average_temp={
    today:79,
    tomorrow:72
};

function temperature(tomorrowtemp){
   const {tomorrow:temp}=tomorrowtemp;
   return temp;
}
//console.log(temperature(average_temp))*/
var LOCAL_FORECAST={
    today:{min:82,max:90},
    tomorrow:{min:43,max:89}
};
function temp(temperature){
    const {tomorrow:{max:newtemp}}=temperature;
    return newtemp;

}
console.log(temp(LOCAL_FORECAST))
//distructing object
const[x,y,,z]=[1,2,3,4,5];
console.log(z);
//distructing position 
let a=6,b=8;
(function(){
    [a,b]=[b,a];
    
    
})()// evolked function
console.log(a)
//rest operator
var A=[1,2,3,4,5,5];
function remv(){
var B=[,, ...A];
return B;
}
console.log(remv())