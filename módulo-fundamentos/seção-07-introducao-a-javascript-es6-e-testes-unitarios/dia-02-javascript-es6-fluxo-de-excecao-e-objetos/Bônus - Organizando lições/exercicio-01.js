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
    numeroEstudantes: 30,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const allLessons = {};

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

/* Utilizando o objeto (allLesson), Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. */

  const sumClassesFrequency = (object, classes) => {
    let objectKeys = Object.keys(object);
    let somaTotal = 0;
    for (let index = 0; index < objectKeys.length; index += 1) {
      if (object[objectKeys[index]].materia === classes) {
        somaTotal += object[objectKeys[index]].numeroEstudantes;
      }
    }
    return somaTotal;
  };

sumClassesFrequency(allLessons, 'Matemática');

/* Utilizando o objeto (allLesson), Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. */

const sumClassesFrequencyPerProfessor = (object, professor) => {
    let objectKeys = Object.keys(object);
    let somaTotal = 0;
    for (let index = 0; index < objectKeys.length; index += 1) {
      if (object[objectKeys[index]].professor === professor) {
        somaTotal += object[objectKeys[index]].numeroEstudantes;
      }
    }
    return somaTotal;
  };

const sumClassesPerProfessor = (object, array, professor) => {
    let objectKeys = Object.keys(object);
    for (let index = 0; index < objectKeys.length; index += 1) {
      if (object[objectKeys[index]].professor === professor) {
        array.push(object[objectKeys[index]].materia)
      }
    }
}

const getProfessor = (object, professor) => {
    let objectKeys = Object.keys(object);
    let professorResult = ''
    for (let index = 0; index < objectKeys.length; index += 1) {
      if (object[objectKeys[index]].professor === professor) {
        professorResult = object[objectKeys[index]].professor;
      }
    }
    return professorResult;
  };

 const createReport = (object, professor) => {
    let newObject = {};
    newObject['professor'] = getProfessor(object, professor);
    newObject['aulas'] = [];
    sumClassesPerProfessor(object, newObject['aulas'], professor);
    newObject['estudantes'] = sumClassesFrequencyPerProfessor(object, professor)
    return newObject;
 }

 console.log(createReport(allLessons, 'Maria Clara'));