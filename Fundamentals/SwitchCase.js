// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.


function switchItUp(number){
    //Write your own Code!
       switch (number){
           case 0: return 'Zero'
           case 1: return ('One')
           case 2: return ('Two')
           case 3: return ('Three')
           case 4: return ('Four')
           case 5: return ('Five')
           case 6: return ('Six')
           case 7: return ('Seven')
           case 8: return ('Eight')
           case 9: return ('Nine')
       }
    }


    switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
    //uses the index to allow access to the certain part of the array and returns that implicitly because it is an arrow function