function calculateYears(principal, interest, tax, desired) {
    let total = principal 
    let years = 0
    
    while(total < desired){
      let gain = total * interest 
      total += gain //add interest 
      total -= gain * tax
      years ++      
    }
  
  return years
}