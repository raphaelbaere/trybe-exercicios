// Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

/*   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

Crie uma função para mostrar o tamanho de um objeto.

Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: */

const addNightShift = (object, key, value) => {
    object[`${key}`] = value;
}

const listObjectKeys = (object) => {
   return Object.keys(object);
}

const objectLength = (object) => {
    return listObjectKeys(lesson1).length;
}

const listValues = (object) => {
    return Object.values(object);
}

addNightShift(lesson2, 'turno', 'noite');

listObjectKeys(lesson1);

objectLength(lesson1);

listValues(lesson2);

const allLessons = {};

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

/* Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática' */

const sumTotalStudents = (object) => {
    let somaTotal = 0;
    let objectKeys = listObjectKeys(object);
    for (let index = 0; index < objectKeys.length; index += 1) {
        somaTotal += object[objectKeys[0]].numeroEstudantes
    }
    return somaTotal;
}

const getValueByNumber = (object, position) => {
    return listValues(object)[position];
}


sumTotalStudents(allLessons);
getValueByNumber(lesson1, 0);

/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */

const verifyKeys = (object, key) => {
    let objectKeys = listObjectKeys(object);
    if (!objectKeys.includes(key)) {
            throw new Error('O objeto não possui essa chave.')
    }
}

const verifyValue = (object, key, value) => {
    if (object[key] !== value) {
        throw new Error('A chave não possui esse valor')
    }
}

const verifyPair = (object, key, value) => {
    try {
    verifyKeys(object, key);
    verifyValue(object, key, value);
    return true
    } catch (error) {
    return false
    }
}

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));