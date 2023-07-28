function solution(digits){
    let largest = 0
    for(let i=0; i < digits.length; i ++){
      let num = digits.split('').slice(i, i + 5).join('')
      if(num > largest){
        largest = Number(num)
      }
    }
    //check 5 digit possibilites 
   
    return largest
    //compare if it is current largest 
  }