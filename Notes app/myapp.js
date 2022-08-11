console.log('Hi This is my app.js');
showNotes();
//all js in cammel case
//if user add a note save to local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    let addTxt = document.getElementById('addTxt');
    let localNotes = localStorage.getItem('saveNotes');
    if (localNotes == null) {
        notesObj = [];

    }
    else if (addTxt.textLength == 0) {
        alert("Notes cant be empty");
        button.disabled = true;
    }
    else {
        notesObj = JSON.parse(localNotes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localNotes = localStorage.setItem('saveNotes', JSON.stringify(notesObj));
    addTxt.value = '';
    addTitle.value = '';
    showNotes();
});

//===Show Saved Notes
function showNotes() {
    let localNotes2 = localStorage.getItem('saveNotes');
    if (localNotes2 == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(localNotes2);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
    <div class="noteCard my-2 mx-2 card" style="width: 20rem; height:auto;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <textarea class="form-control my-3" rows="6">${element.text}</textarea>
                <button id="${index}"onclick="deleted(this.id)" class="btn btn-primary my-3">Delete Note</button>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length = 0) {
        notesElm.innerHTML = `"Write A Note!"`
    }
    else {
        notesElm.innerHTML = html;
    }

}

//Function to Delete a note
function deleted(index) {
    let notes = localStorage.getItem('saveNotes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('saveNotes', JSON.stringify(notesObj));
    showNotes();
}

//Search Function

let search = document.getElementById('searchTxt');
search.addEventListener('input', function (e) {
    e.preventDefault();
    let inputVal = search.value;
    // let inputVal = search.value.toLowerCase(); ======use for only lower case
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('textarea')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';

        }
        else {
            element.style.display = 'none';
        }
    })

});
