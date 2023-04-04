// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 
// is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be
//  unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be 
//  either too!


//first attempt didnt work with negatives etc

function firstNonConsecutive (arr) {
    //since they both start at one we just compare i to the index of i-1 to start at the first 
    //one once it doesnt match we return
    for (i=1; i <= arr.length; i++){ 
      if (arr[i-1] !== i){
        return arr[i-1]
      }
    }
    return null 
    //returns null as a default as in when the for loop doesnt catch one that doesnt match/ as out of place
  }



//CORRECT ATTEMPT

function firstNonConsecutive (arr) {
    let counter = arr[0] //using a counter instead to start wherever the array begins worked much better
    for(i=0; i < arr.length; i++){// for loop through each element
      if(counter !== arr[i]){ // check if it lines up with counter value which should be where it starts
        return arr[i]         // return one that doesnt line up
      }
    
      counter++ //increment counter by 1 since it should be consecutive to then use that to check again
    }
    
    return null  // if nothing is returned up there then that means it passed the test and is consecutive, return null
  }



  //other answer 

  function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {  
        return arr[i + 1]
      }
    }
    return null
  }

  //if first num + 1 doesnt equal to the second num then it aint consecutive is it?  arr[i] + 1 is first num + 1, 
  //arr[i+1] is just the next num in the array. if its consecutive they should be the same