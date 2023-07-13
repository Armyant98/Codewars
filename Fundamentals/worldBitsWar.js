function bitsWar(numbers) {
    let odds = numbers.filter(num => num % 2 !== 0).map(num => num.toString(2))
    let evens = numbers.filter(num => num % 2 === 0).map(num => num.toString(2))
    let oddsCounter = 0
    let evensCounter = 0
    odds.forEach(num =>{
      if(Number(num) > 0){
        num.split('').forEach(digit =>{
          if(digit == 1){
            oddsCounter = oddsCounter + 1
          }
        })
      }
      else if(Number(num) < 0){
        num.split('').forEach(digit =>{
          if(digit == 1){
            oddsCounter = oddsCounter - 1
          }
        })
      }
    })
    
    evens.forEach(num =>{
      if(Number(num) > 0){
        num.split('').forEach(digit =>{
          if(digit == 1){
            evensCounter = evensCounter + 1
          }
        })
      }
      else if(Number(num) < 0){
        num.split('').forEach(digit =>{
          if(digit == 1){
            evensCounter = evensCounter - 1
          }
        })
      }
    })
    
     
    if(evensCounter > oddsCounter){
      return 'evens win'
    }
    else if(evensCounter < oddsCounter){
      return 'odds win'
    }else{
      return 'tie'
    }
    
    
  }