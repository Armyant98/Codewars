// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
    ending = ending.split('').reverse().join('')
    let strEnding = str.split('').reverse().slice(0 , ending.length).join('')
   
     if (ending === strEnding){
       return true
     }
     
     return false
   }








function solution(str, ending){
    return str.endsWith(ending);
  }




const solution = (str, ending) => str.endsWith(ending);