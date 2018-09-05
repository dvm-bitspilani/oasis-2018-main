var elem = document.querySelector('#event-svg-container');
var flkty;

function initializeSlider () {
    flkty = new Flickity( elem, {
        "wrapAround": true,
        "cellAlign": "center",
        "pageDots": false
    });
}