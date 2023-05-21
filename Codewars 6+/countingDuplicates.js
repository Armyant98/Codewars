// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    let repeated = []  //place to store repeated characters
    let arr = text.toLowerCase().split('').sort() //turn str to arr
    arr = arr.map(char =>{ //funciton to push letters that first index doesnt match last index of letter and arent already accounted for in the repeated arr
      if(arr.indexOf(char) !== arr.lastIndexOf(char) && repeated.indexOf(char)=== -1){
        repeated.push(char)
      }  
    })
    
    return repeated.length //return the length to get how many unique letters repeat
  }



function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }