// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!



function doubleChar(str) {
    let finalStr = ""
    for (let i=0; i <= str.length -1; i++){
      finalStr += `${str[i]}${str[i]}`
    }
    return finalStr
      
  }


  //Better solution 
//   const doubleChar = (str) => str.split("").map(c => c + c).join("");

// const doubleChar = str => str.split('').map(el => el + el).join('')



//WEIRD SOLUTION (look up)
// function doubleChar(str) {
//     return str.replace(/(.)/g, "$1$1")
//   }

//OR

// const doubleChar = str =>
//   str.replace(/./g, `$&$&`);