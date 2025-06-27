/*
    Reto #12: 💵 ¿Cuánto cuesta el árbol?

    Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, 
    y el precio del árbol se determina en función de los adornos que tiene.

    - *: Copo de nieve - Valor: 1
    - o: Bola de Navidad - Valor: 5
    - ^: Arbolito decorativo - Valor: 10
    - #: Guirnalda brillante - Valor: 50
    - @: Estrella polar - Valor: 100

    Normalmente se sumarían todos los valores de los adornos y ya está…

    Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.
*/

function calculatePrice(ornaments) {
    let map = { "*": 1, "o": 5, "^": 10, "#": 50, "@": 100 }

    let total = 0;

    for(let i = 0; i < ornaments.length; i++) {
        if(!(ornaments[i] in map)) return undefined

        let currentValue  = map[ornaments[i]];
        let nextValue = map[ornaments[i + 1]];

        if(currentValue < nextValue) {
            total -= currentValue ;
        } else {
            total += currentValue ;
        }
    }

    return total;
}


// function calculatePrice(ornaments) {
//     let map = { "*": 1, "o": 5, "^": 10, "#": 50, "@": 100 };

//     for(let ornament of ornaments) if(!(ornament in map)) return undefined;

//     return ornaments.split("").reduce((acc, char, i, arr) => {
//         let current = map[char];
//         let next = map[arr[i + 1]];

//         return acc + (current < next ? -current : +current);
//     }, 0);
// }

// function calculatePrice(ornaments) {
//     let map = { "*": 1, "o": 5, "^": 10, "#": 50, "@": 100 };

//     for(let ornament of ornaments) if(!(ornament in map)) return undefined;

//     return ornaments.split("").reduce((acc, char, i, arr) => map[char] < map[arr[i + 1]] ? acc - map[char] : acc + map[char], 0);
// }



console.log(calculatePrice('***'));  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'));   // 4   (5 - 1)
console.log(calculatePrice('o*'));   // 6   (5 + 1)
console.log(calculatePrice('*o*'));  // 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*')); // 6  (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***')); // 8   (5 + 3)
console.log(calculatePrice('*o@'));  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'));   // 49  (-1 + 50)
console.log(calculatePrice('@@@'));  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'));   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'));  // undefined (Z es desconocido)