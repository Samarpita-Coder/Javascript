// If Else

const age = '20';
if(age==20){
    console.log(`Age is ${age}`);
}
if(age===20){
    console.log(`Age is ${age}`);
}
if(age==40){
    console.log(`Age is ${age}`);
}
else if(age==9){
    console.log(`Age is ${age}`);
}
else{
    console.log(`Age is not 20`);
}

let val = '10';
console.log(val==10);
console.log(val===10);

let check;
if(check){
    console.log("Success");
}
else{
    console.log("Fail");
}

//Ternary operator

let age2 = 45;
console.log(age2==45? 'Age is 45': 'Age is not 45');

//Switch Cases

let age3 = 28;
switch(age3){
    case 18:
        console.log(18);
        break;
    case 28:
        console.log(28);
        break;
    case 38:
        console.log(38);
        break;
    default:
        console.log('none');
        break;
}