/*
    Reto #2: 🖼️ Enmarcando nombres
    
    Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
    pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

    Reglas:
    . Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
    . Cada nombre debe estar en una línea, alineado a la izquierda.
    . El marco está construido con * y tiene un borde de una línea de ancho.
    . La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/

function createFrame(names) {
    const maxLength = Math.max(...names.map(name => name.length));

    const border = "*".repeat(maxLength + 4);

    const framed = names.map(name => `* ${name.padEnd(maxLength)} *`);

    return [ border, ...framed, border ].join("\n");
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
/*
    Resultado esperado:

    ***************
    * midu        *
    * madeval     *
    * educalvolpz *
    ***************
*/

console.log(createFrame(['midu']));
/*
    Resultado esperado:

    ********
    * midu *
    ********
*/

console.log(createFrame(['a', 'bb', 'ccc']));
/* 
    Resultado esperado:

    *******
    * a   *
    * bb  *
    * ccc *
    *******
*/