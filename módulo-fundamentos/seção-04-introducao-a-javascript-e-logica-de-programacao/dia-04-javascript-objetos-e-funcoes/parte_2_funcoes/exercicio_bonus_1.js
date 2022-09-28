// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function algarismo(romanos) {
    let soma = 0
    for (let index in romanos) {
        switch(romanos[index]) {
            case 'I':
            soma+=1
        }
    }
}