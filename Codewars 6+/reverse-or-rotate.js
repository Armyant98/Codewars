// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".


function revrot(str, sz) {
    // check if sz is <= 0 or if str in empty, return '' if true 
    // if sz is greater than str then return ''
    if (sz <= 0 || str.length === 0 || sz > str.length){
      return ''
    }
    
    //separate into chunks based on the sz variable
    let arr = str.split('')
    let chunks = []
    while (arr.length){
      chunks.push(arr.splice(0,sz))
    }
    
//  manipulate each chunk by determining if sum of cubes digits are divided by 2
    chunks = chunks.map(chunk => {
      //ignore chunk that is less than sz 
      if(chunk.length !== sz ){
        return null
      }
      let cubedTotal = 0
      for(let i=0; i< chunk.length; i++){
        cubedTotal += Math.pow(chunk[i],3)
      }// if true reverse chunk 
      if(cubedTotal % 2 === 0){
        return chunk.reverse().join('')
      }
      else{// if not slide to the left by one eg. "123456" gives "234561".
        let chunkLeft = new Array(chunk.length)
        chunk.forEach((num, i)=>{
          if(i === 0){
            chunkLeft[chunkLeft.length -1] = num
          }
          else{
            chunkLeft[i - 1] = num
          }
        })
        return chunkLeft.join('')
      }
    })
  
  return chunks.join('')
  
   
}
