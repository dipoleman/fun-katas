const tillAddition = require("../till-addition")

describe("Add up the till",()=>{
    test("empty object returns '£0.00' ",()=>{
        const input = {};
        const result = tillAddition(input)
        expect(result).toBe("£0.00")
    })
    test("simple case first",()=>{
        const input = { "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 }
        const result = tillAddition(input)
        expect(result).toBe("£0.38")
    })
    test("simple case first",()=>{
        const input = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 ,"£50":2}
        const result = tillAddition(input)
        expect(result).toBe("£101.85")
    })
    test("check we dont mutate the input array",()=>{
        const input = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 ,"£50":2}
        tillAddition(input)
        expected = { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 ,"£50":2}
        expect(input).toEqual(expected)
    })

})