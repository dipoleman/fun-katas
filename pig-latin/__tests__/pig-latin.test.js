const pigLatin = require("../pig-latin")

describe("Pig Latin",()=>{
    test("function should return a string",()=>{
        const input = "test"
        const output = pigLatin(input)
        expect(typeof output).toBe("string")
    })
    test("input an empty string, expect empty string back",()=>{
        const input = ""
        const output = pigLatin(input)
        expect(output).toBe("")
    })
    test("single word starting with consonant converts to pigLatin",()=>{
        const input = "northcoders"
        const output = pigLatin(input)
        const expected = 'orthcodersnay'
        expect(output).toBe(expected)
    })
    test("single word starting with vowel converts to pigLatin",()=>{
        const input = "algorithm"
        const output = pigLatin(input)
        const expected = 'algorithmway'
        expect(output).toBe(expected)
    })
    test("input a mixed sentence",()=>{
        const input = "keep on coding"
        const output = pigLatin(input)
        const expected = 'eepkay onway odingcay'
        expect(output).toBe(expected)
    })
})