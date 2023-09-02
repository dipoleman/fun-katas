const morseCode = require("../morse-code")

describe("morse code",()=>{
    test("function returns a string",()=>{
       const input = ''
       const output = morseCode(input,false)
       expect(typeof output).toBe('string')
    })
    test("input an empty string, expect empty string back",()=>{
        const input = ""
        const output = morseCode(input,false)
        expect(output).toBe("")
    })
    test("check for a single morse code word => word",()=>{
        const input = ".... ..";
        const output = morseCode(input,false)
        const expected = "HI"
        expect(output).toBe(expected)
    })
    test("check for a morse code sentence => sentence",()=>{
        const input = "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
        const output = morseCode(input,false)
        const expected = "GOOD MORNING NORTHCODERS"
        expect(output).toBe(expected)
    })
    test("check for a sentence => morse code sentence",()=>{
        const input = "GOOD MORNING NORTHCODERS"
        const output = morseCode(input,true)
        const expected = "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
        expect(output).toBe(expected)
    })
})