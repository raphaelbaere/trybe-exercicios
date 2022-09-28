// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function isTheEnd(word,ending) {
    let isIt = true
    for (let index = 0;index < ending.length;index+=1) {
        if (word[word.length - ending.length + index] !== ending[index]) {
            isIt = false;
        }
    }
    return isIt;
}

console.log(isTheEnd("abacaxi", "morengo"))


