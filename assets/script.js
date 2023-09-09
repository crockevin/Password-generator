// Assignment code here
//List of characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var symbols = "!@#$%^&*()-_+=[]{};:,<>?./|"
function generatePassword() {
  var randomPassword = ""
  passwordLength = prompt("Please choose a number 8-128 as the length of your password")
  //Checks to see of user cancels the prompt
  if (passwordLength == null) {
    return null

  }
  passwordLength = parseInt(passwordLength)// converts passwordLength to int
  //Checks to see if passwordLength fits in the requirements
  if (!(passwordLength > 7 && passwordLength < 129)) {
    alert("Not a valid input")
    return generatePassword()//Recursion
  }

  var listOfCharacters = ""
  var hasLowerCase = confirm("Do you want your password to have lower case letters")
  var hasUpperCase = confirm("Do you want your password to have upper case letters")
  var hasNumbers = confirm("Do you want your password to have numbers")
  var hasSymbols = confirm("Do you want your password to have symbols")
  if (hasLowerCase) {
    listOfCharacters += lowerCase
    randomPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))//Add one of this type incase the password doesnt generate it
  }
  if (hasUpperCase) {
    listOfCharacters += upperCase
    randomPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length))//Add one of this type incase the password doesnt generate it
  }
  if (hasNumbers) {
    listOfCharacters += numbers
    randomPassword += numbers.charAt(Math.floor(Math.random() * numbers.length))//Add one of this type incase the password doesnt generate it
  }
  if (hasSymbols) {
    listOfCharacters += symbols
    randomPassword += symbols.charAt(Math.floor(Math.random() * symbols.length))//Add one of this type incase the password doesnt generate it
  }
  //Generates the password
  for (var i = randomPassword.length; i < passwordLength; i++) {
    randomPassword += listOfCharacters.charAt(Math.floor(Math.random() * listOfCharacters.length))
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
