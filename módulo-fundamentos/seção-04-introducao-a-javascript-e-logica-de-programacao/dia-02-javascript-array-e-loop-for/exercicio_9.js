// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let oneToTwentyFive = [];

for (let index = 1; index < 26; index+=1) {
    oneToTwentyFive.push(index)
}

for (let index = 0; index < oneToTwentyFive.length; index+=1) {
    console.log(oneToTwentyFive[index] / 2)
}