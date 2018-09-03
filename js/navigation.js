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

var pages = {
    home: {
        name: "home",
        linkElem: document.getElementById("home-link"),
        domElem: document.getElementById("home-page")
    },
    developers: {
        name: "developers",
        linkElem: document.getElementById("dev-link"),
        domElem: document.getElementById("dev-page")
    },
    events: {
        name: "events",
        linkElem: document.getElementById("events-link"),
        domElem: document.getElementById("events-page")
    }
};

var currentPage = pages.home;

function openPage (pageName) {
    currentPage.domElem.style.display = "none";

    pages[pageName].domElem.style.display = "block";

    currentPage = pages[pageName];

    closeMenu();
}

for (var page in pages) {
    (function () {
        var pageObj = pages[page];
        pageObj.linkElem.addEventListener("click", function () {
            openPage(pageObj.name);
        });
    })();
}
