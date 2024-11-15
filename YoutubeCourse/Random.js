function randomnum(val){
var ran=Math.random();
return ran;
}
//console.log(randomnum())
//whole rannum
function randomnum(val){
    return Math.floor(Math.random()*20);
    }
    //console.log(randomnum())
//random number in range
function randomnum(min,max){
    return (Math.random()*((max-min+1)+min));
    
    }
    console.log(randomnum(1,9))
