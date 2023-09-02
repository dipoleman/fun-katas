const foldString = require("../fold-string")

describe("fold string",()=>{
    test("returns a string",()=>{
        const input = '';
        const output = foldString(input);
        expect(typeof output).toBe("string")
    })
    test("returns a string of the same length",()=>{
        const input = 'a string with spaces';
        const output = foldString(input).length;
        expect(output).toBe(input.length)
    })
    test("returns a single char if passed a single char",()=>{
        const input = 'z';
        const output = foldString(input);
        expect(output).toBe("z")
    })
    test("returns a 2 char word unchanged",()=>{
        const input = 'oh';
        const output = foldString(input);
        expect(output).toBe("oh")
    })
    test("returns a 3 char word unchanged",()=>{
        const input = 'zip';
        const output = foldString(input);
        expect(output).toBe("zip")
    })
    test("turns a single word inside out",()=>{
        const input = 'abcdef';
        const output = foldString(input);
        expect(output).toBe("cbafed")
    })
    test("turns a whole sentence inside out",()=>{
        const input = 'turns a whole sentence inside out';
        const output = foldString(input);
        expect(output).toBe("utrsn a hwoel tnesecne sniedi out")
    })


})