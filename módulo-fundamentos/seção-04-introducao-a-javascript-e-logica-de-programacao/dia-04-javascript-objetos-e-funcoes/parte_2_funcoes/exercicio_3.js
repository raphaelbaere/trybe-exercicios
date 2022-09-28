// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minorIndex(numeros) {
    let minorValue = 0;
    for (let index in numeros) {
        if (numeros[index] < numeros[minorValue]) {
            minorValue = index
        }
    }
    return minorValue;
}

let numeros2 = [1010, 999, 333, 444, 555, 666]

console.log(minorIndex(numeros2))