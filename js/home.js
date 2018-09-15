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
        lightsDiv = svg.getElementById("LIGHTS");
        rotunda = svg.getElementById("ROTUNDA");

        // flicker lights
        lightsDiv.style.opacity = 0;
        setTimeout(function () { flicker(lightsDiv, 1000) }, 1000);

        // animate lights
        var height = clockTower.clientHeight;
        var width = clockTower.clientWidth;
        var lightDiv = svg.getElementById('LIGHTS');
        var lights = lightDiv.getElementsByTagName('polygon');
        setTransformOrigin(lights);

        // fade in elements
        var rings = 8;
        var time=100;
        for(i=1; i<=8; i++) {
            var elems = svg.getElementsByClassName('r'+i);
            fadeIn(elems, time);
            time+=130;
        }

        // fade in oasis date and tagline
        var oasisDate = svg.getElementById('oasisDate');
        var tagline = svg.getElementById('autumnOfLove');
        setTimeout(function() {
            oasisDate.style.transition = "0.3s opacity ease-in";
            oasisDate.style.opacity = 1;
            tagline.style.transition = "0.3s opacity ease-in";
            tagline.style.opacity = 1;
        }, time+200);
    }

    function fadeIn(elems, time) {
        setTimeout(function() {
            for(j=0; j<elems.length; j++) {
                elems[j].style.transition = "opacity 0.3s ease-in";
                elems[j].style.opacity = 1;
            }
        }, time);
    }

    function setTransformOrigin(lights) {
        for(i=0; i<lights.length; i++) {
            var arr = lights[i].getAttribute('points');
            arr = arr.split(' ');
            var x = arr[4];
            var y = arr[5];
            lights[i].style.transformOrigin = (x/1920)*100 + '% ' + (y/1080)*100 + '%';
        }
    };

    function flicker(elem, time) {
        for (i = 0; i < time; i += time / 15) {
            setTimeout(function () { elem.style.opacity = Math.random() + 0.1; }, i);
        }
        setTimeout(function () { elem.style.opacity = 1; }, time + 100);
    }
};