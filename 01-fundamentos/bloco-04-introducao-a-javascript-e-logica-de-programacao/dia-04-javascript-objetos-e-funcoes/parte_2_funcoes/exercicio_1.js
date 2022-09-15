// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function isPalindrome(string) {
    if (string.split("").reverse().join("") === string) {
        return true
    }
    return false
}

console.log(isPalindrome("not a palindrome"))