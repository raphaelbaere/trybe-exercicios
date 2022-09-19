/* Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

Crie os arquivos com o respectivo nome da função. Ex: sum.js e sum.test.js */

// A função sum(a, b) retorna a soma do parâmetro a com o b

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  module.exports = sum;