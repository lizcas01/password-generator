// Acceptable charcters.
var numbers = ('0','1','2','3','4','5','6','7','8','9');
var upperCase = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var lowerCase = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var special = ('!','@','#','$','%','^','&','*','(',')','-','_','=','+',"[",'{',']','}',';',':',"'",'"','|',',','<',".",'>','/','?');

function generatePassword() {
  var acceptCharc = [];
  var passwordLength = window.prompt("From 8-128 characters, how long do you want your password to be?");

// Password Length Confirmation 
    if (passwordLength < 8) {
      window.alert ("Please select a higher number")
    } 
    else if (passwordLength > 128) {
      window.alert ("Please select a lower number")
    }
    else if (isNaN(passwordLength)) {
      window.alert ("Please choose a number.")
    }
  
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
