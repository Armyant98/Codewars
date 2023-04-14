// Your goal in this kata is to implement a difference function, which 
// subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping 
// their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed
//  from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


  
    let finalArray = a.map(num =>{
      if(b.includes(num) === false){   
        return num       
      }
      
    })
    
    finalArray = finalArray.filter(num => num !== undefined)
    
    return finalArray
    
  }


  function arrayDiff(a, b) {
    let finalArray = a.filter(num =>{
      
      if(b.includes(num) !== true){
        return num !== undefined
      }
      
    })
    
    return finalArray
    
  }


  //Both use filter in the first I mapped first to avoid the issue of 0
  // being ignored by filter beacause it is a falsy value in JS
  //nested the check if it is not undefined within it and it worked??




  //shorter solutions 

  function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
  }

  // uses index of to determine if it exists with -1 returning if it doesnt
  // so basiclly same as checking if it doesnt without the nonsense of filter



  function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

  //much shorter filter 