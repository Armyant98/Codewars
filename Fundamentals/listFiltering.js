// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    return l.filter(e => typeof e === 'number')
  }


  let alphabet = 'abcdefghijklmnopqrstuvwzyz'
  let legend = []
  for(let i=0; i<4; i++){
    if(i<2){
      legend.push(alphabet.split(''))
    }else {
      let arr = alphabet.split('')
      arr = arr.map(letter => letter.toUpperCase())
      legend.push(arr)
    }
    
  }
  
  legend = legend.flat(legend)
  message = message.arr
                  
  console.log(legend)