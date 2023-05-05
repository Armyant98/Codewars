// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let finalReverse = []  //array for final words to be joined reversed
  
  let arr = str.split(' ') //split by space
  for(let i=0; i< arr.length; i++){ //increment through array
      let word = arr[i].split('').reverse().join('') //reverse each word 
      finalReverse.push(word) //push reversed word to finalReverse
    } 
 return finalReverse.join(' ') //join all the reversed words
 
}


function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

//same concept but loops through with map instead with the action embedded in the map function