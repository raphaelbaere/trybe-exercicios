// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


// Algoritmo para retornar a maior palavra.

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index+=1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

// Algoritmo para retornar a menor palavra.

for (let index = 0; index < array.length; index+=1) {
    if (array[index].length < array[0].length) {
        menorPalavra = array[index];
    }
}

console.log("Essa é a maior palavra: " + maiorPalavra);

console.log("Essa é a menor palavra: " + menorPalavra);