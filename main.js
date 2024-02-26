document.getElementById("myBtn").onclick = function() {
    var name = prompt("Please enter your name:", "");
    if (name != null && name != "") {
        document.getElementById("Heads").innerHTML = "Hello, " + name + "!";
    }
};


