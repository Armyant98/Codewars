function isTriangle(a,b,c){
    if(a < c + b && b < a + c && c < a + b ){
      return true
    }
    
     return false;
  }