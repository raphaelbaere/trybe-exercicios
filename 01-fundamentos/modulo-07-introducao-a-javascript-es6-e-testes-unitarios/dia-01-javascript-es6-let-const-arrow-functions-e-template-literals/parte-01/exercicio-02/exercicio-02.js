  // Crie uma função que retorne um array em ordem crescente.

// Copie o código abaixo:

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {

// // Seu código aqui.

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = array => {
    for (let index = 1; index < array.length; index += 1) {
        for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
            if (array[index] < array[secondIndex]) {
                let position = array[index];
                array[index] = array[secondIndex];
                array[secondIndex] = position;
            }
        }
    }
    return array
};

console.log(sortOddsAndEvens(oddsAndEvens));