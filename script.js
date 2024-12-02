const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+=input
}

function cleardisplay(){
    display.value=null;
}
// eval own build in calculator.
function calculate(){
  try{
    display.value = eval(display.value)
  }
  catch(error){
    display.value= "Fuck"
    console.error("Error")
  }
} 