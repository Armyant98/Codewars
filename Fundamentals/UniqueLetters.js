// Take 2 strings s1 and s2 including only letters from a to z. Return a 
// new sorted string, the longest possible, containing distinct letters - each 
// taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join('');
    }



//Set is for unique data sets thus eliminating the duplicate letters 
//... passes each letter in individually