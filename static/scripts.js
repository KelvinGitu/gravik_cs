document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menu-toggle");

    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});
