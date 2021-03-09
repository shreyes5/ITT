
var topLayer = "three";

function moveIt(toTop) {

    var oldTop = document.getElementById(topLayer).style;
    var newTop = document.getElementById(toTop).style;

    oldTop.zIndex = "0";
    newTop.zIndex = "10";

    topLayer = document.getElementById(toTop).id;

}