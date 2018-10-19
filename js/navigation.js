var menu = document.getElementById("menu"),
    hamIcon = document.getElementById("ham-icon"),
    closeIcon = document.getElementById("close-icon"),
    closeEvents = document.getElementById('close-events');

var pages = {
    home: {
        name: "home",
        linkElem: [document.getElementById("home-link")],
        domElem: document.getElementById("home-page")
    },
    // archive: {
    //     name: "archive",
    //     linkElem: [document.getElementById("archive-link")],
    //     domElem: document.getElementById("archive-page")
    // },
    about: {
        name: "about",
        linkElem: [document.getElementById("about-link")],
        domElem: document.getElementById("about-page")
    },
    // developers: {
    //     name: "developers",
    //     linkElem: [document.getElementById("dev-link")],
    //     domElem: document.getElementById("dev-page")
    // },
    events: {
        name: "events",
        linkElem: [document.getElementById("events-link"), document.getElementById("events-link-nav")],
        domElem: document.getElementById("events-page")
    },
    contacts: {
        name: "contacts",
        linkElem: [document.getElementById("contacts-link"), document.getElementById("contacts-link-nav")],
        domElem: document.getElementById("contacts-page")
    },
    sponsors: {
        name: "sponsors",
        linkElem: [document.getElementById("sponsors-link-nav"), document.getElementById("sponsors-link")],
        domElem: document.getElementById("sponsors-page")
    },
    register: {
        name: "register",
        linkElem: [document.getElementById("register-link")],
        domElem: document.getElementById("register-page")
    },
    videos: {
        name: "videos",
        linkElem: [document.getElementById("videos-link")],
        domElem: document.getElementById("videos-page")
    },
    archives: {
        name: "archives",
        linkElem: [document.getElementById("archives-link")],
        domElem: document.getElementById("archives-page")
    },
    // schedule: {
    //     name: "schedule",
    //     linkElem: [document.getElementById("schedule-link")],
    //     domElem: document.getElementById("schedule-page")
    // }
};

var currentPage = pages.home;

var topStretch = document.getElementById("top"),
    leftStretch = document.getElementById("left"),
    rightStretch = document.getElementById("right"),
    bottomStretch = document.getElementById("bottom");


var isMenuOpen = 0;

function openMenu() {
    isMenuOpen = 1;

    currentPage.domElem.style.transition = "opacity 0.1s ease-in-out";
    currentPage.domElem.style.opacity = "0";

    menu.style.display = "flex";
    setTimeout(
        function () {
            menu.style.opacity = "1";
        },
        100
    );

    closeIcon.style.display = "block";
}

function closeMenu(isNewPage) {
    isMenuOpen = 0;

    if (!isNewPage) {
        currentPage.domElem.style.opacity = "1";
        menu.style.opacity = "0";
        setTimeout(
            function () {
                menu.style.display = "none";
            },
            100
        );
    }

    closeIcon.style.display = "none";
}

hamIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", function () { closeMenu(false) });

function openPage(pageName) {
    if (currentPage.name != pageName) {
        var exitPage;
        if (isMenuOpen) {
            exitPage = menu;
        }
        else {
            exitPage = currentPage.domElem;
        }
        if (isDesktop) {
            topStretch.style.display = "block";
            bottomStretch.style.display = "block";
            leftStretch.style.display = "block";
            rightStretch.style.display = "block";
            stretchAll();

            exitPage.style.transition = "transform 0.25s linear";
            exitPage.style.transform = "scale(0.95)";
        }

        exitPage.style.zIndex = "3";

        setTimeout(
            function () {
                if (isDesktop) {
                    exitPage.style.transition = "transform 0.2s linear, opacity 0.4s linear";
                    exitPage.style.transform = "scale(1.2)";

                    pages[pageName].domElem.style.transition = "";
				    pages[pageName].domElem.style.transform = "";
                }

                exitPage.style.opacity = "0";

                pages[pageName].domElem.style.opacity = "1";
                pages[pageName].domElem.style.zIndex = "2";
                pages[pageName].domElem.style.display = "block";
            },
            350
        );

        setTimeout(
            function () {
                exitPage.style.display = "none";
                exitPage.style.zIndex = "";
                currentPage.domElem.style.display = "none";
                currentPage = pages[pageName];
                currentPage.domElem.style.zIndex = "";

                if (isDesktop) {
                    topStretch.style.display = "none";
                    bottomStretch.style.display = "none";
                    leftStretch.style.display = "none";
                    rightStretch.style.display = "none";
                }
            },
            800
        );

        // var navDisplayProp = "none", otherDisplayProp = "none";
        // if (pageName === pages.home.name) {
        //     navDisplayProp = "flex";
        //     otherDisplayProp = "block";
        // }

        // var topNavLinks = document.getElementsByClassName("top-nav-link");
        // for (var z = 0; z < topNavLinks.length; z++) {
        //     topNavLinks[z].style.display = navDisplayProp;
        // }

        // document.getElementById("register-link").style.display = otherDisplayProp;
        // document.getElementById("base-line").style.display = otherDisplayProp;

        closeMenu(true);
    }
    else {
        closeMenu(false);
    }
}

for (var page in pages) {
    (function () {
        var pageObj = pages[page];
        for (var i = 0; i < pageObj.linkElem.length; i++) {
            pageObj.linkElem[i].addEventListener("click", function () {
                openPage(pageObj.name);
            });
        }
    })();
}

// closeEvents.addEventListener("click", function () {
//     openPage(pages.home.name);
// });

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

var closePageIcons = document.getElementsByClassName("close-page");

for (var closeCount = 0; closeCount < closePageIcons.length; closeCount++) {
    closePageIcons[closeCount].addEventListener(
        "click",
        function () {
            openPage(pages.home.name);
        }
    )
}
