// Please do not change the name of this function
function tillAddition (cash) {
  // Your code here
  
  if (Object.keys(cash).length === 0) {
    return "£0.00"
  }

  const cashString ={
    "1p": 1,
    "2p": 2,
    "5p": 5,
    "10p": 10,
    "20p": 20,
    "50p": 50,
    "£1": 100,
    "£2": 200,
    "£5": 500,
    "£10": 1000,
    "£20": 2000,
    "£50": 5000
  }

  let total = 0
  for (key in cash){
    total+=cashString[key]*cash[key]
  }

  //console.log(total)
  let strTotal = `£${total/100}`
  // console.log(strTotal)

  return strTotal

};

module.exports = tillAddition;
