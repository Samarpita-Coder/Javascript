// if user adds a note, add it to the local storage

//notes- js variable (String)
//notesStorage- localStorage key (JSON stringified string)
//notesObj- js array (JSON parsed array)

showNotes();
let addBtn = document.getElementById("addBtn");

//add note to local storage amnd to notesObj array
addBtn.addEventListener("click", function (e) {

    let addText = document.getElementById("addText");
    let noteTitle = document.getElementById("noteTitle");
    let notes = localStorage.getItem("notesStorage");

    function NoteObj(title,text){
        this.title=title,
        this.text=text
    }

    if (notes == null) {
        notesObjArr = [];
    }
    else {
        notesObjArr = JSON.parse(notes);
    }
    noteObj = new NoteObj(noteTitle.value,addText.value);
    notesObjArr.push(noteObj);
    localStorage.setItem("notesStorage", JSON.stringify(notesObjArr));
    addText.value="";
    noteTitle.value="";
    showNotes();

});


// read notes from local storage
function showNotes() {
    let notes = localStorage.getItem("notesStorage");
    if (notes == null) {
        notesObjArr = [];
    }
    else {
        notesObjArr = JSON.parse(notes);
    }
    let html = "";
    notesObjArr.forEach(function(element, index) {
        html += `<div class="card noteCard mx-2 my-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
                </div>
            </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObjArr.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = "No Notes Added";
    }
}

//delete note
function deleteNote(index){
    let notes = localStorage.getItem("notesStorage");
    if (notes == null) {
        notesObjArr = [];
    }
    else {
        notesObjArr = JSON.parse(notes);
    }
    //this will delete from notesObj array, not local storage (from where it will read again in showNOtes())
    notesObjArr.splice(index,1);
    localStorage.setItem("notesStorage", JSON.stringify(notesObjArr));
    showNotes();
}

//search in navbar
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal=search.value;
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(inputVal.toLowerCase())||cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    });
});

