// Hide the total dollar amount until calculated
document.getElementById("totalTip").style.display = "none";

// Build the onclick event for the calculate button
document.getElementById("calculate").onclick = function() {calculateTip()};

// Create the calculateTip function
function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let peopleAmt = document.getElementById("peopleamt").value;

// Check for zero or null values
if (peopleAmt <== 0 || isNaN(peopleAmt)) {
  alert("You must enter a number of people greater than zero.");
  return;
}



  // Calculate the total
  let total = (billAmt * serviceQual) / peopleAmt;
  // total = Math.round(total); // Rounds the number


  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total.toFixed(2); // Two-digit decimal number
}
