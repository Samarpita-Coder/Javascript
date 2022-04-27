// Creating, removing, replacing elements

//create
let e = document.createElement('li');
e.className = 'childul';
e.id = "createdLi";
e.setAttribute('title',"myTitle");
e.innerHTML="<b>This is </b>";
let txt=document.createTextNode("created in js");
e.appendChild(txt);
console.log(e);
let ul=document.querySelector('ul.this');
ul.appendChild(e);
console.log(ul);

//replace
let elem=document.createElement('h2');
elem.className = "head2";
elem.id = "head2";
elem.innerHTML="Replaced by this...";
e.replaceWith(elem);

//replace using id of elements
let myul=document.getElementById('myUl');
myul.replaceChild(e,document.getElementById('fui'));

myul.removeChild(document.getElementById('createdLi'));
// myul.remove();

//exercise
let aTag=document.createElement('a');
aTag.setAttribute('href',"https://www.google.com/");
aTag.id="atag";
document.getElementById('myFirst').appendChild(aTag);
let link=document.createElement('h2');
link.innerHTML="Go to Google";
document.getElementById('atag').appendChild(link);
console.log(aTag)