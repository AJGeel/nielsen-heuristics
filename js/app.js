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

function checklistStateChangeTo(state) {
  if (state == 'none') {

  } else if (state == 'needs-work') {

  } else if (state == 'complete') {
    
  }
}


/* Select all 'checklist-item' elements, add an eventlistener*/
document.querySelectorAll('.checklist-item').forEach(item => {
    item.addEventListener('click', event => {

        if (item.classList.contains('needs-work')) {

            item.classList.remove('needs-work');
            item.classList.add('complete');

            checklistValues[item.id] = true;


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

// // START PROGRESS FUNTIONALITY
// const progress_bar = document.querySelector(".progress");
//
// /* Function that updates the progress bar based on heuristics */
// function changeProgressIndicators(id, state) {
//   var progress_element = progress_bar.querySelector("div");
//   progress_element.className = "";
//   progress_element.classList.add(state);
// }
//
// changeProgressIndicators(1, "needs-work");
// changeProgressIndicators(1, "complete");
// // END PROGRESS FUNCTIONALITY

/* Replace all feather icons instances */
feather.replace()


/* Function to create the modal */
function createModal(type) {
  // Create a div
  var modal_wrapper = document.createElement("article");

  // Update its class
  modal_wrapper.classList.add("modal-wrapper");

  if (type == 'success') {
    // Set its text
    modal_wrapper.textContent = "Great success!";
  } else {
    modal_wrapper.textContent = "??????!";
  }

  // Append the element to .container
  document.querySelector(".wrapper").appendChild(modal_wrapper);
}
