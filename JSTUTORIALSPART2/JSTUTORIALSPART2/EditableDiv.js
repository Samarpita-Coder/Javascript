let mes=document.createElement('h2');
mes.innerHTML="Click here!";
let cont=document.getElementById('container');
document.getElementById('container').addEventListener('mouseenter',function(e){
    cont.appendChild(mes);
    console.log("in");
});
document.getElementById('container').addEventListener('mouseleave',function(e){
    cont.removeChild(mes);
    console.log("out");
});

cont.addEventListener('click',function(e){
    cont.addEventListener('mouseleave',function(e){
        let userMes=cont.innerText;
        let replaced=document.createElement('h2');
        replaced.innerHTML=userMes;
        e.preventDefault();
        cont.appendChild(replaced);
        console.log(cont);
    });
    cont.setAttribute('contenteditable','true'); 
});
