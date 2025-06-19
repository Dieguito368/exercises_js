/*
    Reto #5: 👞 Emparejando botas

    Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. 
    Cada bota se describe por dos valores:

    - type indica si es una bota izquierda (I) o derecha (D).
    - size indica el tamaño de la bota.
    
    Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. 
    Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

    ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
*/

function organizeShoes(shoes) {
    const pairsAvailable = [];

    while(shoes.length > 0) {
        const index = shoes.findIndex(shoe => shoes[0].size === shoe.size && shoes[0].type !== shoe.type );
        
        if(index >= 0) {
            pairsAvailable.push(shoes[0].size);
            
            shoes.splice(index, 1);
            shoes.splice(0, 1);
        } else {
            shoes.splice(0, 1);
        }
    }

    return pairsAvailable;
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'D', size: 38 },
  { type: 'D', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'D', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'D', size: 38 }
]

console.log(organizeShoes(shoes2));
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'D', size: 36 },
  { type: 'D', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3));
// []