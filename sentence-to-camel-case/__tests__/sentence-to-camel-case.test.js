const sentenceToCamelCase = require("../sentence-to-camel-case")

describe("sentence to camel case",()=>{
    test("function should return empty string if passed an empty string",()=>{
        // arrange
        const input = ''
        // act 
        const output = sentenceToCamelCase(input)
        //assert
        expect(output).toBe('')
    })
    test("function should return empty string if passed an empty string with either true or false as second argument",()=>{
        // arrange
        const inputString = ''
        // act 
        const outputTrue = sentenceToCamelCase(inputString,true)
        const outputFalse = sentenceToCamelCase(inputString,false)
        //assert
        expect(outputTrue).toBe('')
        expect(outputFalse).toBe('')
    })
    test("see if the function works for CamelCase true",()=>{
        const input1 = "this sentence"
        const output1 = sentenceToCamelCase(input1,true)
        const expected1 = "ThisSentence"
        expect(output1).toBe(expected1)
        const input2 = "This Bigger strange Sentence"
        const output2 = sentenceToCamelCase(input2,true)
        const expected2 = "ThisBiggerStrangeSentence"
        expect(output2).toBe(expected2)

    })
    test("see if the function works for camelCase false",()=>{
        const input = "this sentence"
        const output = sentenceToCamelCase(input,false)
        const expected = "thisSentence"
        expect(output).toBe(expected)
    })
    test("camelCase to a sentence",()=>{
        const input = "thisBiggerStrangeSentence";
        const output = sentenceToCamelCase(input)
        const expected = "This bigger strange sentence."
        expect(output).toBe(expected)
        const input2 = "HowDoYouThinkThisWillLookWhenChangedIntoASentence";
        const output2 = sentenceToCamelCase(input2)
        const expected2 = "How do you think this will look when changed into a sentence."
        expect(output2).toBe(expected2)
    })
})