// Acceptable charcters.
var numbers = ('0','1','2','3','4','5','6','7','8','9');
var upperCase = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var lowerCase = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var special = ('!','@','#','$','%','^','&','*','(',')','-','_','=','+',"[",'{',']','}',';',':',"'",'"','|',',','<',".",'>','/','?');

function generatePassword() {
  var acceptPassword = [];
  var passLength = window.prompt("From 8-128 characters, how long do you want your password?");

// Password Length Confirmation 
    if (passLength < 8) {
      window.alert ("Please select a number from 8-128.")
    } 
    else if (password > 128) {
      window.alert ("Please select a number from 8-128.")
    }
    else if (isNaN(password)) {
      window.alert ("Please choose a number from 8-128.")
    }
  
// Charcter Types Confirmations and Validation
  var numbersConfirm = confirm("Would you like to include NUMBERS in your password?");
    if (numbersConfirm === true) {
      acceptPassword += numbers;
    }
  
  var upperCaseConfirm = confirm("Would you like to include UPPER CASE LETTERS in your password?");
    if (upperCaseConfirm === true) {
      acceptPassword += upperCase;
    }
  
  var lowerCaseConfirm = confirm("Would you like to include LOWER CASE LETTERS in your password?");
    if (lowerCaseConfirm === true) {
      acceptPassword += lowerCase;
    }
  
  var specialConfirm = confirm("Would you like to include SPECIAL CHARACTERS in your password?");
    if (specialConfirm === true) {
      acceptPassword += special;
    } 

    if (!numbers || !upperCase || !lowerCase || !special) {
        window.alert ("Please select 'ok' on NUMBERS, UPPER CASE, LOWER CASE, or SPECIAL CHARACTERS.")
    }

  console.log(acceptPassword);
  
// For-Loops (Took directly from activity 13 and mini-project)
  password = "";
  for (var i = 0; i < passLength; i++) {
    var randomPass = Math.floor(Math.random() * acceptPassword.length);
    password += acceptPassword[randomPass];
  
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
