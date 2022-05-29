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
 * Complete the 'calcularMaximoRetorno' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY instruccion as parameter.
 */

function calcularMaximoRetorno(instruccion) {
    let ultimateResult = [];
    for(let j = 0 ; j < instruccion.length ; j++){
        let instruccionReal = instruccion[j];
        // Write your code here
        let positions = [];
        let lastPosition = [0,0];
        // [x,y]
        let x = lastPosition[0];
        let y = lastPosition[1];
        // En X R = +1 L = -1
        // En Y U = +1 D = -1
        for(let i = 0;i<instruccionReal.length ;i++){
            if(instruccionReal[i]=="R"){
            x = x +1 
            lastPosition = [x,y];
            positions.push(lastPosition);
            }
            if(instruccionReal[i]=="L"){
            x = x -1 
            lastPosition = [x,y];
            positions.push(lastPosition);
            }
            if(instruccionReal[i]=="U"){
            y = y +1 
            lastPosition = [x,y];
            positions.push(lastPosition);
            }
            if(instruccionReal[i]=="D"){
            y = y -1 
            lastPosition = [x,y];
            positions.push(lastPosition);
            }   
        }
        let distances = [];
        for(let i = 0 ; i < positions.length ; i++){
            let result = Math.sqrt((positions[i][0])**2 + (positions[i][1]**2))
            distances.push(result)
        };
        let maxDistance = Math.max(...distances);
        let positionMax = distances.indexOf(maxDistance);
        let result = Math.abs(positions[positionMax][0]) + Math.abs(positions[positionMax][1])
        ultimateResult.push(result)
    }
    return ultimateResult
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const instruccionCount = parseInt(readLine().trim(), 10);

    let instruccion = [];

    for (let i = 0; i < instruccionCount; i++) {
        const instruccionItem = readLine();
        instruccion.push(instruccionItem);
    }

    const result = calcularMaximoRetorno(instruccion);

    ws.write(result.join('\n') + '\n');

    ws.end();
}