// Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

const myFizzBuzz = require('./myFizzBuzz')

describe('myFizzBuzz Function', () => {
    it('myFizzBuzz(15) expected to be "fizzbuzz"', () => { // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz(15)).toMatch('fizzbuzz')
    }) 
    it('myFizzBuzz(6) expected to be "fizz"', () => { // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
        expect(myFizzBuzz(6)).toMatch('fizz')
    }) 
    it('myFizzBuzz(20) expected to be "buzz"', () => { // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz(20)).toMatch('buzz')
    }) 
    it('myFizzBuzz(7) expected to be "7"', () => { // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
        expect(myFizzBuzz(7)).toBe(7)
    }) 
    it('myFizzBuzz("5") expected to be false', () => { // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
        expect(myFizzBuzz('5')).toBe(false)
    }) 
    }) 