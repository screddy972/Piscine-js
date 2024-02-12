// Exercice 7: Vérifier si un mot est un palindrome
function estPalindrome(mot) {
    return mot === mot.split('').reverse().join('');
}

let mot = "mot";
let resul = estPalindrome(mot);
console.log(resul + " " + mot   )