// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

// Exemplo:

// longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') retorna 'aconteceu'

const longestWordInPhrase = string => {
   const phraseSplitInWords = string.split(' ');
   let biggestWord = phraseSplitInWords[0]; 
   for (let index = 0; index < phraseSplitInWords.length; index += 1) {
        if (phraseSplitInWords[index].length > biggestWord.length) {
            biggestWord = phraseSplitInWords[index]
        }
    }
    return biggestWord;
}

console.log(longestWordInPhrase('Antônio foi ao banheiro e não sabemos o que aconteceu'))