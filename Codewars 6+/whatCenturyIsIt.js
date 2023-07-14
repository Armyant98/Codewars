function whatCentury(year){
    let century = String(Math.ceil(year / 100))
    console.log(century)
    if(Number(century) > 9 && Number(century) < 20){
      return String(century) + 'th'
    }
    if(century[century.length -1] == 1 ){
      return String(century) + 'st'
    }
    else if(century[century.length -1] == 2 ){
      return String(century) + 'nd'
    }
    else if(century[century.length -1] == 3 ){
      return String(century) + 'rd'
    }
   else {
     return String(century) + 'th'
     return (century[century.length -1])
   }
 }