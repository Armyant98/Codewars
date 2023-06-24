function squareDigits(num){
    let arr = String(num).split('')
    arr.forEach((val, index) => arr[index] = val * val);
    return Number(arr.join(''))
  }