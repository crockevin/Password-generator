// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var symbols = "!@#$%^&*()-_+=[]{};:,<>?./|"
var randomPassword = ""
function generatePassword() {
   passwordLength = prompt("Please choose a number 8-128 as the length of your password")
   if(passwordLength == null){
    return null
   }
   passwordLength = parseInt(passwordLength)
  if (!(passwordLength > 7 && passwordLength < 129)) {
    alert("Not a valid input")
    generatePassword()
  }

  var listOfCharacters = ""
  var hasLowerCase = confirm("Do you want your password to have lower case letters")
  var hasUpperCase = confirm("Do you want your password to have upper case letters")
  var hasNumbers = confirm("Do you want your password to have numbers")
  var hasSymbols = confirm("Do you want your password to have symbols")
  if(hasLowerCase){
    listOfCharacters += lowerCase
  }
  if(hasUpperCase){
    listOfCharacters += upperCase
  }
  if(hasNumbers){
    listOfCharacters += numbers
  }
  if(hasSymbols){
    listOfCharacters += symbols
  }
  for(var i = 0; i < passwordLength; i++){
    randomPassword += listOfCharacters.charAt(Math.floor(Math.random()* listOfCharacters.length))
  }
  return randomPassword
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
