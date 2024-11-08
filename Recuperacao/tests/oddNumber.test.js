const filterOddNumbers = require("../src/functions/oddNumberFilter")

test("Validação de números ímpares", ()=>{
     expect(filterOddNumbers(1,2,3,4)).toBe(1, 3)
})