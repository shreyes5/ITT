var var1 = setInterval(inTimer, 1000);
var fs =5;

var ids = document.getElementById("demo");

function inTimer () {
    ids.innerHTML='TEXT-GROWING';
    fs+=5;
    ids.setAttribute('style', "font-size: " + fs + "px; color: red")
    if(fs>=50){
        clearInterval(var1);
        var2 = setInterval(deTimer, 1000);
    }
}

function deTimer () {
    fs-=5;
    ids.innerHTML='TEXT-SHRINKING';
    ids.setAttribute('style', "font-size: " + fs + "px; color: blue")
    if(fs===5){
        clearInterval(var2);
    }

}