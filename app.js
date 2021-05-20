function addToList(){
    var insideTextbox = document.getElementById("txtbx").value;
    var btn = document.createElement("DIV"); 
    btn.innerHTML = insideTextbox;                  
    document.body.appendChild(btn);  
 }




