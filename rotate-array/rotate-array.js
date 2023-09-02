// Please do not change the name of this function
function rotateArray (arr, num) {
  const rotatedArray = [...arr]
  const arrLength = arr.length
  const positiveRotate = (num + arrLength) % arrLength
  for (let i =0; i<arrLength; i++){
    rotatedArray[(i+positiveRotate) % arrLength] = arr[i]
  }
  return rotatedArray
};

module.exports =  rotateArray;


