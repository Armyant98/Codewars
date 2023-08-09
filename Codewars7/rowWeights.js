function rowWeights(array){
    //create spaces for team 1 and 2 
    let team1 = 0
    let team2 = 0
    //loop through arr and add to respective team based on index if even or odd
    array.forEach((el, i) => {
      if((i + 1 )% 2 === 0){
        team2 += el
      }
      else{
        team1 += el
      }
    })
    //return tuple with team totals
    
    return [team1, team2]
  }