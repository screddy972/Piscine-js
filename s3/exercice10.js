// Exercice 10: Exécuter des promesses en série
function faireQqc() {
    return new Promise((successCallback, failureCallback) => {
      console.log("C'est fait");
      // réussir une fois sur deux
      if (Math.random() > 0.5) {
        successCallback("Réussite");
      } else {
        failureCallback("Échec");
      }
    });
  }
  
  const promise = faireQqc();
  promise.then(successCallback, failureCallback);
  faireQqc()
  .then(function (result) {
    return faireAutreChose(result);
  })
  .then(function (newResult) {
    return faireUnTroisiemeTruc(newResult);
  })
  .then(function (finalResult) {
    console.log("Résultat final : " + finalResult);
  })
  .catch(failureCallback);
  