
var generateBtn = document.querySelector("#generate");
var numbers = "123456789".split("");
var specialChar = "!@#$%^&*".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = prompt("Please select a password length of at least 8 characters, and no more than 128 characters.")

  var password ="";
  var passwordChoice = []
  
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

  var specialCharChoice = confirm("Would you like to include special characters?");
  
   if (specialCharChoice === true){
     passwordChoice = [...passwordChoice, ...specialChar];
     }
     else {
       passwordChoice = 
       [...passwordChoice]
     }

  var lowerCaseChoice = confirm("Would you like to include lowercase letters?");
  
    if (lowerCaseChoice === true){
      passwordChoice = [...passwordChoice, ...lowerCase];
    }
    else {
      passwordChoice = 
      [...passwordChoice]
    }
  
var upperCaseChoice = confirm("Would you like to include uppercase letters?");
   
  if (upperCaseChoice === true){
    passwordChoice = [...passwordChoice, ...upperCase];
  }
  else {
    passwordChoice = 
      [...passwordChoice
    ]
  }
  

  var numbersChoice = confirm("Would you like to include numbers?");

  if (numbersChoice === true){
    passwordChoice = [...passwordChoice, ...numbers];
  }
  else {
    passwordChoice = 
      [...passwordChoice
    ]
  }

  for(var i = 0;i < passwordLength;i++){
    password = password + passwordChoice[(Math.floor(Math.random()*passwordChoice.length))]
  
  }

  return password
  }


