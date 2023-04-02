function init() {
    var entryInput = document.getElementById("entryinput");
    var entryButton = document.getElementById("entrybutton");
    var textOutput = document.getElementById("textoutput");
  
    function showText() {
      var inputText = entryInput.value;
      alert("Your Name: " + inputText);
      textOutput.textContent = inputText;
    }
  
    entryButton.addEventListener("click", showText);
  }
  
  window.addEventListener("load", init);
  
  