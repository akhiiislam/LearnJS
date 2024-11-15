var animal={
"name":"dog",
"legs":4,
"tail":1,
"friends":["Everything!"],
};
/*var nameanimal="name";
var nonveg=animal[nameanimal];
console.log(nonveg)
//change the name of the animal
animal.name="Cat";
var nameanimal="name";
var nonveg=animal[nameanimal];
console.log(nonveg)
animal.barks="mew-mew";
console.log("animal");
function phoneticlookup(val){

var result="";

var lookup={
"alpha":"adams",
"bravo":"Boston",
};
result=lookup[val];
return result;
}
console.log(phoneticlookup("alpha"))
//switch to obj 

var lookup={
"alpha":"adams",
"bravo":"Boston",
};
function checkobj(check)
{
if(lookup.hasOwnProperty(check))//hasOwnproperty defines the property
    return lookup[check];
else
    return "Not defined";
}
console.log(checkobj("alpha"))
var lookup={
"goal":{
    "football":{
        "legball":{
            "favgame":"japan",
            "populargame":"world"
    },
}
}
};
var favouritegame=lookup.goal.football.legball["favgame"];
console.log(favouritegame)
var collection={
    "14661":{
        "artist":"trailor swift",
        "album":"Rock On",
        "Track":[
            "Go to the log away",
            "Move on"
        ],
    },
    "14662":{
        "album":"New Life",
        "artist":"Salina Gomej",
        "Track":[
            "Baby",
            "Foreverj"
        ]
    }
};
//make the copy of the collections
var collectionCopy=JSON.parse(JSON.stringify(collection));
function updateRecords(id,property,value){
    if(value===""){
        delete collection[id][property];
    }else if(property==="track"){
        collection[id][property]=collection[id][property]||[];
        collection[id][property].push(value);}
    else{
        collection[id][property]=value;
    }
    console.log(collection[id][property])
return collection;
}

//console.log(updateRecords("14661","track","akhi"))*/
// contact list property clling
var contact=[{
    "firstName":"Akhi",
    "lastName":"Islam",
    "number":"01318751114",
    "location":"Dinajpur",
    "likes": ["Pizza","Pasta"]

},
{ "firstName":"bakar",
"lastName":"siddik",
"number":"01941729495",
"location":"Munshiganj",
"likes":["Rice","Meat"]
}];
function info(name,prop){
    for(var i=0;i<contact.length;i++){
        if(contact[i].firstName==name){
            return contact[i][prop]||[];
        }
    }

}
console.log(info("Akhi","number"))
