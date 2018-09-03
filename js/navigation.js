var menu = document.getElementById("menu"),
    hamIcon = document.getElementById("ham-icon"),
    closeIcon = document.getElementById("close-icon");

function openMenu () {
    menu.style.top = "0";
    menu.style.opacity = "0.9";

    hamIcon.style.display = "none";

    closeIcon.style.display = "block";
}

function closeMenu () {
    menu.style.top = "-100vh";
    menu.style.opacity = "0";

    closeIcon.style.display = "none";

    hamIcon.style.display = "block";
}

hamIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);