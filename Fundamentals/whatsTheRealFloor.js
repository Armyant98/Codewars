function getRealFloor(n) {
    if(n < 13 && n > 0){
      return n-1
    }else if(n > 13){
      return n-2
    }
    else{
      return n
    }
  }