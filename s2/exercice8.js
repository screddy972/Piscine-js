// Exercice 8: Fusionner deux tableaux et supprimer les doublons
let tabs1 =  [ 1,5,6,7];
let tabs2 = [2,5,7,4];
let tabs3 =  tabs1.concat(tabs2)
console.log(tabs3);
let tab4 = [...new Set(tabs3)];