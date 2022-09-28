// Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problemas

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

const myRemove = require('./myRemove')

describe('myRemove function', () => {
    it('myRemove([1, 2, 3, 4], 3) expected to be [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]) // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    })
    it('myRemove([1, 2, 3, 4], 3) expected to be not [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]) // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    })
    it('myRemove([1, 2, 3, 4], 5) expected to be [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]) // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    })
    
})