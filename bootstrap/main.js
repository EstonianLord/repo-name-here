
function my_function() {
    var sub_menu = document.getElementById("sub_menu");
    if (sub_menu.style.display === "none") {
        sub_menu.style.display = "block";
    } else {
        sub_menu.style.display = "none";
    }
}

document.getElementById("add_one").addEventListener("click", add_one);
document.getElementById("add_one").addEventListener("click", add_color);

function add_one() {
    var n = document.getElementById("n");
    var number = n.innerHTML;
    number++;
    n.innerHTML =  number;
}
function add_color() {
    var n = document.getElementById("n");
    n.style.backgroundColor = "orange";
    n.style.width = "25px";
    n.style.height = "25px";
    n.style.borderRadius = "10px";

}
