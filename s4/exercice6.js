// Exercice 6: Utilisation de fetch pour récupérer des données d'une API


   
   fetch('https://api-basketball.p.rapidapi.com/timezone')
   .then (response => response.json())
   .then(data => {
    console.log (data);
   })
   .catch (error =>{
    console.error ('Erreur lors de la récupération des données:', error);
   });
   