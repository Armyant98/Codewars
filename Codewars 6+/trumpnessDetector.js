function trumpDetector(trumpySpeech){
    const vowels = 'aeiou' //key of vowels 
    let base = 0 //log the base vowels
    let repititions = 0 //log the number of times that it will repeat
    let repeatLetters= [] //log the letters the repeat
    trumpySpeech.split('').forEach((letter, i)=> {
       letter = letter.toLowerCase()
       if(vowels.indexOf(letter) !== -1){ //if it is a vowel
        if(i === 0 ||letter !== trumpySpeech[i-1].toLowerCase()){
          base += 1
        }else if(letter === trumpySpeech[i-1].toLowerCase()){
          repititions += 1
          repeatLetters.push(letter)
        }
       }
    })
    
    return Math.round((repititions/base) * 100) / 100
    
  }