// HTML Element Selectors

let e = document.getElementById("heading");
console.log(e);
console.log(e.childNodes);
console.log(e.parentNode);
// change css using js
e.style.color="red";
e.innerText="Text Of Heading Changed in JS"
// e.innerHTML="<i>Html Code of Heading Changed</i>";

// Single element selectors
let sel = document.querySelector('div');
console.log(sel);
sel.style.backgroundColor="yellow";

let sel2 = document.querySelector('.child');
console.log(sel2);
sel2.style.backgroundColor="green";

let sel3 = document.querySelector('#myFirst');
console.log(sel3);
sel3.style.color="white";

// Multi element selectors
let elems = document.getElementsByClassName("child");
console.log(elems);



