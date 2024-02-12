// Exercice 10: Calculer la factorielle d'un nombre
function calculerfactorielle(nb) {
    if (nb===0 || nb ===1) {
        return 1;
    } else {
        let resultat =1;
        for (let i = 2; i <= nb; i++) {
          
            resultat *= i;

            
        }
        return resultat;
    }
}
 let nb = 5;
 let factoriel = calculerfactorielle(nb);
 console.log(factoriel);