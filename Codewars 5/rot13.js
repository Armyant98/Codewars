// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from
//  the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


function rot13(message){
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let arr = []
    for(let i=0; i < message.length; i++){ //convert to unicode value
      if(alphabet.includes(message[i])){
        arr.push(message.charCodeAt(i))
      }else {
        arr.push(message[i])
      }
    }
   console.log(arr)
    
    arr = arr.map(letter =>{ //reset num to A when adding 13 surpasses alphabet range for unicode value
      if (letter >= 65 && letter + 13 > 90 && letter <= 90){
        let lettersfromA = 13-(90 - letter)
        return 64 + lettersfromA
      }else if (letter >= 97 && letter + 13 > 122 && letter <= 122){
        let lettersfromA = 13 - (122 - letter)
        return 96 + lettersfromA
      }else if (letter <= 90 && letter >= 65){
        return letter + 13
      }else if (letter >= 97 && letter <= 122){
        return letter + 13
      }else{
        return letter
      }
    })
    
    
     console.log(arr)
    
    arr = arr.map(letter =>{
      if(letter > 64){
         return String.fromCharCode(letter) //turn back to str
      }
      else{
        return letter
      }
    })
    
    return arr.join('')
    
  }