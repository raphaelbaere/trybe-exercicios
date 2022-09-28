// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function mostCharacters(nomes) {
    let biggestName = nomes[0];
    for (let index in nomes) {
        if (nomes[index].length > biggestName.length) {
            biggestName = nomes[index]
        }
    }
    return biggestName
}

let listaNomes = ["Raphael", "Maria", "Joao", "Brenno", "Pindaminhoganbada"]

console.log(mostCharacters(listaNomes))