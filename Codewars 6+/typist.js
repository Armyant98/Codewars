function typist(s){
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let total = 0
    let string = s.split('')
    
    string.forEach((letter,i) => {
      if(i === 0 && uppercase.indexOf(letter) > -1){
        total += 2
      }
      else if(uppercase.indexOf(s[i-1]) > -1 && uppercase.indexOf(letter) > -1 ){ //upper + upper = 1
        total ++
      }
      else if (uppercase.indexOf(s[i-1]) === -1 && uppercase.indexOf(letter) === -1 ){ //lower + lower = 1
        total ++
      }
      else {
        total += 2
      }
    })
    
    return total
  }