var BASE_PATH_SVG = "./imgs/svg-anim/";

// mock data
var mockEventsData = [
    {
        category: "drama",
        events: [
            {
                name: "event1"
            },
            {
                name: "event2"
            }
        ],
        svg: BASE_PATH_SVG + "drama.svg"
    },
    {
        category: "music",
        events: [
            {
                name: "event3"
            },
            {
                name: "event4"
            }
        ],
        svg: BASE_PATH_SVG + "music.svg"
    },
    {
        category: "oratory",
        events: [
            {
                name: "event5"
            },
            {
                name: "event6"
            }
        ],
        svg: BASE_PATH_SVG + "oratory.svg"
    },
    {
        category: "photography",
        events: [
            {
                name: "event5"
            },
            {
                name: "event6"
            }
        ],
        svg: BASE_PATH_SVG + "photography.svg"
    },
    {
        category: "finearts",
        events: [
            {
                name: "event5"
            },
            {
                name: "event6"
            }
        ],
        svg: BASE_PATH_SVG + "finearts.svg"
    }
];

function disappearEvent(objectElem) {
    var svgElems = objectElem.contentDocument.getElementsByTagName("svg")[0].children;
    var delay = 0.02;
    for (var i = 0; i < svgElems.length; i++) {
        svgElems[i].style.transition = "transform 0.4s " + delay + "s linear, opacity 0.3s " + delay + "s linear";
        svgElems[i].style.transform = "translate(" + Math.random() * 1000 + "px, " + (-Math.random() * 1000) + "px) scale(0)";
        svgElems[i].style.opacity = "0";
        if (i % 7 == 0) delay += 0.01;
    }
}

function appearEvent(objectElem) {
    var svgElems = objectElem.contentDocument.getElementsByTagName("svg")[0].children;
    var delay = 0.02;
    for (var i = 0; i < svgElems.length; i++) {
        svgElems[i].style.transition = "transform 0.3s " + delay + "s linear, opacity 0.3s " + delay + "s linear";
        svgElems[i].style.transform = "";
        svgElems[i].style.opacity = "1";
        if (i % 7 == 0) delay += 0.01;
    }
}

var images = document.getElementById("events-image").children;

var numimg = images.length - 1; //change it to number of images -1
var curimg = 0;

function change(n) {
    disappearEvent(images[curimg]);
    if (curimg == 0 && n == -1) {
        curimg = numimg;
    }
    else if (curimg == numimg && n == 1) {
        curimg = 0;
    }
    else {
        curimg = curimg + n;
    }
    setTimeout(
        function () {
            images[curimg].style.opacity = 1;
            appearEvent(images[curimg]);
        },
        1000
    )
}

var prev = document.getElementById('prev-event');
var next = document.getElementById('next-event');
var events = document.getElementById('events-page');

next.addEventListener("click", function () {
    change(1);
});
prev.addEventListener("click", function () {
    change(-1);
});

events.addEventListener('swiped-left', function () {
    change(1);
});

events.addEventListener('swiped-right', function () {
    change(-1);
});

var cHeading = document.getElementById('categories-heading');
var categories = document.getElementById('categories-wrapper');
var categoriesInner = document.getElementById('categories-wrapper-inner');
var categoriesClose = document.getElementById('categories-close');
var categoryEventClose = document.getElementsByClassName('category-event-close')[0];
var viewEventsWrapper = document.getElementById("view-events-wrapper");

cHeading.addEventListener('click', function () {
    categories.style.top = "0";
    categories.style.display = 'flex';
    categories.style.zIndex = "999";
    // categories.style.opacity="1";
    setTimeout(function () {
        categoriesInner.style.opacity = "1";
    }, 1);
});

categoriesClose.addEventListener('click', function () {
    categoriesInner.style.opacity = "0";
    setTimeout(function () {
        categories.style.top = "100%";
        categories.style.display = 'none';
        categories.style.zIndex = "0"
    }, 500);
    // categories.style.opacity="0"; 
});

categoryEventClose.addEventListener('click', function () {
    viewEventsWrapper.style.opacity = "0";
    setTimeout(function () {
        viewEventsWrapper.style.display = "none";
    }, 500);
    // categories.style.opacity="0"; 
});

var viewEvents = document.getElementById('view-events-wrapper');
var viewEventsBtn = document.getElementById('view-events-btn');

viewEventsBtn.addEventListener('click', function (e) {
    setTimeout(function () {
        console.log(viewEvents)
        viewEvents.style.opacity = "1";
    }, 100);
    viewEvents.style.display = 'flex';
    viewEvents.style.zIndex = "999";
});

function disruptEventSvgs() {
    var svgObjs = document.getElementById("events-image").children;
    for (var j = 1; j < svgObjs.length; j++) {
        var svgElems = svgObjs[j].contentDocument.getElementsByTagName("svg")[0].children;
        for (var i = 0; i < svgElems.length; i++) {
            svgElems[i].style.transform = "translate(" + Math.random() * 1000 + "px, " + (-Math.random() * 1000) + "px) scale(0)";
            svgElems[i].style.opacity = "0";
        }
    }
}

setTimeout(
    function () {
        disruptEventSvgs();
    },
    3000
);
