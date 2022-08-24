// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function biggestIndex (array) {
    let biggestValue = 0
    for (let index = 0; index < array.length; index+=1) {
        if (array[index] > biggestValue) {
            biggestValue = index
        }
    }
    return biggestValue
};

let qualquerCoisa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(biggestIndex(qualquerCoisa))