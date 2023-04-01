// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
  }

//weird one

// function greet (name, owner) {
//     return `Hello ${name==owner?'boss':'guest'}`
//   }

//returns the ternary as a string literal so its just filling in that last word with the function