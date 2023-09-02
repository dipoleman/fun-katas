// Please do not change the name of this function
function changeCalculator (num) {
  // Your code here
  if (num ===0){
    return {}
  }
  let total = num
  const money = [5000,2000,1000,500,200,100,50,20,10,5,2,1]
  const change = {}
  
  money.forEach((coin)=>{
    // console.log(coin,' <<<<< coin')
    let coins = Math.floor(total/coin) 
    // console.log(coins,' <<<<< coins')
    if (coins>0){
      change[`${coin}`] = coins
      // console.log(change)
      total-= coins*coin
      // console.log(total,'<<<<<< total left')
    }
  })

  return change
  


};

module.exports = changeCalculator;
