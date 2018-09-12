var menu = document.getElementById("menu"),
    hamIcon = document.getElementById("ham-icon"),
    closeIcon = document.getElementById("close-icon"),
    closeEvents = document.getElementById('close-events');

var isMenuOpen = 0;

function openMenu() {
    isMenuOpen = 1;

    menu.style.top = "0";
    menu.style.opacity = "0.9";

    hamIcon.style.opacity = "0";

    closeIcon.style.display = "block";
}

function closeMenu() {
    isMenuOpen = 0;

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

var topStretch = document.getElementById("top"),
    leftStretch = document.getElementById("left"),
    rightStretch = document.getElementById("right"),
    bottomStretch = document.getElementById("bottom");


function openPage(pageName) {
    topStretch.style.display = "block";
    leftStretch.style.display = "block";
    rightStretch.style.display = "block";
    bottomStretch.style.display = "block";
    stretchAll();

    currentPage.domElem.style.zIndex = "3";
    currentPage.domElem.style.transition = "transform 0.25s linear";
    currentPage.domElem.style.transform = "scale(1)";

    setTimeout(
        function () {
            currentPage.domElem.style.transition = "transform 0.2s linear, opacity 0.2s linear";
            currentPage.domElem.style.transform = "scale(1.2)";
            currentPage.domElem.style.opacity = "0";

            pages[pageName].domElem.style.transition = "";
            pages[pageName].domElem.style.transform = "scale(1.05)";
            pages[pageName].domElem.style.opacity = "1";
            pages[pageName].domElem.style.zIndex = "2";
            pages[pageName].domElem.style.display = "block";
        },
        350
    );

    setTimeout(
        function () {
            currentPage.domElem.style.display = "none";
            currentPage = pages[pageName];

            topStretch.style.display = "none";
            leftStretch.style.display = "none";
            rightStretch.style.display = "none";
            bottomStretch.style.display = "none";
        },
        500
    );

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

closeEvents.addEventListener("click", function () {
    openPage(pages.home.name);
});

function stretch(pos) {
    var first = document.getElementById("first-" + pos),
        second = document.getElementById("second-" + pos);

    first.beginElement();
    setTimeout(function () {
        second.beginElement();
    }, 350);
}

function stretchAll() {
    stretch("top");
    stretch("bottom");
    stretch("right");
    stretch("left");
}
