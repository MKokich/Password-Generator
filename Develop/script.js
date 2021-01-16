// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "123456789"
var specialChar = "!@#$%^&*"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password


function generatePassword(){
  var passwordLength = prompt("Please select a password length of at least 8 characters, and no more than 128 characters.")
  

// THEN I am presented with a series of prompts for password criteria

if (isNaN(passwordLength)){
  alert("Password must contain numbers")
  return;
}
if (passwordLength < 8) {
  alert("Password must be more than 8 characters")
  return;
}

if (passwordLength > 128) {
  alert("Password must be less than 128 characters")
  return;
  }

  var specialCharChoice = confirm("Would you like to include special characters?")
  console.log("specialchar",specialCharChoice);

  var lowerCaseChoice = confirm("Would you like to include lowercase letters?")
  console.log(lowerCaseChoice);

  var upperCaseChoice = confirm("Would you like to include uppercase letters?")
  console.log(upperCaseChoice)

  var numbersChoice = confirm("Would you like to include numbers?")
  console.log(numbersChoice)

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

if (specialCharChoice === false && lowerCaseChoice === false && upperCaseChoice === false && numbersChoice === false){
  alert("Please select at least one criteria to generate password")
  return;
}



}
var randomIndex = (Math.floor(Math.random()*lowerCase.length))
console.log(lowerCase.charAt(randomIndex))

console.log(lowerCase[randomIndex])

var allLetters = upperCase + lowerCase
console.log(allLetters)

for(var i = 0;i < 10;i++){
  console.log(i)
}

var example ="a"
example = example + "b"

// THEN I choose a length of at least 8 characters and no more than 128 characters



// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria



// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


