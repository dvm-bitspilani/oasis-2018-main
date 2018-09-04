var menu = document.getElementById("menu"),
    hamIcon = document.getElementById("ham-icon"),
    closeIcon = document.getElementById("close-icon");

function openMenu () {
    menu.style.top = "0";
    menu.style.opacity = "0.9";

    hamIcon.style.opacity = "0";

    closeIcon.style.display = "block";
}

function closeMenu () {
    menu.style.top = "-100vh";
    menu.style.opacity = "0";

    closeIcon.style.display = "none";

    hamIcon.style.opacity = "1";
}

hamIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

var pages = {
    home: {
        name: "home",
        linkElem: document.getElementById("home-link"),
        domElem: document.getElementById("home-page")
    },
    archive: {
        name: "archive",
        linkElem: document.getElementById("archive-link"),
        domElem: document.getElementById("archive-page")
    },
    about: {
        name: "about",
        linkElem: document.getElementById("about-link"),
        domElem: document.getElementById("about-page")
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
    },
    contacts: {
        name: "contacts",
        linkElem: document.getElementById("contacts-link"),
        domElem: document.getElementById("contacts-page")
    },
    sponsors: {
        name: "sponsors",
        linkElem: document.getElementById("sponsors-link"),
        domElem: document.getElementById("sponsors-page")
    },
    register: {
        name: "register",
        linkElem: document.getElementById("register-link"),
        domElem: document.getElementById("register-page")
    }
};

var currentPage = pages.home;

function openPage (pageName) {
    currentPage.domElem.style.display = "none";

    pages[pageName].domElem.style.display = "block";

    currentPage = pages[pageName];

    var navDisplayProperty = "none";
    if (pageName === "home") {
        navDisplayProperty = "flex";
    }

    var topNavLinks = document.getElementsByClassName("top-nav-link");
    for (var z = 0; z < topNavLinks.length; z++) {
        topNavLinks[z].style.display = navDisplayProperty;
    }

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
