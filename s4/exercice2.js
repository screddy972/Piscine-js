// Exercice 2: Gérer les erreurs avec try...catch
try {

    alert('Start of try runs');  // (1) <--
  
    // ...pas d'erreur
  
    alert('End of try runs');   // (2) <--
  
  } catch (err) {
  
    alert('Catch is ignored, because there are no errors'); // (3)
  
  }