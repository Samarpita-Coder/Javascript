// Functions

function greet(name,mes="Bye!"){
    console.log(`Happy Birthday ${name}. ${mes}`);
    return("Enjoy!!");
}
name1="Priyanka";
name2="Rahul";
console.log(greet(name1, "Will meet you!"));
greet(name2, "Sorry, can't make it.");

// Function inside object

const myObj = {
    name: "SkillF",
    course: function(){
        return "DSA";
    }
};
console.log(myObj.course());

// Scopes

let var1 = 10;
function check(){
    let var1 = 20;
    console.log(var1);
}

check();
console.log(var1);

{
    var v = 50;
}
function c(){
    let v = 100;
    console.log(v);
}
c();
console.log(v);