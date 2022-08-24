// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeated(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        qualNumero = numeros[index]
        for (let index2 = 1;index2<numeros.length;index2+=1) {
            if(qualNumero === numeros[index2]) {
                contNumero +=1
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero
            indexNumeroRepetido = index
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}

let arrayDeInteiros = [1, 1, 1, 1, 2, 3, 4]

console.log(mostRepeated(arrayDeInteiros))