let userName
//let age = window.prompt("How old are you?");

document.getElementById("b3").onclick = function(){
    userName = document.getElementById("input1").value;
    document.getElementById("h35").textContent = `hello ${userName}`
}

