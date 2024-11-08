function isValidEmail(){
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     const email = "rai@gmail.com"
     const testEmail = email.test(emailRegex)
     testEmail = true
     return testEmail 
    }

module.exports = isValidEmail