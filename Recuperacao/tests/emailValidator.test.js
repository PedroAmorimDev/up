const isValidEmail = require("../src/functions/emailValidator")
test("Validação de email", ()=>{
     expect(isValidEmail()).toBe(true)
})
