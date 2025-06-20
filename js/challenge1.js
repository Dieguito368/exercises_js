/*
    Reto #1: 🎁 ¡Primer regalo repetido!

    Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
    pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. 
    Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

    Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) 
    y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
*/

function prepareGifts(gifts) {
    const buffer = {};

    for(const number of gifts) {
        buffer[number] = number
    }

    return Object.values(buffer);
}

/*
    Forma 3: 

    const prepareGifts = gifts => [ ... new Set(gifts) ].sort((a, b) => a - b);

    const prepareGifts = gifts => Array.from(new Set(gifts)).sort((a, b) => a - b);

*/

/*
    Forma 1: 

    function prepareGifts(gifts) {
        const newArray = [];

        for (let i = 0; i < gifts.length; i++) {
            if(!newArray.includes(gifts[i])) {
                newArray.push(gifts[i])
            }
        }

        newArray.sort((a, b) => a - b);

        return newArray;
    }
*/

/*
    Forma 2:
    
    function prepareGifts(gifts) {
        const newArray = [];

        for(let number of gifts) {
            if(!newArray.includes(number)) newArray.push(number)
        }

        return newArray.sort((a, b) => a - b);
    }
*/

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [ 1, 2, 3, 4, 5 ]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [ 5, 6 ]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // [ ]
// No hay regalos, la lista queda vacía