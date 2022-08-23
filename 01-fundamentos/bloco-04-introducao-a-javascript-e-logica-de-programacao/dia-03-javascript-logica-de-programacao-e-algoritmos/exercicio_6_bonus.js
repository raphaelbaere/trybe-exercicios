// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let size = 5;
let linhaAsterisco = "";

for (let index = size; index > 0;index-=1) {
    linhaAsterisco += "*"
    for (let index2 = size; index2 > 0; index2-=1) {
        console.log(linhaAsterisco)
        break;
    }
}