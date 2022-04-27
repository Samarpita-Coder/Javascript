// String Properties
let html;
html = "<h1>This is heading</h1>"+
        "<p>This is para</p>";

html = html.concat('Hi', 'Samarpita');
console.log(html);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[0]);
console.log(html.indexOf('Hhoihi'));
console.log(html.lastIndexOf('a'));
console.log(html.charAt(9));
console.log(html.endsWith('Samarpita'));
console.log(html.includes('ta'));
console.log(html.substring(1,5));
console.log(html.slice(-3));
console.table(html.split(""));
console.log(html.replace('di','bi'));

//Template Literals

let fruit1 = 'orange';
let fruit2 = 'mango';
let fruit3 = 'banana';
let myHtml = `You like ${fruit1} and
            ${fruit2}`;
document.body.innerHTML = myHtml;
console.log(myHtml);