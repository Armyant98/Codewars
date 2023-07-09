// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the 
// even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


function encrypt(text, n) {
    if (text === null){
       return null
     }
      if(text.length < 1){ //return instant fails with desired responses immediately 
        return ''
      }
     let str = text  //make a copy to modify and return 
     for(let i=0; i < n; i++){ //loop as many iterations of the encryption
       let odds = ''          //store odd indexed items
       let evens = ''         //store even indexed items
       for(let i=0; i < str.length; i++){ //loop through the str to capture the odd and even items
         if( i % 2 > 0){
           odds += str[i]
         }else{
           evens += str[i]
         }    
       }
       str = odds + evens //concatenate the odds to the evens and replace str for next iteration if necessary
     }
     
     return str  //return final string that has been modified through each iteration
     
   }
   
   
   
   function decrypt(encryptedText, n) {
     if (encryptedText === null){
       return null
     }
      if(encryptedText.length < 1){
        return ''
      }
     let str = encryptedText //copy for mutation
     for(let i=0; i < n; i++){  //number of decryption loops 
       let odds = str.slice(0, encryptedText.length/2)  //half of the length minus - 1 was the odds section so to separate splice half of the str which doesnt include ending index
       let evens =  str.slice(encryptedText.length/2) //splice starting from the index we ended for the odds
       let decrypt = '' //temp variable to store the organized str 
       for(let i=0; i<evens.length; i++){ //evens is the longer of the two and thus we iterate thing many times as a minumum
         if(evens[i] !== undefined){  //alternate pushing an evens first as the first index is zero in any str and then odds
           decrypt += evens[i]
         }
         if(odds[i] !== undefined){  //verify undefined answers aren't pushed into the final string
           decrypt += odds[i]
         }
       }
       
       str = decrypt // replace str for future iterations
     }
    
     return str  //return final str with all iterations completed
     
   }