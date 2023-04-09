// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


//mine 
function descendingOrder(n){
    let numbers = n
    numbers = numbers.toString() //convert to string to be split 
    numbers = numbers.split('') // split it 
    numbers.sort((a, b) => b - a) // sort it descending order 
    numbers = numbers.join('')  // join it back
    return Number(numbers) // convert it to a number and return 
    
  }



//shorter version
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

  //sort with no function will sort lexicographically and that works for single digits like in this
  // then we reverse it since by default will sort it in ascending order
  // rejoin
  // all wrapped in parse int so that it can return a number instead of a string that you just split and joined