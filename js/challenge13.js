/*
    Reto #13: 🤖 ¿El robot está de vuelta?

    Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. 
    El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

    Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

    Las órdenes básicas del robot son:
    - L: Mover hacia la izquierda
    - R: Mover hacia la derecha
    - U: Mover hacia arriba
    - D: Mover hacia abajo
    
    Pero también tiene ciertos modificadores para los movimientos:
    - *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
    - !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
    - ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
    
    Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. 
    Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, 
    por lo tanto, se haría el movimiento U final.

    Debes devolver:
    - true: si el robot vuelve a estar justo donde empezó
    - [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
*/

function isRobotBack(moves) {
    const movementsArray = [ ...moves ];
    const directions = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] }
    let reversedDirections = { L: "R", R: "L", U: "D", D: "U" }
    
    let newMovements = [];
    let seenMoves = new Set();

    for(let i = 0; i < movementsArray.length; i++) {
        let move = moves[i];
        
        if((move in directions)) {
            newMovements.push(move);
            seenMoves.add(move);
        } else {
            let nextMove = moves[i + 1];

            switch(move) {
                case "*":
                    newMovements.push(nextMove, nextMove);
                    seenMoves.add(nextMove);

                    break;

                case "!":
                    newMovements.push(reversedDirections[nextMove]);
                    seenMoves.add(reversedDirections[nextMove]);

                    break;

                case "?":
                    if(!seenMoves.has(nextMove)) {
                        newMovements.push(nextMove);
                        seenMoves.add(nextMove);
                    }

                    break;
            }

            i++;
        }
    }

    let x = 0, y = 0;

    for (let move of newMovements) {
        let [ dx, dy ] = directions[move];

        x += dx;
        y += dy;
    }
    
    return x === 0 && y === 0 ? true : [ x, y ];
}

console.log(isRobotBack('R'));     // [1, 0]
console.log(isRobotBack('RL'));    // true
console.log(isRobotBack('RLUD'));  // true
console.log(isRobotBack('*RU'));   // [2, 1]
console.log(isRobotBack('R*U'));   // [1, 2]
console.log(isRobotBack('LLL!R')); // [-4, 0]
console.log(isRobotBack('R?R'));   // [1, 0]
console.log(isRobotBack('U?D'));   // true
console.log(isRobotBack('R!L'));   // [2,0]
console.log(isRobotBack('U!D'));   // [0,2]
console.log(isRobotBack('R?L'));   // true
console.log(isRobotBack('U?U'));   // [0,1]
console.log(isRobotBack('*U?U'));  // [0,2]
console.log(isRobotBack('U?D?U')); // true

// Ejemplos paso a paso:
console.log(isRobotBack('R!U?U')); // [1,0]]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

console.log(isRobotBack('UU!U?D')); // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'