// Hide the total dollar amount until calculated
document.getElementById("totalTip").style.display = "none";

// Build the onclick event for the calculate button
document.getElementById("calculate").onclick = function() {calculateTip()};

// Create the calculateTip function
function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let peopleAmt = document.getElementById("peopleamt").value;

  // Calculate the total
  let total = (billAmt * serviceQual) / peopleAmt;

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
