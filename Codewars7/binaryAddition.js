// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


addBinary = (a,b) => (a+b).toString(2)


//to string has a property known as radix, which allows the base changes for num to string. Converts this num to a string at the base of 2 aka binary
//make sure that parenthesis before to string as it will not evaluate the a+b it will add a to the b.toString(2)