/*
    Reto #15: ✏️ Dibujando tablas

    Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

    Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

    La tabla dibujada debe representar los datos del objeto de la siguiente manera:

    - Tiene una cabecera con el nombre de la columna.
    - El nombre de la columna pone la primera letra en mayúscula.
    - Cada fila debe contener los valores de los objetos en el orden correspondiente.
    - Cada valor debe estar alineado a la izquierda.
    - Los campos dejan siempre un espacio a la izquierda.
    - Los campos dejan a la derecha el espacio necesario para alinear la caja.
*/

function drawTable(data) {
    let border = "";
    let head = "";
    let columns = [];
    let keys = Object.keys(data[0]);

    const columnsWidths = keys.map(key =>
        Math.max(
            key.length,
            ...data.map(value => value[key].toString().length)
        )
    )

    keys.forEach((key, i) => {
        const columnName = key.charAt(0).toLocaleUpperCase() + key.slice(1);

        border += `+${"-".repeat(columnsWidths[i] + 2)}`;

        head += `| ${columnName.padEnd(columnsWidths[i])} `;
    });

    border += "+";
    head += "|";

     for (let row of data) {
        let column = ""
        
        keys.forEach((key, i) => {
            column += `| ${row[key].toString().padEnd(columnsWidths[i] + 1)}`
        });

        column += "|";

        columns.push(column);
    }

    return [ border, head, border, ...columns, border ].join("\n");
}

/*
function drawTable(data) {
    let border = "";
    let head = "";
    let columns = [];

    let keys = Object.keys(data[0]);

    for(let key of keys) {
        let longer = Math.max(...[ ...new Set([ key.length, ...data.map(value => value[key].toString().length) ]) ]);

        let capitalLetter = key.charAt(0).toLocaleUpperCase();
        const columnFormat = capitalLetter + key.slice(1);

        head += `| ${columnFormat.padEnd(longer + 1)}`

        border += `+${"-".repeat(longer + 2)}`;
    }

     for (let i = 0; i < data.length; i++) {
        let column = ""
        
        for(let key of keys) {
            let longer = Math.max(...[ ...new Set([ key.length, ...data.map(value => value[key].toString().length) ]) ]);

            column += `| ${data[i][key].toString().padEnd(longer + 1)}`
        }

        column += "|";

        columns.push(column);
    }

    border += "+";
    head += "|";

    return [ border, head, border, columns.join("\n"), border ].join("\n");
}
*/
console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]));
// +---------+----------+
// | Name    | City     |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

console.log(drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
]));
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+