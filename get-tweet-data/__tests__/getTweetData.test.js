const getTweetData = require("../get-tweet-data")

describe("collect tweet data",()=>{
    test("empty tweet returns empty structure",()=>{
        const input = '';
        const result = getTweetData(input);
        const expected = { 
            tags: [], 
            mentions: [], 
            tagCount: 0, 
            mentionCount: 0, 
            length: 0 }
        expect(result).toEqual(expected)
    })
    test("length of tweet",()=>{
        const input = "My awesome tweet";
        const result = getTweetData(input);
        const expected = { 
            tags: [], 
            mentions: [], 
            tagCount: 0, 
            mentionCount: 0, 
            length: 16 }
        expect(result).toEqual(expected)
    })
    test("1 mention",()=>{
        const input = "My awesome tweet to @northcoders";
        const result = getTweetData(input);
        const expected = { 
            tags: [], 
            mentions: ['@northcoders'], 
            tagCount: 0, 
            mentionCount: 1, 
            length: 32 }
        expect(result).toEqual(expected)

    })
    test("2 mentions",()=>{
        const input = "My awesome tweet to @northcoders and @iDontTweet";
        const result = getTweetData(input);
        const expected = { 
            tags: [], 
            mentions: ['@northcoders','@iDontTweet'], 
            tagCount: 0, 
            mentionCount: 2, 
            length: 48 }
        expect(result).toEqual(expected)

    })
    test("dont duplicate mentions",()=>{
        const input = "My awesome tweet to @northcoders and @northcoders";
        const result = getTweetData(input);
        const expected = { 
            tags: [], 
            mentions: ['@northcoders'], 
            tagCount: 0, 
            mentionCount: 1, 
            length: 49 }
        expect(result).toEqual(expected)

    })
    test("1 tag",()=>{
        const input = "My awesome tweet about #coding";
        const result = getTweetData(input);
        const expected = { 
            tags: ['#coding'], 
            mentions: [], 
            tagCount: 1, 
            mentionCount: 0, 
            length: 30 }
        expect(result).toEqual(expected)
    })
    test("2 tags",()=>{
        const input = "My awesome tweet about #coding and #happy";
        const result = getTweetData(input);
        const expected = { 
            tags: ['#coding', '#happy' ], 
            mentions: [], 
            tagCount: 2, 
            mentionCount: 0, 
            length: 41 }
        expect(result).toEqual(expected)

    })
    test("dont duplicate tags",()=>{
        const input = "My awesome tweet about #coding and #coding";
        const result = getTweetData(input);
        const expected = { 
            tags: ['#coding'], 
            mentions: [], 
            tagCount: 1, 
            mentionCount: 0, 
            length: 42 }
        expect(result).toEqual(expected)

    })
    test("full tweet with tags and mentions",()=>{
        const input = "I am #coding with @northcoders I love #coding and @northcoders";
        const result = getTweetData(input);
        const expected = { 
            tags: ['#coding'],
             mentions: ['@northcoders'], 
             tagCount: 1, 
             mentionCount: 1,
            length: 62 }
        expect(result).toEqual(expected)

    })

})