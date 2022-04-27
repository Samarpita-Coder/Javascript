// Local Storage

//hardcode data
localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Ron');
console.log(window.localStorage);
// localStorage.clear();
// localStorage.removeItem("Name");
let name=localStorage.getItem('Name');
console.log(name);

let arr = ['apple','banana','mango'];
localStorage.setItem('Fruits',JSON.stringify
(arr));
console.log(localStorage);
let getArr=JSON.parse(localStorage.getItem('Fruits'));
console.log(getArr);