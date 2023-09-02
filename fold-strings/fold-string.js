// Please do not change the name of this function
function foldString (str) {

  const arr = str.split(' ')
  let newStr = ""
  
 for (let i=0; i<arr.length; i++){
  const word = arr[i]
console.log(reverse(word))
    let wordLength = word.length
    if (wordLength % 2 === 0){  
      newStr += reverse(word.slice(0,wordLength/2))
      newStr += reverse(word.slice(wordLength/2)) 
    }else{
      newStr += reverse(word.slice(0,(wordLength-1)/2))
      newStr += word.slice((wordLength-1)/2,(wordLength-1)/2 +1)
      newStr += reverse(word.slice((wordLength-1)/2 +1)) 
    }
    if (i !== arr.length-1){
      newStr += " "
    }
  }
  
  function reverse (str){
    let revString = ''
    for (let i=str.length-1; i>=0; i--){
      revString += str[i]
    }
    return revString
  }

  return newStr
};

module.exports = foldString


// foldString("code");
// // should return  'oced'
// foldString("abcdef");
// // should return  'cbafed';
// foldString("javascript");
// // should return  'savajtpirc'
// foldString("Northcoders");
// // should return 'htroNcsredo'
// foldString("javascript is cool");
// // should return  'savajtpirc is oclo'