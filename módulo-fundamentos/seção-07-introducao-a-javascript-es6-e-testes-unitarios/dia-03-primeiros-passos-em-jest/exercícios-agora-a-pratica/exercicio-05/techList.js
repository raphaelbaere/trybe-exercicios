// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

/* {
  tech: 'nomeTecnologia',
  name: name,
} */

// Implemente a função techList a partir dos testes abaixo. É importante nunca alterar os testes ou as variáveis já escritas no código.


const techList = (array, name) => {
    if (array.length > 1) {
        const techListInOrder = array.sort();
        let newArray = [];
        for (let index = 0; index < techListInOrder.length; index += 1) {
            let objeto = {
                tech: techListInOrder[index],
                name: name,
            }
            newArray.push(objeto);
        }
    return newArray;
    }
    return 'Vazio!'
}

module.exports = techList;

console.log(techList([], 'Lucas'))