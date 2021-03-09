// var n = document.getElementById("userInput").value;

// var fbtn = document.getElementById("fib")

function fib() {
    var n = document.getElementById("userInput").value;
    let n1 = 0;
    let n2 = 1;
    let next;
    for (let i = 1; i <= n; i++) {
        console.log(n1);
        document.getElementById("fibres").innerText = n1
        window.alert(n1)
        next = n1 + n2;
        n1 = n2;
        n2 = next;

    }
}

function squares() {
    var n = document.getElementById("userInput").value;
    for (let i = 1; i <= n; i++) {
        console.log(i * i);
        window.alert(i * i)
        document.getElementById("sqres").value = i * i
    }

}


// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }


