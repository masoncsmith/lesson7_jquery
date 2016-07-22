/*
    Program Name:   Recipe Display Application
    Author:     Mason Smith
    Date:       July 20, 2016
    Filename:   drill4.js 
*/

//displays the next element after the current target
function display(event) { 
 
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);