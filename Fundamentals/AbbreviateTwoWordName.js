// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    const splitName = name.split(' ')
    const firstName = splitName[0]
    const lastName = splitName[1]
    
    return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`
     
  
  }

//   better solutions?

// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }

//chaining literal selectors...cool!


//Anotha one

// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }

//split by space and then map loops through and then i is each item with the first of it, always two in this case and then joined with a . in between