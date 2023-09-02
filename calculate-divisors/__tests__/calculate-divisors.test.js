const calculateDivisors = require("../calculate-divisors")

describe("add up divisors of 3 and 5",()=>{
    test("numbers 0 should return 0",()=>{
        let input = 0
        let result = calculateDivisors(input)
        let expected = 0
        expect(result).toBe(expected)

    })
    test("numbers 3 should return 0",()=>{
        let input = 3
        let result = calculateDivisors(input)
        let expected = 0
        expect(result).toBe(expected)

    })
    test("test number 12",()=>{
        let input = 12
        let result = calculateDivisors(input)
        let expected = 33
        expect(result).toBe(expected)

    })
})