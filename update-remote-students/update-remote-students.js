// Please do not change the name of this function

// 1 create a shallow copy
// 2 create copy of shallow student


function updateRemoteStudents (arr) {
  // Your code here
  if (arr.length ===0){
    return []
  }

  const shallowArr = [...arr]
  const newArr = shallowArr.map((studentOriginal)=>{
    const student = {...studentOriginal}
    if (!student.location){
      student.location = "remote"
    }
    return student
  })

  return newArr
  
}

module.exports = updateRemoteStudents;
