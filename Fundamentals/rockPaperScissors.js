const rps = (p1, p2) => {
    let win = 'Player 1 won!'
    if(p1 === 'scissors' && p2 === 'paper'){
      return win
    }
    else if (p1 === 'paper' && p2 === 'rock') {
      return win
    }
    else if (p1 === 'rock' && p2 === 'scissors'){
      return win
    }
    else if (p1 === p2){
      return 'Draw!'
    }
    else {
      return 'Player 2 won!'
    }
  };