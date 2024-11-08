const calculeDiscount = require("../src/functions/temperatureConverter")
test("Validação do celsius para fahrenheit", ()=>{
     expect(celsiusToFahrenheit(24)).toBe(75.2)
})
