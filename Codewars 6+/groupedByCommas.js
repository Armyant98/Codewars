function groupByCommas(n) {
    let num = String(n).split('').reverse()
    for(let i=3; i < num.length; i+= 4 ){
      num.splice(i,0,',')
    }
     
    return num.reverse().join('')
  }