function twoSort(s) {
    let sorted = 
    s.sort((a,b) =>{
      if(a < b){
        return -1
      }
      else if (a > b) {
        return 1
      }
      else{
        return 0
      }
    })
    
    return sorted[0].split('').map((letter, i) => i === 0 ? letter : '***' + letter).join('')
    
  }