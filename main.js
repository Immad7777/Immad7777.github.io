document.getElementById("myBtn").onclick = function() {
    var name = prompt("please enter your name", "");
    if (name != null && name !="") {
        document.getElementById("Heads").innerHTML ="Welcome," + name;
    }
};


