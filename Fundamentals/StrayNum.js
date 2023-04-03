// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
    let sort = numbers.sort((a,b) => a - b)
    if(sort[0] !== sort[1]){
      return sort[0]
    }
    else {
      return sort[numbers.length - 1]
    }
      
  }


  //my solutoin sorts nums first which means that the num that doesnt fit will either be in front or end 
  // check for front of array if not then we know it is at the end




  //const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

  //this solution only returns when the finding of num is the same as the last index of it
  // last index searches back to front so if this is the case then if it is the repeated number the indexes where they are found
  //will not be the same front to back as back to front

  //when they are the same its beacause they are the same num, aka in same spot forward or backwards