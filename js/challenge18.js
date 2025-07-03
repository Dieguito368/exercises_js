/*
    Reto #18: 📇 La agenda mágica de Santa
    
    Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. 
    El problema: la información de la agenda está mezclada y malformateada. Las líneas contienen un número de teléfono mágico, 
    el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.
    
    Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, dado el contenido de la agenda y 
    un número de teléfono, devuelva el nombre del niño y su dirección.

    Ten en cuenta que en la agenda:
    - Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
    - El nombre de cada niño está siempre entre < y >

    La idea es que escribas una función que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. 
    Si no encuentra nada o hay más de un resultado, debes devolver null.
*/

function findInAgenda(agenda, phone) {
    const registers = agenda.split("\n");

    let results = [];

    for (let i = 0; i < registers.length; i++) {
        let register = registers[i].split("");

        let positionPlus = registers[i].indexOf("+");

        if(positionPlus < 0) continue;

        let number = registers[i].slice(positionPlus + 1, positionPlus + 15);

        if(number.indexOf(phone) >= 0) {
            let positonLessThan = register.indexOf("<");
            let positionGreaterThan = register.indexOf(">");
            
            let name = register.slice(positonLessThan + 1, positionGreaterThan).join("");
            
            register.splice(positonLessThan, (positionGreaterThan - positonLessThan) + 1);
            
            register.splice(register.indexOf("+"), 15);

            let address = register.join("").trim()
            
            results.push({ name, address });
        }
    }

    return results.length !== 1 ? null : results[0];
}

// function findInAgenda(agenda, phone) {
//     const lines = agenda.split("\n");

//     const results = [];

//     for(let line of lines) {
//         const phoneMatch = line.match(/\+\d{1,2}-\d{3}-\d{3}-\d{3}/);
//         const nameMatch = line.match(/<([^>]+)>/);

//         if (!phoneMatch || !nameMatch) continue;

//         const fullPhone = phoneMatch[0];

//         if (fullPhone.includes(phone)) {
//             const address = line
//                 .replace(phoneMatch[0], "")
//                 .replace(nameMatch[0], "")
//                 .trim();
            
//             results.push({
//                 name: nameMatch[1],
//                 address
//             });
//         }
//     }

//     return results.length !== 1 ? null : results[0]
// }


const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'));
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'));
// null
// Explicación: Demasiados resultados