const updateRemoteStudents = require("../update-remote-students")

describe("Add remote location to students without location key",()=>{
    test("empty array returns empty array",()=>{
        const input = [];
        const result = updateRemoteStudents(input);
        const expected = [];
        expect(result).toEqual(expected);
    })
    test("Check it adds remote location when no location given",()=>{
        const input = [{ name: 'Euler', age: 27 }];
        const result = updateRemoteStudents(input);
        const expected = [{ name: 'Euler', age: 27, location: 'remote' }];
        expect(result).toEqual(expected);
    })
    test("check multiple students",()=>{
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        const result = updateRemoteStudents(input);
        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        expect(result).toEqual(expected);
    })
    test("check its a new array",()=>{
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22,location: 'preston'},
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        const result = updateRemoteStudents(input);
        expect(result).not.toBe(input); 
    })
    test('check it dose not mutate the original array',()=>{
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        updateRemoteStudents(input)
        const expected =  [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        expect(input).toEqual(expected)
    } )
})