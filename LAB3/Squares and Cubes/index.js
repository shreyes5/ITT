var id = document.getElementById('tab')

function squares () {
    for (var i=0 ; i<=10 ;i++){
        console.log(i*i);
        var row = id.insertRow(0);
        var cell1 = row.insertCell(0);
        cell1.innerText=i*i;

    }
}

function cubes () {
    for (var i=0 ; i<=10 ;i++){
        console.log(i*i*i);
    }
}