// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (strng) {
    //check where last letter is 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //maintain last nums 
    let numIndex = []
    strng.split('').forEach((letter, i) =>{
      if(alphabet.indexOf(letter) === -1){
        numIndex.push(i)
      }
      else{
        numIndex = []
      }
    })
    
    //increment by 1 
    let stringHalf = strng.slice(0, numIndex[0])
    let numHalfArr = strng.slice(numIndex[0])
    
    let numHalfAdded = Number(strng.slice(numIndex[0])) + 1
    
    if(numIndex.length === 0){
      return stringHalf + '1'
    }
    
    
    else if(numHalfArr.length > String(numHalfAdded).length){
      return stringHalf + numHalfAdded.toString().padStart( numHalfArr.length , '0')
    }
    
    else{
      return stringHalf + String(numHalfAdded)
    }
    
  
    
    
  //   let leadingZero = 0
    
  //   for(let i = 0; i < numHalf.length; i++){
  //     if(numHalf[i] == 0){
  //       leadingZero ++ 
  //     }
  //     else{
  //       break
  //     }
  //   }
    
  //   if(leadingZero === numHalf.length){
  //     return stringHalf + (Number(numHalf) + 1).toString().padStart(leadingZero , '0')
  //   }
  //   else if (leadingZero < ){
      
  //   }
  
    
    console.log(numIndex,stringHalf, numHalfAdded)
    
  }