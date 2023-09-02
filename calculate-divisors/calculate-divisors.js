// Please do not change the name of this function
// while i < x if i%3 or i%5 ==0 add i
function calculateDivisors(num) {
  
  
  let total = 0
  
  for (let i =3; i<num; i++ ){
   
    if (i % 3 === 0 || i % 5 === 0) {
      total+=i
    }
  }
  return total
}

module.exports = calculateDivisors;