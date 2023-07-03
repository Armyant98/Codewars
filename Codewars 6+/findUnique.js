
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55



function findUniq(arr) {
    let unique = arr.map((num,idx) =>{
        if(idx === arr.lastIndexOf(num) && idx === arr.indexOf(num)){
          return num
        }
      })
      .filter(num => num !== undefined)
      .join('')
    
    return Number(unique)
    
  }

  // see if num is the first and last of each and then return it















//better
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }