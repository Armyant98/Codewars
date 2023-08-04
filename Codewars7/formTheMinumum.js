function minValue(values){
    return Number(values.sort((a,b) => a - b).map(num => num.toString()).filter((num, i, self) =>{
      if(self.indexOf(num) === i){
        return num
      }
    }).join(''))
    
  }