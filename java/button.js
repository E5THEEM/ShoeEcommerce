var btt = document.getElementById("back");

window.addEventListener("scroll", function(event) {
    var level = this.scrollY;

    if (level > 250) {
        btt.style.display = "block";
    } else {
        btt.style.display = "none";
    }
})