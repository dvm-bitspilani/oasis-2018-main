var desktopSVG = document.getElementById("home-svg-desktop");

function animOnLoadComplete() {
    (function () {
        desktopSVG.addEventListener('load', function () {
            svg = desktopSVG.contentDocument;
            console.log(svg);
            if (svg) {
                console.log("Desktop!");
                console.log(svg);
                animateSVG(svg);
            }
        });
        svg = desktopSVG.contentDocument;
        console.log(svg);
        if (svg) {
            console.log("Desktop!");
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
        var time = 100;
        for (i = 1; i <= 8; i++) {
            var elems = svg.getElementsByClassName('r' + i);
            fadeIn(elems, time);
            time += 130;
        }

        // translate elements
        var skyElems = svg.getElementById('skyelements').children;
        var randomCount = 30;
        for (i = 0; i < randomCount; i++) {
            k = Math.floor(Math.random() * skyElems.length);
            skyElems[k].classList.add('animateSky1');
        }
        for (i = 0; i < randomCount; i++) {
            k = Math.floor(Math.random() * skyElems.length);
            skyElems[k].classList.add('animateSky2');
        }
        for (i = 0; i < randomCount; i++) {
            k = Math.floor(Math.random() * skyElems.length);
            skyElems[k].classList.add('animateSky3');
        }
        for (i = 0; i < randomCount; i++) {
            k = Math.floor(Math.random() * skyElems.length);
            skyElems[k].classList.add('animateSky4');
        }

        // fade in oasis date and tagline
        var oasisDate = svg.getElementById('oasisDate');
        var tagline = svg.getElementById('autumnOfLove');
        setTimeout(function () {
            oasisDate.style.transition = "0.3s opacity ease-in";
            oasisDate.style.opacity = 1;
            tagline.style.transition = "0.3s opacity ease-in";
            tagline.style.opacity = 1;
        }, time + 200);
        window.addEventListener('resize', function () { setTransformOrigin(lights) });
    }

    function fadeIn(elems, time) {
        setTimeout(function () {
            for (j = 0; j < elems.length; j++) {
                elems[j].style.transition = "opacity 0.3s ease-in";
                elems[j].style.opacity = 1;
            }
        }, time);
    }

    function setTransformOrigin(lights) {
        for (i = 0; i < lights.length; i++) {
            var arr = lights[i].getAttribute('points');
            arr = arr.split(' ');
            var x = arr[4];
            var y = arr[5];
            if (document.getElementById('home-svg-desktop').style.display == 'none')
                lights[i].style.transformOrigin = (x / 1920) * 100 + '% ' + (y / 1080) * 100 + '%';
            else
                lights[i].style.transformOrigin = (x / 1920) * 100 + '% ' + (y / 1080) * 100 + '%';
        }
    };

    function flicker(elem, time) {
        for (i = 0; i < time; i += time / 15) {
            setTimeout(function () { elem.style.opacity = Math.random() + 0.1; }, i);
        }
        setTimeout(function () { elem.style.opacity = 1; }, time + 100);
    }
};