function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <n+1;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }
        else if(i%3==0){
            console.log("Fizz");
            }else if(i%5==0){
                console.log("Buzz");
            }else{
                console.log(`${i}`);
            }
        }        
    }

function main() {
    const n = parseInt(readLine().trim(), 10);
    fizzBuzz(n);
}


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'calcularDias' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts LONG_INTEGER_ARRAY prestamo as parameter.
 */

function calcularDias(prestamo) {
    // Write your code here
    let resultFinal = []
    for(let i = 0 ; i < prestamo.length ; i++){
        let cantidad = [1]
        let total = prestamo[i]
        let n=1
        let totalCantidad = 0
        while (totalCantidad < total) {
            n=n*2
            cantidad.push(n)
            totalCantidad = cantidad.reduce((a, b) => a + b, 0);
        }
        resultFinal.push(cantidad.length)
    }
    return resultFinal
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const prestamoCount = parseInt(readLine().trim(), 10);

    let prestamo = [];

    for (let i = 0; i < prestamoCount; i++) {
        const prestamoItem = parseInt(readLine().trim(), 10);
        prestamo.push(prestamoItem);
    }

    const result = calcularDias(prestamo);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

