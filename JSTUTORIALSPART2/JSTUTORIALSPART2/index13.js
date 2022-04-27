// W3Schools
// Different ways of creating object

// const person = {
//     name: "Samarpita",
//     age: 18,
//     gender: "F"
// }
// const person = {};
// person.name="Samarpita";
// person.age=18;
// person.gender="F";
const person = new Object();
person.name="Samarpita";
person.age=18;
person.gender="F";
console.log(person);

//accessing properties
for(x in person){
    console.log(x+" is "+person[x]);
}
//adding properties
person.nationality="Indian";
console.log(person);
//deleting properties
delete person.nationality;
console.log(person);
//The delete operator should not be used on predefined JavaScript object properties.

//nested objects
const myObj={
    name:"Samarpita",
    age:18,
    hobbies:{
        h1:"singing",
        h2:"coding",
        h3:"badminton"
    }
}
console.log(myObj.hobbies.h2);

const obj1={
    name:"John",
    age:21,
    cars:[
        {
            name:"Nissan",
            speed:90
        },
        {
            name:"Maruti 800",
            speed:70
        }
    ]
}
console.clear();
let str1 = `${obj1.name} is ${obj1.age} years old and he owns a `;
let cars=obj1.cars;
cars.forEach(function(e){
    let carName = e.name;
    str1=str1.concat(`${carName}`);
    if(cars.indexOf(e)+1!=cars.length){
        str1=str1.concat(` and a `);
    }
});
console.log(str1);

document.getElementById("temp").innerHTML=obj1.cars[0].name;
document.getElementById("temp").innerHTML=Object.values(obj1);

//constructor
function School(name, loc, type){
    this.name=name;
    this.loc=loc,
    this.type=type
}
let s1=new School("Sagar School","Rajasthan","Boarding");
s1.board="cbse";
School.board="icse";
console.log(School.name,School.board);
//prototype
School.prototype.fullName=function(){
    return `${this.name}, ${this.loc}`;
}
console.log(s1);
console.log(s1.fullName());
