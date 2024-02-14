// Exercice 1: Supprimer les éléments falsy d'un tableau
let tab1 = [true , false, "automne", false,"lion"];
let tab2 = [false, "été",false,"priorité"];
let tab3 = tab1.concat(tab2);
console.log(tab3);
let tab4 = tab3.filter(Boolean);
console.log(tab4);