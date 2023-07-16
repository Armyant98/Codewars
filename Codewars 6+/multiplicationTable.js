multiplicationTable = function(size) {
    let firstRow = [] //maintain as first row to serve as base to add to each next layer
    for(let i=1; i <= size; i++){ //creates first row of initial size
      firstRow.push(i)
    }
    
    //push first row as its own arr and then add same num to num for other rows and 
    //push as their own arr as well
    let table = []
    let lastRow = firstRow //start as first row but redfine
    for(let i= 0; i < firstRow.length; i++ ){
      if(i == 0){  //first iteration push first row 
        table.push(firstRow)
      }else{ //mutate and create another arr to push 
        lastRow = (lastRow.map((num, i) => num + firstRow[i])) //redifine last row each iteration
        table.push(lastRow)
      }
    }
    
    return table
    
  }
  
  
  //123
  //2 //add the top row num to the next row num for the next in sequence
  //3