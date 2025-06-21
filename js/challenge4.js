/*
    Reto #4: 🎄 Decorando el árbol de Navidad

    ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función 
    que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

    La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:
    - El árbol está compuesto de triángulos de caracteres especiales.
    - Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
    - Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
    - El árbol siempre debe tener la misma longitud por cada lado.
    - Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
*/

// function createXmasTree(height, ornament) {
//     let tree = "";

//     const trunk = `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}`;

//     for (let i = 1; i <= height; i++) {
//         tree += `${"_".repeat(height - i)}${ornament.repeat(i * 2 - 1)}${"_".repeat(height - i)}\n`;
//     }

//     tree += `${trunk}\n${trunk}`;

//     return tree;
// }

function createXmasTree(height, ornament) {
    const treeLines = Array.from({ length: height }, (_, i) => {
        const spaces = "_".repeat(height - i - 1);
        const ornaments = ornament.repeat(i * 2 + 1);

        return spaces + ornaments + spaces;
    });

    const trunk = `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}`;

    treeLines.push(trunk, trunk);

    return treeLines.join("\n");
}


const tree = createXmasTree(5, '*')
console.log(tree)
/*
    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
    __+__
    _+++_
    +++++
    __#__
    __#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
    _____@_____
    ____@@@____
    ___@@@@@___
    __@@@@@@@__
    _@@@@@@@@@_
    @@@@@@@@@@@
    _____#_____
    _____#_____
*/