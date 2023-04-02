function init(){
    //add your javascrip between these two lines of code
     // Get references to the relevant elements in the DOM
     var entryInput = document.getElementById("entryinput");
     var entryButton = document.getElementById("entrybutton");
     var textOutput = document.getElementById("textoutput");
     
     // Add an event listener to the button
     entryButton.addEventListener("click", function() {
        // Get the value of the input field
        var inputText = entryInput.value;

        // Show an alert box with the contents of the input field and your name
        alert("Ali Makhlouf: " + inputText);
        // Update the text of the h2 element with the contents of the input field
        textOutput.textContent = inputText;
    }); 
    
    window.addEventListener('load', init);
}