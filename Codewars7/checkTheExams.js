function checkExam(array1, array2) {
    let score = 0
    array1.forEach((ans,i) =>{
      if(ans === array2[i] ){
        score += 4
      }else if(array2[i] === ''){
        score += 0
      }else {
       score -= 1
      }
    })
     
    return score < 0 ? 0 : score
   }