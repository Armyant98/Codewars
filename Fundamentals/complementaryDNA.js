// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells
//  and carries the "instructions" for the development and functioning of living 
//  organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); you need 
// to return the other complementary side. DNA strand is never empty or there is no
//  DNA at all (again, except for Haskell).

// More similar exercise are found here: 
// http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function DNAStrand(dna){
    let complimentaryStrand = ''
    for(let i=0; i < dna.length; i++){
      if (dna[i] === 'A'){
        complimentaryStrand += 'T'
      } else if (dna[i] === 'C'){
        complimentaryStrand += 'G'
      }  else if (dna[i] === 'T'){
        complimentaryStrand += 'A'
      }  else if (dna[i] === 'G'){
        complimentaryStrand += 'C'
      } 
    }
    
    return complimentaryStrand
  }


  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

// refrences the obejct created and returns the letter that is the value based on the Key
// which is being passed as v and thus returning the correct letter back as it is paired 
// in the object.