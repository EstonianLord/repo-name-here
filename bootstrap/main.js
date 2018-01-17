
function my_function() {
    var sub_menu = document.getElementById("sub_menu");
    if (sub_menu.style.display === "none") {
        sub_menu.style.display = "block";
    } else {
        sub_menu.style.display = "none";
    }
}
function add_one() {
    var n = document.getElementById("n");
    var number = n.innerHTML;
    number++;
    n.innerHTML = number;
}
