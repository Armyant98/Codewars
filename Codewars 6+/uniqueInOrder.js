// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with 
// the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    if(typeof iterable === 'string'){
      let arr = iterable.split('').filter((letter,index) =>{
        if(iterable[index-1] !== letter && iterable[index-1] !== letter){
          return letter
        }
      }) 
      return arr
    }else{
      let arr = iterable.filter((letter,index) =>{
        if(iterable[index-1] !== letter && iterable[index-1] !== letter){
          return letter
        }
      }) 
      return arr
    }
  }
  
  
  //+ and -1 of the one being looped through to see if its in a row current soltution removes ALL duplicates but theyre fine as long as
  //they are not in a row

  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }