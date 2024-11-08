const classifyAge = require('../src/functions/classifyCheker')

test("Validação de idade de 0 a 12", ()=>{
     expect(classifyAge(8)).toBeLessThanOrEqual(12)
})

test("Validação de idade de 13 a 17", ()=>{
     expect(classifyAge(16)).toBeGreaterThanOrEqual(13)
})

test("Validação de idade de 18 a 64", ()=>{
     expect(classifyAge(19)).toBeGreaterThanOrEqual(18)
})

test("Validação de idade de 65 ou mais", ()=>{
     expect(classifyAge(69)).toBeGreaterThanOrEqual(65)
})
