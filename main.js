    const namebutton = document.getElementById("myBtn");
    myBtn.addEventListner("click", function(e){
        const name = prompt("what is your name");

        document.body.innerHTML = "<h1>welcome," + name + "</h1";
    })
