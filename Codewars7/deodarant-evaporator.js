function evaporator(content, evap_per_day, threshold){ 
    let startingContent = content
    const thresholdAdjusted = content * (threshold/100)
    let days = 0
    while(startingContent > thresholdAdjusted){
      startingContent -= (startingContent * evap_per_day/100)
      days++
    }
    
    return days
  }
  
  //Parameters
  //  content of the exaportator,the percent evaporated per day, threshold where evaporator is not useful anymore
  // always positive number
  //Return 
  // the number of days it taked to reach the point where the evaporator isnt useful anymore 
  //Examples
  // evaporator(10, 10, 5) -> 29
  //Psuedocode
  
  // have the total content
  // adjust values of percentages to reflect the percent of the starting value
  // subtract the percentage from the current amount every day\
  // retain each time this happens for a total 
  // compare to threshold on each loop and if above go again
  // return total number of days loop