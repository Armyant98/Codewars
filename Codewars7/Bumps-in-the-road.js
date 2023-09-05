function bump(x){
    let bumps = x.split('').filter(char => char === 'n').length
    if(bumps <= 15){
      return 'Woohoo!'
    }else{
      return 'Car Dead'
    }
  }
  
  //Parameters
  // string consisting of _ or n denoting either a flat road or bump
  //Return 
  // wohoo or car dead depending on if there are 15 or less bumps(n)
  //Examples 
  // assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
  // assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
  
  
  //Psuedocode
  
  //split and loop through each character 
  //check if _ or n
  //count number of n
  //return wohoo if <= 15 if not return Car Dead
  