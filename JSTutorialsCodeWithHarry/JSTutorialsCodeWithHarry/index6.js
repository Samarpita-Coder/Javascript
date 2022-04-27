//Arrays

const marks = [89,76,90,93,95];
const fruits = ['Orange','Mango','Apple'];
const mixed = ['Mango',98,92,[1,2]];
const arr = new Array(23,45);

console.log(mixed);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray(fruits));

arr[0] = 10;
console.log(arr);

let mark = marks.indexOf(93);
console.log(mark);

let marks2 = [1,2,3];

//mutating array
marks.push(100);
marks.unshift(68);
marks.pop();
marks.shift();
marks.splice(1,2);
marks.reverse();
console.log(marks);
//this is just returning the concatted array
console.log(marks.concat(marks2));
//this is changing the original array
// marks = marks.concat(marks2);
//change const to let to make above line work

//Objects

let myObj = {
    'first name': 'Rahul',
    class: 10,
    isStudying: true,
    marks: [80,96,95]
}

console.log(myObj);
console.log(myObj['first name']);
console.log(myObj.class);
console.log(myObj.marks[2]);

