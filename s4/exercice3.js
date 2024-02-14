// Exercice 3: Filtrage avec des expressions régulières
function palindrome(str) {
  
    var splitStr = str.split("");
    
    var filterArray = splitStr.filter(function(val) {
      
      // Test the string against the regular expression
      // and test for no match (whole thing is preceeded by !)
      return !/[\W_]/g.test(val);
    });
    
    return filterArray;
  }
  
  console.log(palindrome("ey*e"));