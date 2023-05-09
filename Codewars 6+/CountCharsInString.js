// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    string = string.split('')
    let counter = {}
    
    if (string.length < 1){
      return counter
    }
    
    string.forEach((letter,index) =>{
      if(string.indexOf(letter) === index){
        counter[letter] = 1
      }
      else{
        counter[letter] += 1
      }
    })
    
    return counter
    
  }