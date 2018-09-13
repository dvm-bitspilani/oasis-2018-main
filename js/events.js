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

var images = new Array(5);  
    // images to be changed also change he first image in index.html
    images[0] = "./imgs/bg2.png";
    images[1] = "./imgs/trees.svg";
    images[2] = "./imgs/register.svg";
    images[3] = "./imgs/ham.svg";
    images[4] = "./imgs/page-heading.svg";

    var numimg = 4; //change it to number of images -1 
    var curimg = 0;

    function change(n){
        var im=document.getElementById("image");
        if(curimg==0&&n==-1){
            curimg = numimg;
            im.src = images[curimg];
        }
        else if(curimg==numimg&&n==1){
            curimg = 0;
            im.src = images[curimg];
        }
        else{
            curimg = curimg + n;    
            im.src = images[curimg];
        }
    }

var prev= document.getElementById('prev-event');
var next=document.getElementById('next-event');
var events=document.getElementById('events-page');

next.addEventListener("click", function(){
    change(1);
});
prev.addEventListener("click", function(){
    change(-1);
});

events.addEventListener('swiped-left', function(){
    change(1);
});

events.addEventListener('swiped-right', function(){
    change(-1);
});

var cHeading=document.getElementById('categories-heading');
var categories=document.getElementById('categories-wrapper');
var categoriesInner=document.getElementById('categories-wrapper-inner');
var categoriesClose=document.getElementById('categories-close');

cHeading.addEventListener('click', function(){
    categories.style.top="0%";
    categories.style.display='flex';
    categories.style.zIndex="999";
    // categories.style.opacity="1";
    setTimeout(function(){
    categoriesInner.style.opacity="1";    
    }, 1);
});

categoriesClose.addEventListener('click', function(){
    categoriesInner.style.opacity="0";    
    setTimeout(function(){
    categories.style.top="100%";
    categories.style.display='none';
    categories.style.zIndex="0"
    }, 500);    
    // categories.style.opacity="0"; 
});

var viewEvents=document.getElementById('view-events-wrapper');
var viewEventsBtn=document.getElementById('view-events-btn');

viewEventsBtn.addEventListener('click', function(){
    setTimeout(function(){
    viewEvents.style.top="0%";
    });
    viewEvents.style.display='flex';
    viewEvents.style.zIndex="999";
});



// var eventSvgContainer = document.getElementById("event-svg-container"),
//     eventList = document.getElementById("events-list"),
//     leftArrow = document.getElementById("left-arrow"),
//     rightArrow = document.getElementById("right-arrow");

// for (var i = 0; i < mockEventsData.length; i++) {
//     var categoryDiv = document.createElement("div");
//     categoryDiv.setAttribute("class", "event-category");

//     var categoryImg = document.createElement("img");
//     categoryImg.setAttribute("src", mockEventsData[i].svg);

//     categoryDiv.appendChild(categoryImg);
//     eventSvgContainer.appendChild(categoryDiv);
// }

// var elem = document.querySelector('#event-svg-container');
// var flkty;

// function initializeSlider () {
//     flkty = new Flickity( elem, {
//         wrapAround: true,
//         cellAlign: "center",
//         pageDots: false,
//         prevNextButtons: false
//     });

//     leftArrow.addEventListener("click", function () {
//         flkty.previous();
//     });

//     rightArrow.addEventListener("click", function () {
//         flkty.next();
//     })
// }

// initializeSlider();