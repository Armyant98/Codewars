var isSquare = function(n){
    if(Math.sqrt(n) === Math.round(Math.sqrt(n))) {
      return true;
    }
    return false;
  }

  //better 
  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }