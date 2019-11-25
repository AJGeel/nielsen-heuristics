// Stores checklist values
var checklistValues = [];
var numberOfHeuristics = 10;
for (var i = 0; i < numberOfHeuristics; i++) {
    checklistValues.push(false);
}

// Modal operation
var modal = document.getElementById("modal");
var modal_content = document.getElementById("modal-content");
var model_close_btn = document.getElementsByClassName("close")[0];
model_close_btn.onclick = function() {
    hideModal();
    // alert("Hello");
}

function displayModal() {
  // modal_content.classList.add("modal-fade-in");
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
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

        if (item.classList.contains('needs-work')) {

            item.classList.remove('needs-work');
            item.classList.add('complete');

            checklistValues[item.id - 1] = true;
            changeProgressIndicators(item.id, 'complete');


            if (checklistValues.includes(false) != true) {
                displayModal();
                // alert("Congrats, your design has passed all heuristics!");
            }

        } else if (item.classList.contains('complete')) {
            item.classList.remove('complete');
            checklistValues[item.id - 1] = false;
            changeProgressIndicators(item.id, 'none');

        } else {
            // console.log("Class has no tag");
            item.classList.add('needs-work');
            checklistValues[item.id - 1] = false;
            changeProgressIndicators(item.id, 'needs-work');
        }
    })
})

// // START PROGRESS FUNTIONALITY

/* Function that updates the progress bar based on heuristics */
function changeProgressIndicators(id, state) {
  var progress_element = document.getElementById("p" + id);

  progress_element.className = "";
  if (state != 'none') {
    progress_element.classList.add(state);
  }
}

function changeChecklistItems(id, state) {
  var checklist_element = document.getElementById(id);

  checklist_element.className = "";
  checklist_element.classList.add("checklist-item");

  if (state != 'none') {
    checklist_element.classList.add(state);
  }
}

// END PROGRESS FUNCTIONALITY

/* Replace all feather icons instances */
feather.replace()


/* Typing functionality */

document.addEventListener("keypress", function(event) {
  console.log("DEBUG: keycode pressed = " + event.keyCode);
  if (event.keyCode == 102 || event.keyCode == 70) { // User presses 'f' or 'F'
    alert("🧙‍ Todo @AJGeel @18-11-2018: \nMake a popup that explains all keycodes inside the document. In the mean-time: here's the pro moves: \n\n🎉 Press [ 1 ] [ 2 ] ... [ 9 ] [ 0 ] to toggle the heuristics. \n🎉 Press [ SHIFT ] + a number to instantly check the heuristic. \n🎉 Press [ X ] to clear all heuristics. \n🎉 Press [ C ] to mark all heuristics as complete. \n⏰ Press [ D ] to donate $1337 worth of Bitcoin to @AJGeel");
  } else if (event.keyCode == 49) {

    // User presses '1' through '0'
    eventFire(document.getElementById('1'), 'click');
  } else if (event.keyCode == 50) {
    eventFire(document.getElementById('2'), 'click');
  } else if (event.keyCode == 51) {
    eventFire(document.getElementById('3'), 'click');
  } else if (event.keyCode == 52) {
    eventFire(document.getElementById('4'), 'click');
  } else if (event.keyCode == 53) {
    eventFire(document.getElementById('5'), 'click');
  } else if (event.keyCode == 54) {
    eventFire(document.getElementById('6'), 'click');
  } else if (event.keyCode == 55) {
    eventFire(document.getElementById('7'), 'click');
  } else if (event.keyCode == 56) {
    eventFire(document.getElementById('8'), 'click');
  } else if (event.keyCode == 57) {
    eventFire(document.getElementById('9'), 'click');
  } else if (event.keyCode == 48) {
    eventFire(document.getElementById('10'), 'click');

    // User presses SHIFT + 1 through 0
  } else if (event.keyCode == 33) {
    changeProgressIndicators(1, 'complete');
    changeChecklistItems(1, 'complete');
  } else if (event.keyCode == 64) {
    changeProgressIndicators(2, 'complete');
    changeChecklistItems(2, 'complete');
  } else if (event.keyCode == 35) {
    changeProgressIndicators(3, 'complete');
    changeChecklistItems(3, 'complete');
  } else if (event.keyCode == 36) {
    changeProgressIndicators(4, 'complete');
    changeChecklistItems(4, 'complete');
  } else if (event.keyCode == 37) {
    changeProgressIndicators(5, 'complete');
    changeChecklistItems(5, 'complete');
  } else if (event.keyCode == 38) {
    changeProgressIndicators(6, 'complete');
    changeChecklistItems(6, 'complete');
  } else if (event.keyCode == 32) {
    changeProgressIndicators(7, 'complete');
    changeChecklistItems(7, 'complete');
  } else if (event.keyCode == 42) {
    changeProgressIndicators(8, 'complete');
    changeChecklistItems(8, 'complete');
  } else if (event.keyCode == 40) {
    changeProgressIndicators(9, 'complete');
    changeChecklistItems(9, 'complete');
  } else if (event.keyCode == 41) {

  } else if (event.keyCode == 120 || event.keyCode == 88) { // User presses 'x' or 'X', clear all
    for (i = 1; i <= 10; i++) {
      changeProgressIndicators(i, 'none');
      changeChecklistItems(i, 'none');

    }
  } else if (event.keyCode == 99 ||  event.keyCode == 67) { // User presses 'c' or 'C', mark all as complete
    for (i = 1; i <= 10; i++) {
      changeProgressIndicators(i, 'complete');
      changeChecklistItems(i, 'complete');
      displayModal();
    }
  } else if (event.keyCode == 113 || event.keyCode == 81) {
    window.location.href = "../";
  }
});

/* Function that simulates clicks: https://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript */
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

// /* Function to create the modal */
// function createModal(type) {
//   // Create a div
//   var modal_wrapper = document.createElement("article");
//
//   // Update its class
//   modal_wrapper.classList.add("modal-wrapper");
//
//   if (type == 'success') {
//     // Set its text
//     modal_wrapper.textContent = "Great success!";
//   } else {
//     modal_wrapper.textContent = "??????!";
//   }
//
//   // Append the element to .container
//   document.querySelector(".wrapper").appendChild(modal_wrapper);
// }
