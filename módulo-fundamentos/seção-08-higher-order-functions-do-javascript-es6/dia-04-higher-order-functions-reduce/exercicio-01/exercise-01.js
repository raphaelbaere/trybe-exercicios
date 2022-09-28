const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  // Código implementado: 
  
  const flatten = (array) => {
    return array.reduce((acc, curr) => {
        curr.forEach((element) => {
            acc.push(element)
        })
        return acc;
    }, [])
  }