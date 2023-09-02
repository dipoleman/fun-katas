// Please do not change the name of this function
function dnaPairs(dna) {

  const dnaResult =[]

  // if (dna ===''){
  //   return []
  // }

  const dnaLookUp ={"A":"T","T":"A","G":"C","C":"G"}

  for (let char of dna) {
    dnaResult.push([char,dnaLookUp[char]])
  }
  
  return dnaResult
}

module.exports = dnaPairs;
