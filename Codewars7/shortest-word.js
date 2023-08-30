function findShort(s){
  
    return s.split(' ').map(word => word.length).sort((a,b) => a-b)[0]
    
  }
  
  //Parameters
  // Sentence with no other data types 
  
  //Return
  //length of the shortest word
  
  //Examples
  // "bitcoin take over the world maybe who knows perhaps"), 3
  
  //Psuedocode
  
  //split sentence to each word
  //get length of each word
  //return the smallest number