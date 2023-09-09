// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = 1234567890
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", ";", ":", ",", "<", ">", "?", ".", "/", "|"]
function generatePassword() {
  var passwordLength = prompt("Please choose a number 8-128 as the length of your password")
  if (!(passwordLength > 7 && passwordLength < 129)) {
    alert("Not a valid input")
    generatePassword()
  } else {
    alert("Alert")
  }
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
