// Please do not change the name of this function
function herdTheBabies (str) {
  const arr = str.split('')
  let newStr = ''
  const parents = [];
  const babies = [];
  arr.forEach((char)=>{
    if (char===char.toUpperCase()){
      parents.push(char)
    }else{
      babies.push(char)
    }
  })
  parents.sort()
  babies.sort()
  // assume that there are no babies without a parent
  const uniqueParents = [...new Set(parents)]
  
  uniqueParents.forEach((uniqueParent)=>{
    parents.forEach((parent)=>{
      if (parent === uniqueParent){
        newStr += parent
      }
    })
    babies.forEach((baby)=>{
      if (baby === uniqueParent.toLowerCase()){
        newStr += baby
      }
    })
  })

  return newStr
};

module.exports = herdTheBabies;
