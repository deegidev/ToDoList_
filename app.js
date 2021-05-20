/*Curent Variable List

1. textContent - the typed in text
2. listDiv - the div for holding the whole list
3. newParaElement - the p elements in the div that holds the whole list

 */

var textContent = document.getElementById("item"); //textContent.value;
var listDiv = document.getElementById("toDoList"); //<div> element

function addToList () {
    var newParaElement = document.createElement("P"); //create new <p> element
    newParaElement.innerHTML = textContent.value; //add text to the <p> element
    listDiv.appendChild(newParaElement); //append the <p> element to the <div> element  

    newParaElement.addEventListener("click", function() {
        newParaElement.style.textDecoration = "line-through";
    })

    newParaElement.addEventListener("dblclick", function(){
        listDiv.removeChild( newParaElement);
        if (listDiv.innerHTML === ""){
            alert("You've completed all your tasks. Congrats!");
        }
     })
    
}









