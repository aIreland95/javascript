// add button features no class or id, using a tag name
let buttons = document.getElementsByTagName("button");

// add button is the first elemeent
let addButton = buttons[0];

// on click event for the add button
addButton.onclick = function () { addToDoItem() };

// function for adding to do items
function addToDoItem() {

  // grab the <ul>
  let ul = document.getElementById("incomplete-tasks");

  // create the child <li> object
  let incompleteLi = document.createElement("li");

  // create the child <input> for checkbox
  let incompleteInputCheckbox = document.createElement("input");

  // create the child <input> for text
  let incompleteInputText = document.createElement("text");

  // create and set type attribute for  <input>
  incompleteInputCheckbox.setAttribute("type", "checkbox");

  // create and set the type attribute for <text input>
  incompleteInputText.setAttribute("type", "text");

  // create the chid <label> object
  let incompleteLabel = document.createElement("label");

  // create the child <button> for edit
  let incompleteButtonEdit = document.createElement("button");
  incompleteButtonEdit.setAttribute("class", "edit"); // creates class = edit
  incompleteButtonEdit.innerHTML = "Edit"; // creates the edit text for the button

  // create the child <button> for Delete
  let incompleteButtonDelete = document.createElement("button");
  incompleteButtonDelete.setAttribute("class", "delete");
  incompleteButtonDelete.innerHTML = "Delete";

  let task = document.getElementById("new-task").value;
  incompleteLabel.innerHTML = task;

  // append the child <input> checkbox to <li>
  incompleteLi.appendChild(incompleteInputCheckbox);

  // append the child <label> to the <li>
  incompleteLi.appendChild(incompleteLabel);

  // append the child <text> to the <li>
  incompleteLi.appendChild(incompleteInputText);

  // append the child <button> edit to <li>
  incompleteLi.appendChild(incompleteButtonEdit);
  incompleteLi.appendChild(incompleteButtonDelete);

  // append the child <li> to the <ul>
  ul.appendChild(incompleteLi);
}
