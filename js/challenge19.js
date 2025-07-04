/*
    Reto #19: 📦 Apila cajas mágicas para repartir regalos

    ¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y 
    para eso los vamos a meter en cajas 📦.

    Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:
        _
    1: |_|
        _____
    2: |_____|
        _____
    5: |     |
       |_____|
         _________
    10: |         |
        |_________|

    // Representación en JavaScript:
    const boxRepresentations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de 
    menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

    Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.
*/

function distributeWeight(weight) {
    const boxTypes = [ 10, 5, 2, 1 ];
    const boxes = [];

    for(let box of boxTypes) {
        let count = Math.floor(weight / box);
        weight %= box;
        boxes.push(...Array(count).fill(box));
    }

    const boxRepresentations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    boxes.sort((a, b) => a - b);

    let result = [ ];

    for(let i = 0; i < boxes.length; i++) {
        const boxLines = boxRepresentations[boxes[i]];

        for (let j = 0; j < boxLines.length; j++) {
            if(j === 0 && i !== 0) continue;

            let boxLine = boxLines[j];

            if(i !== boxes.length - 1 && j === boxLines.length - 1) {
                const nextBoxTopWidth = boxRepresentations[boxes[i + 1]][0].length - 1;

                boxLine = boxLine.padEnd(nextBoxTopWidth, "_");
            } 
    
            result.push(boxLine);
        }
    }

    return result.join("\n");
}

// Representación en JavaScript:

console.log(distributeWeight(1));
// Devuelve:
//  _
// |_|

console.log(distributeWeight(2));
// Devuelve:
//  ___
// |___|

console.log(distributeWeight(3));
// Devuelve:
//  _
// |_|_
// |___|

console.log(distributeWeight(4));
// Devuelve:
//  ___
// |___|
// |___|

console.log(distributeWeight(5));
// Devuelve:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6));
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

console.log(distributeWeight(28));