// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  // Código implementado: 

  const containsA = (array) => {
    let totalLettersOfA = 0;
        array.forEach((element) => {
           const arrayPartido = element.split('')
        totalLettersOfA += arrayPartido.reduce((acc, curr) => {
            if (curr === 'A' || curr === 'a') {
                acc += 1
            }
            return acc
        }, 0)
    })
    return totalLettersOfA;  
}