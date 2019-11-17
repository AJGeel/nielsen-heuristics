// Stores checklist values
var checklistValues = [];
var numberOfHeuristics = 10;
for (var i = 0; i < numberOfHeuristics; i++) {
    checklistValues.push(false);
}

// Modal operation
var modal = document.getElementById("myModal");
var closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
    displayModal();
}

function displayModal() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* Select all 'checklist-item' elements, add an eventlistener*/
document.querySelectorAll('.checklist-item').forEach(item => {
    item.addEventListener('click', event => {

        // console.log(item.id);

        if (item.classList.contains('needs-work')) {
            // console.log("Class has needs-work");
            item.classList.remove('needs-work');
            item.classList.add('complete');
            // console.log(checklistValues[item.id]);
            checklistValues[item.id] = true;
            // console.log(checklistValues[item.id]);

            if (checklistValues.includes(false) != true) {
                displayModal();
            }

        } else if (item.classList.contains('complete')) {
            // console.log("Class has complete tag");
            item.classList.remove('complete');
            checklistValues[item.id] = false;

        } else {
            // console.log("Class has no tag");
            item.classList.add('needs-work');
            checklistValues[item.id] = false;

        }
    })
})

/* Replace all feather icons instances */
feather.replace()
