const herdTheBabies = require("../herd-the-babies")

describe("herd the babies",()=>{
    test("function returns a string",()=>{
        const input = ''
        const output = herdTheBabies(input,false)
        expect(typeof output).toBe('string')
     })
     test("input an empty string, expect empty string back",()=>{
         const input = ""
         const output = herdTheBabies(input,false)
         expect(output).toBe("")
     })
     test("simple input aA should return Aa",()=>{
        const input = 'aA'
        const output = herdTheBabies(input)
        const expected = 'Aa'
        expect(output).toBe(expected)
        const input2 = 'aBA'
        const output2 = herdTheBabies(input2)
        const expected2 = 'AaB'
        expect(output2).toBe(expected2)
     })
     test("complex input test",()=>{
        const input = "bbaBccAC"
        const output = herdTheBabies(input)
        const expected = 'AaBbbCcc'
        expect(output).toBe(expected)
        const input2 = "AaBbbBaAbAbbAbB"
        const output2 = herdTheBabies(input2)
        const expected2 = 'AAAAaaBBBbbbbbb'
        expect(output2).toBe(expected2)
     })
})