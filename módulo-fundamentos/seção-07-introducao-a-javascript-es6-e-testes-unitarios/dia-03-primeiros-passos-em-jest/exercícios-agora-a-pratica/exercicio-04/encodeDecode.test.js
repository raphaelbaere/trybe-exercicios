const {decode, encode, code, vogais} = require ('./encodeDecode');

describe('Encode & Decode functions', () => {
    it('Typeof encode expected to be function', () => {
        expect(typeof encode).toMatch('function') // Teste se encode e decode são funções;
    })
    it('Typeof decode expected to be function', () => {
        expect(typeof decode).toMatch('function') // Teste se encode e decode são funções;
    })
    it('encode("a, e, i, o, u") expected to be "1, 2, 3, 4, 5"', () => {
        expect(encode("a, e, i, o, u")).toMatch("1, 2, 3, 4, 5") // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
    })
    it('decode("1, 2, 3, 4, 5") expected to be "a, e, i, o, u"', () => {
        expect(decode("1, 2, 3, 4, 5")).toMatch("a, e, i, o, u") // Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
    })
    it('decode("1, 2, 3, 4, 5") expected to have length equals to 13"', () => {
        expect(decode("1, 2, 3, 4, 5")).toHaveLength(13) // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
    })
})