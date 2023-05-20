// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
  
    let www = 'www.'
    let http = 'http://'
    let https = 'https://'
    let str = url
    
    if (str.indexOf(www) != -1){
      let start = str.indexOf(www)
      str = str.slice(start + 4)
    }
    
    if (str.indexOf(http) != -1){
      let start = str.indexOf(http)
      str = str.slice(start + 7)
    }
    
    if (str.indexOf(https) != -1){
      let start = str.indexOf(https)
      str = str.slice(start + 8)
    }
    
    let end = str.indexOf('.')
    
    
    
    
    return str.slice(0, end)
  }

//better
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };