const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('empty input string returns empty array', () => {
    const input = '';
    const result = dnaPairs(input);
    const expected = [];
    expect(result).toEqual(expected)
  });
  test("check one input and result",()=>{
    const input = "G";
    const result = dnaPairs(input);
    const expected = [ ["G", "C"] ];
    expect(result).toEqual(expected)
  })
  test("multiple bases",()=>{
    const input = "ATAG";
    const result = dnaPairs(input);
    const expected = [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ];
    expect(result).toEqual(expected)

  })
});
