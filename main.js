document.getElementById("myBtn").onclick = function() {
    var name = prompt("Please enter your name:", "");
    if (name != null && name != "") {
        document.getElementById("Heads").innerHTML = "Hello, " + name;
    }
};


document.getElementById("myDP").onclick = function() {
    var img = this.getElementsByTagName('img')[0];
    img.classList.toggle("Zoomed");
}

function highlight() {
    this.getElementsById(Navbar);
    Navbar.classList.toggle("Naviin");
}

function unhighlight() {
    this.getElementsById(Navbar);
    Navbar.classList.toggle("nav");
}
