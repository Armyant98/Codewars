function getDivisorsCnt(n){
    let divisors = []
    let start = Math.floor(Math.sqrt(n))
    for(let i= start; i > 0; i--){
      if(n % i === 0){
        divisors.push(i)
        divisors.push(n / i)
      }
    }
  
  return [...new Set(divisors)].length
}