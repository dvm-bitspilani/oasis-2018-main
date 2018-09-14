var desktopSVG = document.getElementById("home-svg-desktop");
var mobileSVG = document.getElementById("home-svg-mobile");
function animOnLoadComplete() {
    (function () {
        svg = desktopSVG.contentDocument;
        if (svg) {
            console.log("Desktop!");
            console.log(svg);
            animateSVG(svg);
        }
    })();

    (function () {
        svg = mobileSVG.contentDocument;
        if (svg) {
            console.log("Mobile!");
            animateSVG(svg);
        }
    })();

    function animateSVG(svg) {
        oasisText = svg.getElementById("Layer_2-2");
        clockTower = svg.getElementById("CLOCK_TOWER");
        lights = svg.getElementById("LIGHTS");
        rotunda = svg.getElementById("ROTUNDA");
        oasisText.style.opacity = 0.3;
        // clockTower.style.opacity = 0;
        lights.style.opacity = 0.2;
        // rotunda.style.opacity = 0.3;
        flicker(oasisText, 1500);
        // setTimeout(function() {flicker(clockTower, 1500); flicker(rotunda, 1500)}, 1000);
        setTimeout(function () { flicker(lights, 500) }, 2000);
    }

    function flicker(elem, time) {
        for (i = 0; i < time; i += time / 15) {
            setTimeout(function () { elem.style.opacity = Math.random() + 0.1; }, i);
        }
        setTimeout(function () { elem.style.opacity = 1; }, time + 100);
    }
};