// Please do not change the name of this function
function sentenceToCamelCase (sentence,camelBoolean) {
  if (sentence === ''){
    return ''
  }
  const words = sentence.split(' ');
  let camelCase = '';
  if (words.length>1){
      
    if (!camelBoolean){
      let firstWord = words.shift()
      camelCase = firstWord.slice(0,1).toLowerCase() + firstWord.slice(1);
    }
    words.forEach(word => {
    camelCase+=word.slice(0,1).toUpperCase() + word.slice(1);
    })
      
    return camelCase 
  }

  const capitalIndex =[1]
  let counter = 0
  camelCase = sentence[0].toUpperCase()
  for (let i=1; i<sentence.length; i++){
    if (sentence[i]===sentence[i].toUpperCase()){
      capitalIndex.push(i)
      camelCase += sentence.slice(capitalIndex[counter],capitalIndex[counter]+1).toLowerCase()
      camelCase += sentence.slice(capitalIndex[counter]+1,capitalIndex[counter+1]) + ' '
      counter++
    }
  }
  camelCase+=sentence.slice(capitalIndex[counter],capitalIndex[counter]+1).toLowerCase()
  camelCase+=sentence.slice(capitalIndex[counter]+1,capitalIndex[counter+1]) + '.'
  return camelCase
  
};

module.exports = sentenceToCamelCase;

// The function takes two arguments; the sentence, and a boolean, true if UpperCamelCase is to be returned and false if lowerCamelCase is to be returned.

// Examples
// You can use these examples to start building up your test suite:

// sentenceToCamelCase("this sentence", true);
// // should return "ThisSentence"
// sentenceToCamelCase("this sentence", false);
// // should return "thisSentence"
// sentenceToCamelCase("This Bigger strange Sentence", true);
// // should return "ThisBiggerStrangeSentence"
// For a further challenge extend your current function or implement another in the same file which takes CamelCase and returns it as a plain english sentence (ending in a full stop).

// camelToEnglish("thisBiggerStrangeSentence");
// // should return "This bigger strange sentence."