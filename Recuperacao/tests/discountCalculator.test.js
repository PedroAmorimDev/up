function calculeDiscount(price, discount){
     const desconto = price * (discount / 100)
     return desconto
    }
const calculeDiscount = require("../src/functions/discountCalculator")

test("Validação de desconto", ()=>{
     expect(calculeDiscount(100, 50)).toBe(50)
})
