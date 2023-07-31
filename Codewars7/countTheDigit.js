function nbDig(n, d) {
    let squares = []
    for(let i=0; i <= n ; i++){
      squares.push(i*i)
    }
    
    let count = 0
    squares.forEach(num => String(num).split('').forEach(digit => digit === String(d) ? count++ : count += 0   ) )
    
    return count
    
  }