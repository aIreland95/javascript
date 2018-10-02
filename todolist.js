//Since the Add button does not have a class or id, grab all the buttons
let myButtons = document.getElementsByTagName("button");

//Add button is the first of the buttons, so we can grab that one
let addButton = myButtons[0];

//Create an onclick event for the Add button
addButton.onclick = function () { addToDoItem() };

//Create a function to add the todo item
function addToDoItem() {
//Grab the <ul>
let incompleteUl = document.getElementById("incomplete-tasks");
let completeUl = document.getElementById("completed-tasks");
//Create the child <li> object
let incompleteLi = document.createElement("li");

//Create the child <input> for checkbox
let incompleteInputCheckbox = document.createElement("input");

//Create and set type attribute for <input>
incompleteInputCheckbox.setAttribute("type","checkbox");
incompleteInputCheckbox.onclick = function () { completeLi(this) };

//Create the child <label> object
let incompleteLabel = document.createElement("label");

//Grab the Add textbox value and set it as text of <label>
let addText = document.getElementById("new-task").value;
document.getElementById("new-task").value = "";
incompleteLabel.innerHTML = addText;

//Create the child <input> for the textbox and set attribute
let incompleteInputTextbox = document.createElement("input");
incompleteInputTextbox.setAttribute("type","text");

//Create the child <button> for edit
let incompleteButtonEdit = document.createElement("button");
incompleteButtonEdit.setAttribute("class","edit"); //Creates class="edit"
//incompleteButtonEdit.setAttribute("onclick", "editLi(this)");
incompleteButtonEdit.onclick = function () { editLi(this) };
incompleteButtonEdit.innerHTML = "Edit"; //Creates the Edit text for the button

//Create the child <button> for delete
let incompleteButtonDelete = document.createElement("button");
incompleteButtonDelete.setAttribute("class","delete"); //Creates class="edit"
incompleteButtonDelete.setAttribute("onclick","deleteLi(this)");
incompleteButtonDelete.innerHTML = "Delete"; //Creates the Edit text for the button

//Append the child <input> checkbox to <li>
incompleteLi.appendChild(incompleteInputCheckbox);

//Append the child <label> to the <li>
incompleteLi.appendChild(incompleteLabel);

//Append the child <input> checkbox to <li>
incompleteLi.appendChild(incompleteInputTextbox);

//Append the children <button> edit and then delete to <li>
incompleteLi.appendChild(incompleteButtonEdit);
incompleteLi.appendChild(incompleteButtonDelete);

//Append the child <li> to the <ul>
incompleteUl.appendChild(incompleteLi);
}

//Create the delete li function
function deleteLi(item) {
//Grab parent <li>
let li = item.parentNode;
// grab parent <ul>
let ul = li.parentNode;
//Remove the child from parent
ul.removeChild(li);
}

function editLi(item) {
//Figure out what <li> to change
let li = item.parentNode;
// Change the <li> class to "edit"
li.setAttribute("class","editMode");
// Get the innerHTML of the label
let labelText = li.childNodes[1].innerHTML;
// Put the labels text into the value of the textbox
let textBox = li.childNodes[2];
//textBox.value = labelText;
textBox.setAttribute("value", labelText);
// change the edit button's text to 'save'
item.innerHTML = "Save";
// change onclick event for save button
item.onclick = function () { saveLi(this) };
}

function completeLi(item) {
// grab parent <ul>
  let completeUl = document.getElementById("completed-tasks");
// grab the <li> of the checkbox item
  let completeTask = item.parentNode;
// append child to the new <ul>
  completeUl.appendChild(completeTask)
// set onclick event to addToIncomplete
  item.onclick = function () { addToIncomplete(this) };
}

function addToIncomplete(item) {
// grab parent <ul>
  let ul = document.getElementById("incomplete-tasks");
// grab the <li> of the checkbox item
  let task = item.parentNode;
// append child to the new <ul>
  ul.appendChild(task);
// set onclick event to completeLi
  item.onclick = function () { completeLi(this) };
}

function saveLi(item) {
  // remove editmode class from the li
  let li = item.parentNode;
  li.classList.remove("editMode");
  // labels innerHTML needs to be changed to value of textBox
  let textBox = li.childNodes[1];
  let labelText = li.childNodes[2].innerHTML;
  labelText = textBox.value;
  // remove value of textBox
  textBox.setAttribute("value", "");
  // edit button innerHTML needs to say "edit" again
  item.innerHTML = "Edit";
}
