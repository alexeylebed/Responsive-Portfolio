let menu = document.getElementById("navinner");
let burger = document.getElementById("burger");
let hidemenu = document.getElementById("hidemenu");

burger.onclick = function(){
    menu.style.display = 'block';
};

hidemenu.onclick = function () {
    menu.style.display = 'none';
 };

