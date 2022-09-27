// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  // Crie uma string com os nomes de todas as pessoas autoras.
  const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
  // Código implementado:
  const reduceNames = (array) => {
   return array.reduce((acc, curr) => {
       if (acc === curr.author.name) {
        return acc + ', '
       } else {
        return acc + curr.author.name + ', '
       }
    }, array[0].author.name)
  }

 // Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

 const expectedResult2 = 43;

 // Código implementado:
  const averageAge = (array) => {
    const somaTotal = array.reduce((acc, curr) => {
    if (acc === curr.releaseYear - curr.author.birthYear) {
        return acc
    } else {
        return acc + (curr.releaseYear - curr.author.birthYear)
    }
    }, array[0].releaseYear - array[0].author.birthYear);
    return somaTotal / array.length;
  }

  // Encontre o livro com o maior nome.


const expectedResult3 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  // Código implementado:

  const longestNamedBook = (array) => {
   return array.reduce((acc, curr) => {
        if (acc.name.length > curr.name.length) {
            return acc
        }
        return curr
    }, array[0])
  }
