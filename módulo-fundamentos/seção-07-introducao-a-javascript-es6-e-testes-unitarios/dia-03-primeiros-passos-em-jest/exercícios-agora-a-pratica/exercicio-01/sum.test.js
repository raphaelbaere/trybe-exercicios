/* Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

Crie os arquivos com o respectivo nome da função. Ex: sum.js e sum.test.js */

// A função sum(a, b) retorna a soma do parâmetro a com o b

const sum = require('./sum');

describe('sum Function', () => {
    it('sum(4,5) expected to be 9', () => { // Teste se o retorno de sum(4, 5) é 9
        expect(sum(4, 5)).toBe(9)
    })
    it('sum(0,0) expected to be 0', () => { // Teste se o retorno de sum(0, 0) é 0
        expect(sum(4, 5)).toBe(9)
    })
    it('sum(4,"5") expected to throw an error', () => { // Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
        expect(() => sum(4, "5")).toThrow();
    })
    it('sum(4,"5") expected to throw an error message "parameters must be numbers"', () => { // Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
        expect(() => sum(4, "5")).toThrowError(new Error('parameters must be numbers'));
    })
})