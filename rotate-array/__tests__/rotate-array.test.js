const rotateArray = require("../rotate-array")

describe("rotate array",()=>{
    test("should return an array",()=>{
        const input = [];
        const output = rotateArray(input)
        expect(Array.isArray(output)).toBe(true)
    })
    test("should return an empty array if passed an empty array",()=>{
        const input = [];
        const output = rotateArray(input)
        const expected = []
        expect(output).toEqual(expected)
    })
    test("If the number is zero return the array unchanged",()=>{
        const input = [1,2,3];
        const output = rotateArray(input,0)
        const expected = [1,2,3]
        expect(output).toEqual(expected)
    })
    test("If the number is positive return the array rotated x times to the right",()=>{
        const input = [1,2,3];
        const output = rotateArray(input,1)
        const expected = [3,1,2]
        expect(output).toEqual(expected)
        const input2 = [1, 2, 3, 4, 5];
        const output2 = rotateArray(input2, 3)
        const expected2 = [3, 4, 5, 1, 2]
        expect(output2).toEqual(expected2)
    })
    test("If the number is negative return the array rotated x times to the left",()=>{
        const input = [1,2,3];
        const output = rotateArray(input,-1)
        const expected = [2,3,1]
        expect(output).toEqual(expected)
        const input2 = [1, 2, 3, 4, 5];
        const output2 = rotateArray(input2, -3)
        const expected2 = [4, 5, 1, 2, 3]
        expect(output2).toEqual(expected2)
    })

})