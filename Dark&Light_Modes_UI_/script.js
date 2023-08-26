function toggleDarkMode() {
    var body = document.body;
    var para1 = document.getElementById("para1");
    var btn = document.getElementById("btn");
    
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        para1.style.backgroundColor = "black";
        para1.style.color = "white";
        btn.style.backgroundColor = "#dcdcdc";
        btn.style.color = "black";
        btn.textContent = "Switch to Dark Mode";
    } else {
        
        body.style.backgroundColor = "black";
        para1.style.backgroundColor = "white";
        para1.style.color = "black";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.textContent = "Switch to Light Mode";
    }
}