// Events

//listen event
document.getElementById('heading').addEventListener('click',function(e){
    alert("Clicked the heading!");
    console.log(e);
});

//add event to button with id "btn"
let btn=document.getElementById('btn');
btn.addEventListener("click",func1);
function func1(){
    alert("Thanks!");
}

function func2(e){
    // alert("Thanks2!");
    e.preventDefault();
    console.log("success");
}
let btn1=document.getElementById('btn1');
btn1.addEventListener("click",func2);

//change bgcolor
document.querySelector('.container').addEventListener(
    'mousemove',function(e){
        console.log(e.offsetX, e.offsetY);
        document.body.style.backgroundColor= `rgb(${e.offsetX}, 
            ${e.offsetX}, ${e.offsetY})`;
    });