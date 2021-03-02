
function printLatinWord () {
    var str = document.getElementById('userInput').value;

    console.log(str);

    var a = str.charAt(0);
    var res = str.replace(str[0], '') + a + 'ay'  ;
    console.log(res);

    document.getElementById('ans').value=res;
    return res;

}
