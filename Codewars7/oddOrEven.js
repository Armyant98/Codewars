function oddOrEven(array) {
    console.log(array)
     return array.reduce((a,c) => a + c, 0) % 2 === 0 ? 'even' : 'odd'
  }