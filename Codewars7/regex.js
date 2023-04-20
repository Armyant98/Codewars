// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false



//my ugly solution doing everything to avoid regex
function validatePIN (pin) {
    console.log()
    for(let i=0; i < pin.length; i++){
      let numCheck = Number(pin[i])
      if(numCheck !== numCheck ){
        return false
      }
    }
    
    if(pin.indexOf(' ') != -1){
      return false
    }
    
    if(pin.indexOf('\n') != -1){
      return false
    }
    
    if(pin.length != 4 && pin.length != 6){
          return false 
       }    
    
    
    return true
    
  }





function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)  //idk regex but heres the regex solution
  }                              