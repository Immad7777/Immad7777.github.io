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


function redirectToPage() {
    var selectedPage = document.getElementById("Drop_down").value;
    if (selectedPage === "Home") {
        window.location.href = "index.html";
    } else if (selectedPage === "Travel") {
        window.location.href = "#image.html"; // Change to the correct href for Travel page
    } else if (selectedPage === "Experience") {
        window.location.href = "#Experience"; // Change to the correct href for Experience page
    } else if (selectedPage === "Future plans") {
        window.location.href = "#Future"; // Change to the correct href for Future Plans page
    }
}