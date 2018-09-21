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


  // create the child object
  let li = document.createElement("li");

// create the chid label object

  let incompleteLabel = document.createElement("label");

  let task = document.getElementById("new-task").value;

  incompleteLabel.innerHTML = task;

  // append the child <label> to the <li>
  li.appendChild(incompleteLabel);

  // append the child <li> to the <ul>
  ul.appendChild(li);
}
