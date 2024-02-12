// Exercice 9: Calculer l'âge à partir d'une date de naissance

    function getAge(date) { 
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 

        return Math.abs(age.getUTCFullYear() - 1969);
    }

    console.log(getAge(new Date(1981, 1, 29)));   
