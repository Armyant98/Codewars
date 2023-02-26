// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

const removeEveryOther = (arr) => arr.map((item,index) => index % 2 === 0 ? item : false).filter(Boolean)

//map returns an array and iterates over every element, the 1st parameter and 2nd are always item/index and I used the index to divide by 2 so that we keep every other element
// we then return the item if condition is met or false if not
//that is the filtered by the boolean object to remove the false returns from the returned array


// const removeEveryOther = arr => arr.filter((_, idx) => idx % 2 == 0)

// Other option where we use filter to filter based on the condition of the index being able to be divided by 2.
