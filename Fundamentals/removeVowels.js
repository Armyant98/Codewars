// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
// neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) { 
    let split = str.split('')
    let finalStr = []
    for (let i=0; i < split.length; i++){
      if ((split[i].toLowerCase() !== 'a') && (split[i].toLowerCase() !== 'e')  && (split[i].toLowerCase() !== 'i')  && (split[i].toLowerCase() !== 'o')  && (split[i].toLowerCase() !== 'u')){
        finalStr.push(split[i]) 
        }
    }
      
    finalStr = finalStr.join('')
    return finalStr
      
  }