// Exercice 8: Trier un tableau d'objets par plusieurs propriétés

const numberArray = [40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}


numberArray.join(); 
console.log(numberArray);
numberArray.sort(); 
console.log(numberArray);
numberArray.sort(compareNumbers); 
console.log(numberArray);