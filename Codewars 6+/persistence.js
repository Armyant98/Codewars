// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
//  which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

let counter = 0 //counter , couldn't figure out how to get it to reset on recursion

function persistence(num) {
   
   if (num.toString().length === 1){ // convert to string since length is only a string property and does not work for integers
     return 0 // return 0 if the length of the num is single digit
   }
  else{
   
   let numDig = num.toString().split('') // split digits
   let product = numDig.reduce((product,digit) => product * digit, 1)  // reduce them starting at 1 because multiplication 
   if(product.toString().length > 1){ //check if result of multiplying digits is more than one digit
     counter += 1 //increase count 
     console.log(counter)
     return persistence(product) //recursion on the same function but with the product as 'num'
   }else{
     counter += 1 //still increase count by one
     let finalCount = counter // remove value from variable count so it can be reset to 0 for next iteration
     counter = 0 // reset 
     return finalCount // return the count aka the number of times it took to get it to one digit
   }
 }
}



//better solution

function persistence(num) {
    var times = 0; //counter
    
    num = num.toString(); //to string
    
    while (num.length > 1) { //while loop prevents the whole recursion need here 
      times++; // increase counter every time
      num = num.split('').map(Number).reduce((a, b) => a * b).toString(); //same as above but shorter, split, then map as a Number, reduce with multiplication and then return to string so that the length can be checked again by the while loop
    } //note: might work without map(Number) since JS might coerce it to a num but doesnt hurt to include
    
    return times; // return the counter
 }