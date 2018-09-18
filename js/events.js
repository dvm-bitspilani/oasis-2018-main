function disappearEvent(objectElem) {
    var svgElems = objectElem.contentDocument.getElementsByTagName("svg")[0].children;
    if (document.documentElement.clientWidth < 800) {
        var svg = objectElem.contentDocument.getElementsByTagName("svg")[0];
        svg.style.transition = "transform 0.2s linear, opacity 0.2s linear";
        svg.style.opacity = "0";
        // svg.style.transform = "scale(1.05)";
    }
    else {
        var delay = 0.02;
        for (var i = 0; i < svgElems.length; i++) {
            svgElems[i].style.transition = "transform 0.4s " + delay + "s linear, opacity 0.3s " + delay + "s linear";
            svgElems[i].style.transform = "translate(" + Math.random() * 1000 + "px, " + (-Math.random() * 1000) + "px) scale(0)";
            // svgElems[i].style.opacity = "0";
            if (i % 7 == 0) delay += 0.01;
        }
    }
}

function appearEvent(objectElem) {
    var svgElems = objectElem.contentDocument.getElementsByTagName("svg")[0].children;
    if (document.documentElement.clientWidth < 800) {
        var svg = objectElem.contentDocument.getElementsByTagName("svg")[0];
        // svg.style.transform = "scale(1)";
        svg.style.transition = "transform 0.2s linear, opacity 0.2s linear";
        svg.style.opacity = "1";
    }
    else {
        var delay = 0.02;
        for (var i = 0; i < svgElems.length; i++) {
            svgElems[i].style.transition = "transform 0.3s " + delay + "s linear, opacity 0.3s " + delay + "s linear";
            svgElems[i].style.transform = "";
            svgElems[i].style.opacity = "1";
            if (i % 7 == 0) delay += 0.01;
        }
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
    if(document.documentElement.clientWidth < 800) {
        setTimeout(
            function () {
                images[curimg].style.transition = "opacity 0.2s linear";
                images[curimg].style.opacity = 1;
                appearEvent(images[curimg]);
            },
            400
        )
    } else {
        setTimeout(
            function () {
                images[curimg].style.transition = "opacity 0.2s linear";
                images[curimg].style.opacity = 1;
                appearEvent(images[curimg]);
            },
            1000
        )
    }
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

function openViewEvents () {
    setTimeout(function () {
        viewEvents.style.opacity = "1";
    }, 100);
    viewEvents.style.display = 'flex';
    viewEvents.style.zIndex = "999";
}

viewEventsBtn.addEventListener('click', function (e) {
    openViewEvents();
});

// var allCategoriesImg = document.querySelectorAll("categories-events img");
// for (var ac = 0; ac < allCategoriesImg.length; ac++) {
//     console.log("allCategoriesImg");
//     allCategoriesImg[ac].addEventListener(
//         "click",
//         function () {
//             console.log("asdf");
//             openViewEvents();
//         }
//     )
// }

function onSvgLoad (svgElems) {
    for (var i = 0; i < svgElems.length; i++) {
        svgElems[i].style.transform = "translate(" + Math.random() * 1000 + "px, " + (-Math.random() * 1000) + "px) scale(0)";
        svgElems[i].style.opacity = "0";
    }
}

function disruptEventSvgs() {
    var svgObjs = document.getElementById("events-image").children;
    for (var j = 1; j < svgObjs.length; j++) {
        if (svgObjs[j].contentDocument) {
            var svgElems = svgObjs[j].contentDocument.getElementsByTagName("svg")[0].children;
            onSvgLoad(svgElems);
        }
        else {
            svgObjs[j].addEventListener("load", function() {
                var svgElems = this.contentDocument.getElementsByTagName("svg")[0].children;
                onSvgLoad(svgElems);
            });
        }
    }
}

// setTimeout(
//     function () {
//         disruptEventSvgs();
//     },
//     8000
// );

document.getElementById("close-events-page").addEventListener("click", function () {
    if(document.documentElement.clientWidth < 800) {
        for(i=1; i<images.length; i++) {
            images[i].style.transition = "opacity 0.2s linear";
            images[i].style.opacity = 0;
        }
        images[0].style.transition = "opacity 0.2s linear";
        images[0].style.opacity = 1;
    }
    curimg = 0;
});