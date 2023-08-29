function alphabetPosition(text) {
    // reference alphabet variable 
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      const sentence = text.toLowerCase() //standardize sentence
      
    //find position of letter in alphabet 
      const nums = sentence.split('').map(letter =>{ //return number in place of word 
        if(alphabet.indexOf(letter) !== -1){
          return alphabet.indexOf(letter) + 1
        }else{
          return letter
        }
      })
      .filter(num => typeof num === 'number') //remove those not necessary
      .join(' ') //transform nums into sentence for string
      
      
      return nums
      
    }
    
    
    
    //Paramters
    //sentence that can contain characters other than letters
    
    //Result 
    // numbers representing the letter position in the alphabet
    // should skip anything that isnt a letter 
    //return as sentence string with nums instead
    
    // Explanation 
    // alphabetPosition("The sunset sets at twelve o' clock.")
    // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    
    // Psuedocode 