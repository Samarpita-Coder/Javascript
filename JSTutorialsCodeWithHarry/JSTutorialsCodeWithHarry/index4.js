//Type Conversion and Coercion

let myVar = 34;
console.log(myVar, typeof(myVar));
console.log(myVar, typeof(String(myVar)));

let bVar = true;
console.log(bVar, typeof(bVar));
console.log(bVar, typeof(String(bVar)));

let date = new Date();
console.log(date, typeof(date));
console.log(date, typeof(String(date)));

let arr = [1,2,3];
console.log('length', arr.length);
console.log('length', String(arr).length);

let b = true;
console.log(b, typeof(b.toString()));

let a = '3a';
console.log(Number(a), typeof(Number(a)));

let b2 = false;
console.log(Number(b2), typeof(Number(b2)));

console.clear();

//parsing

//string number

let n1 = '3.2';
let num0 = Number(n1);
console.log(num0);
console.log(num0.toFixed(2));
let num1 = parseInt(n1);
console.log(num1);
console.log(num1.toFixed(2));
let num = parseFloat(n1);
console.log(num);
console.log(num.toFixed(2));

console.log(Number(n1).toFixed(2));

let check1 = Number('23');
let check2 = 23;
console.log(check1 + check2);
console.log(Number('23')+23);
