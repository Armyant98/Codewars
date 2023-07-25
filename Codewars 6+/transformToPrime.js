function isPrime (num){
    if(num <= 3){
      return true
    }
    
    for(let i = 2; i< num; i++){
      if(num % i === 0){
        return false
      }
    }
    
    return true  
  }
 
 
 function minimumNumber(numbers){
   let sum = numbers.reduce((a,c) => a + c, 0)
   if(isPrime(sum) === true){
     return 0
   }
  
   
   let difference = sum
   
   while(isPrime(difference) === false){
     difference += 1
   }
   
   return difference - sum
   
   
 }