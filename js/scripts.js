$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();
    var userImput = parseInt($("#factorial").val());
    for(var i = userImput-1; i>=1; i--){
      userImput *= i
      $("#results").text(userImput);
    }
  });
});

// Make a webpage to compute factorials
// Gather user input
// Convert user input into a integer
// Run a loop using the user inputted integer
// Initialize loop at user inputted integer -1 = i to set value of i equal to user input
// Every loop subtract 1 from i
// Return updated user integer multiplied by i
// Compound user integer each loop
// Run loop until i = 1
// Display final user integer value into HTML