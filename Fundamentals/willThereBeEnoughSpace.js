// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus,
//  he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


function enough(cap, on, wait) {
    // your code here
    let roomOnBus = cap - on - wait
    if ( roomOnBus> 0) {
      return unableToBoard = 0
    }else{
      return Math.abs(unableToBoard)
    }
    
  }

  //roomOnBus is equal to what is left over from cap to the ppl on and the ones waiting
  // if the number of ppl left after is above 0 then we return 0 so that way we know that there is still room left on the bus and therefore the leftover ppl is 0 
  // in any other situation we will return the absolute value of the negative result that will come from the subtraction as that will be the only way to show if ppl waiting 
  //over exceeds the ppl it can hold but since a positive is desired such as "6 ppl cant fit" we have to get the absolute value

//   function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0);
//   }

//Other solution returns the max between the difference of wait + on - cap vs the number 0 
//addition allows it so that there never is the situation of negative that needs to be switched with Math.abs the only negatives will be filtered out by Math.max to return 0 anyway
