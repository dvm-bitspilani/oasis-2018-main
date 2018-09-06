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

var eventSvgContainer = document.getElementById("event-svg-container"),
    eventList = document.getElementById("events-list");

for (var i = 0; i < mockEventsData.length; i++) {
    var categoryDiv = document.createElement("div");
    categoryDiv.setAttribute("class", "event-category");

    var categoryImg = document.createElement("img");
    categoryImg.setAttribute("src", mockEventsData[i].svg);

    categoryDiv.appendChild(categoryImg);
    eventSvgContainer.appendChild(categoryDiv);
}

function changeEventList (index) {
    eventList.innerHTML = "";

    for (var k = 0; k < mockEventsData[index].events.length; k++) {
        var eventDiv = document.createElement("div");
        eventDiv.innerHTML = mockEventsData[index].events[k].name;

        eventList.appendChild(eventDiv);
    }
}

var elem = document.querySelector('#event-svg-container');
var flkty;

function initializeSlider () {
    flkty = new Flickity( elem, {
        wrapAround: true,
        cellAlign: "center",
        pageDots: false,
        prevNextButtons: false,
        on: {
            ready: function () {
                changeEventList(0);
            }
        }
    });

    // ON SLIDE CHANGE
    flkty.on(
        'change',
        function (index) {
            changeEventList(index);
        }
    );
}

// initializeSlider();