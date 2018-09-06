var colorJets = document.getElementById('colorJets');
var greyJets = document.getElementById('greyJets');
var busWithSmoke = document.getElementById('bus-with-smoke');
var oasisText = document.getElementById('oasisText');

var v = 11, dir = 1;
function cir() {
    colorJets.getElementsByClassName("cls-10")[0].setAttribute("r", v);
    v += dir;
    if (v < 2) dir = 1;
    if (v > 22) dir = -1;
}
setInterval(cir, 11);

var v1 = 15, dir1 = 1;
function cir1() {
    colorJets.getElementsByClassName("cls-13")[0].setAttribute("r", v1);
    v1 += dir1;
    if (v1 < 5) dir1 = 1;
    if (v1 > 25) dir1 = -1;
}
setInterval(cir1, 11);

var v2 = 15, dir2 = 1;
function cir2() {
    colorJets.getElementsByClassName("cls-13")[1].setAttribute("r", v2);
    v2 += dir2;
    if (v2 < 5) dir2 = 1;
    if (v2 > 25) dir2 = -1;
}
setInterval(cir2, 11);

var v3 = 16, dir3 = 1;
function cir3() {
    colorJets.getElementsByClassName("cls-10")[1].setAttribute("r", v3);
    v3 += dir3;
    if (v3 < 5) dir3 = 1;
    if (v3 > 30) dir3 = -1;
}
setInterval(cir3, 11);

var v4 = 10, dir4 = 1;
function cir4() {
    colorJets.getElementsByClassName("cls-9")[0].setAttribute("r", v4);
    v4 += dir4;
    if (v4 < 1) dir4 = 1;
    if (v4 > 22) dir4 = -1;
}
setInterval(cir4, 11);

var v5 = 35, dir5 = 1;
function cir5() {
    colorJets.getElementsByClassName("cls-10")[2].setAttribute("r", v5);
    v5 += dir5;
    if (v5 < 20) dir5 = 1;
    if (v5 > 40) dir5 = -1;
}
setInterval(cir5, 11);

var v6 = 30, dir6 = 1;
function cir6() {
    colorJets.getElementsByClassName("cls-13")[2].setAttribute("r", v6);
    v6 += dir6;
    if (v6 < 20) dir6 = 1;
    if (v6 > 32) dir6 = -1;
}
setInterval(cir6, 11);

var v7 = 15, dir7 = 1;
function cir7() {
    colorJets.getElementsByClassName("cls-12")[0].setAttribute("r", v7);
    v7 += dir7;
    if (v7 < 5) dir7 = 1;
    if (v7 > 25) dir7 = -1;
}
setInterval(cir7, 11);

var v8 = 27, dir8 = 1;
function cir8() {
    colorJets.getElementsByClassName("cls-9")[1].setAttribute("r", v8);
    v8 += dir8;
    if (v8 < 15) dir8 = 1;
    if (v8 > 28) dir8 = -1;
}
setInterval(cir8, 11);

var v9 = 32, dir9 = 1;
function cir9() {
    colorJets.getElementsByClassName("cls-11")[0].setAttribute("r", v9);
    v9 += dir9;
    if (v9 < 20) dir9 = 1;
    if (v9 > 34) dir9 = -1;
}
setInterval(cir9, 11);

var v10 = 18, dir10 = 1;
function cir10() {
    colorJets.getElementsByClassName("cls-12")[1].setAttribute("r", v10);
    v10 += dir9;
    if (v10 < 15) dir10 = 1;
    if (v10 > 34) dir10 = -1;
}
setInterval(cir10, 11);

var vX = 32, dirX = 1;
function cirX() {
    greyJets.getElementsByClassName("cls-14")[0].setAttribute("r", vX);
    vX += dirX;
    if (vX < 32) dirX = 1;
    if (vX > 60) dirX = -1;
}
setInterval(cirX, 11);

function onLoadComplete() {
    busWithSmoke.classList.add("busTransition");
    setTimeout(function() {oasisText.style.opacity = 1;}, 500);
}
setTimeout(onLoadComplete, 5000);