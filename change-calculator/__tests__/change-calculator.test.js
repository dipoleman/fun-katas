const changeCalculator = require("../change-calculator")

describe("Change calculator",()=>{
    test("zero change returns empty object",()=>{
        let input = 0;
        const result = changeCalculator(input)
        const  expected = {}
        expect(result).toEqual(expected)
    })
    test("check for correct answer",()=>{
        let input = 13;
        const result = changeCalculator(input)
        const  expected = {'10':1,'2':1,'1':1}
        expect(result).toEqual(expected)
    })
    test("check for correct answer",()=>{
        let input = 146733;
        const result = changeCalculator(input)
        const  expected = {'5000':29,'1000':1,'500':1,'200':1,'20':1,'10':1,'2':1,'1':1}
        expect(result).toEqual(expected)
    })
})