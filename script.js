function myFunction() {
    var x = document.getElementById("left-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.position= "fixed"
    } else {
      x.style.display = "none";
    }
} 
