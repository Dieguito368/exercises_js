/*
    Reto #17: 💣 Busca las bombas del Grinch

    El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. 
    Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo 
    (true) y otras están vacías (false).

    Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas 
    de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.
*/

function detectBombs(grid) {
    let map = [];

    for (let i = 0; i < grid.length; i++) {
        let row = [];

        for (let j = 0; j < grid[i].length; j++) {
            
            let directions = {
                L: grid[i][j - 1] || 0,
                R: grid[i][j + 1] || 0,
                U: (i - 1) < 0 ? 0 : grid[i - 1][j] ? 1 : 0 || 0,
                D: (i + 1) > (grid.length - 1) ? 0 : grid[i + 1][j] ? 1 : 0 || 0,
                DLU: (i - 1) < 0 ? 0 : grid[i - 1][j - 1] ? 1 : 0 || 0,
                DRU: (i - 1) < 0 ? 0 : grid[i - 1][j + 1] ? 1 : 0 || 0,
                DLD: (i + 1) > (grid.length - 1) ? 0 : grid[i + 1][j - 1] ? 1 : 0 || 0,
                DRD: (i + 1) > (grid.length - 1) ? 0 : grid[i + 1][j + 1] ? 1 : 0 || 0,
            }

            row.push(Object.values(directions).reduce((acc, number) => acc + number, 0));
        }

        map.push(row);
    }

    return map;
}

console.log(detectBombs([
    [ true, false, false ],
    [ false, true, false ],
    [ false, false, false ]
]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
    [ true, false ],
    [ false, false ]
]));
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
    [ true, true ],
    [ false, false ],
    [ true, true ]
]));

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]