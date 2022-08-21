// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

// Source: https://en.wikipedia.org/wiki/Chess_piece


const pecaDeXadrez = "rei"

    switch(pecaDeXadrez.toLowerCase()) {
        case "cavalo":
            console.log("O movimento do cavalo é em L. Ele é a única peça que pode passar por cima de peças aliadas.")
        break;
        case "peão":
            console.log("O movimento do peão é uma casa à frente ou duas, podendo andar uma casa a diagonal no ato de comer outra peça.")
        break;
        case "rainha":
            console.log("A rainha se movimenta para todos os lados, sem limites de casas.")
        break;
        case "rei":
            console.log("O rei se movimenta para todos os lados, com limite de 1 casa.")
        break;
        case "bispo":
            console.log("O bispo se move nas diagonais, sem limites de casas.")
        break;
        case "torre":
            console.log("A torre se move para as casas que não são diagonais, sem limites de casas.")
        break;
        default:
            console.log("Essa não é uma peça de xadrez.")
        break;
    }