// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
valoresOrdemCrescente = [numbers[0]];

for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] > valoresOrdemCrescente[0]) {
        valoresOrdemCrescente.push(numbers[index])
    }
    else if (numbers[index] < valoresOrdemCrescente[0]) {
        valoresOrdemCrescente.unshift
    }
}

console.log(valoresOrdemCrescente);
