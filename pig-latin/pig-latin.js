// Please do not change the name of this function
function pigLatin(str) {
  if (str === ''){
    return ""
  }
  const myRegex = /^[aeiou]/i

  const pigStrings = str.split(' ').map((word)=>{
    console.log('string =',word,'<<<<<')

    if (myRegex.test(word)){
      return word + "way"
    }else{
      return word.slice(1) + word.slice(0,1) + "ay"
    }
  })
  console.log(pigStrings)
  console.log(pigStrings.join(' '))
  return  pigStrings.join(' ')
};

module.exports = pigLatin
