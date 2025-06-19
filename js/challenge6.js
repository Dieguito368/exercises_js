/*
    Reto #6: 📦 ¿Regalo dentro de la caja?

    Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, 
    representado por un asterisco *, está dentro de la caja.

    La caja tiene un regalo (*) y cuenta como dentro de la caja si:
    - Está rodeada por # en los bordes de la caja.
    - El * no está en los bordes de la caja.
    
    Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. 
    Y debemos devolver true si el * está dentro de la caja y false en caso contrario.
*/


function inBox(box) {
    const array = [ ...box ]
    
    const upBorder = array[0]
    const downBorder = array[array.length - 1];
    const rightBorder = [];
    const leftBorder = [];
    const content = []

    for (let i = 0; i < array.length; i++) {
        if(i !== 0 && i !== (array.length - 1)) {
            content.push([ ...array[i] ].slice(1, array.length - 1));
            
            leftBorder.push([...array[i]][0]);
            rightBorder.push([...array[i]][[...array[i]].length - 1]);
        }
    }

    const hasGift = [ ...content.join(" ") ].includes("*");
    
    const hasBorder = ![ ...upBorder, ...downBorder, ...leftBorder, ...rightBorder ].includes("*");

    return hasGift && hasBorder;
}

console.log(inBox([
    "###",
    "#*#",
    "###"
])); // ➞ true

console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
])); // ➞ true

console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
])); // ➞ false

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
])); // ➞ false