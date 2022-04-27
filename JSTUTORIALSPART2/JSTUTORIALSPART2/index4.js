// DOM Object

let a = document.all;
console.log(a);
console.log(document.forms);
Array.from(a).forEach(function(element){
    console.log(element);
});
let links = document.links;
Array.from(links).forEach(function(element){
    console.log(element.href);
});

// Web Page Crawler Exercise
let l = document.links;
Array.from(l).forEach(function(element){
    let str1 = String(element.href);
    if(str1.includes("google")){
        console.log(element.href);
    };
});