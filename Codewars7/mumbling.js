// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let finalString = []
      let arr = s.split('').map((letter,index) =>{  
      for(let  i=0; i <= index; i++){
        if(i===0){
          finalString.push(letter.toUpperCase())
        }else if (i>0){
          finalString.push(letter.toLowerCase())
        }
      }
      if(index < s.length - 1){
        finalString.push('-')
      }
        
    })
    
    return finalString.join('')
    
  }