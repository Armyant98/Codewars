function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let word = string.split('')
    let total = 0
    word.forEach(letter =>{
      total += alphabet.indexOf(letter) + 1
    })
    
    return total
  }