// Assignment Code
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var includeAlpha = 0
var includeCaps = 0
var includeSymbols = 0
var includeNum = 0

var generateBtn = document.querySelector("#generate");

function passwordCriteria() {
  var possibleCharacters = []
  var lowerCase = confirm("Would you like lower case characters?");
  if (lowerCase) {
    possibleCharacters = possibleCharacters.concat(alphabet);
    includeAlpha++;
  }
  var upperCase = confirm("Would you like upper case characters?");
  if (upperCase) {
    possibleCharacters = possibleCharacters.concat(alphabetCaps);
    includeCaps++;
  }
  var specialCharacters = confirm("Would you like special characters?");
  if (specialCharacters) {
    possibleCharacters = possibleCharacters.concat(symbols);
    includeNum++;
  }
  var numbers = confirm("Would you like numbers?");
  if (numbers) {
    possibleCharacters = possibleCharacters.concat(numeric)
    includeSymbols++;
  }
  return possibleCharacters
}

function generatePassword() {
  var characterList = passwordCriteria();
  if (characterList.length < 1) {
    alert("please choose at least one of the criteria");
    return null;
  }
  var requestedLength = prompt("Please choose a password length between 8 and 128", 10);
  var newPassword = '';
  var listLength = characterList.length;
  if (requestedLength > 128 || requestedLength < 8 || isNaN(requestedLength)) {
    return window.alert("Please choose a number for a password length between 8 and 128 characters");
  }
  else {
    for (var i = 0; i < requestedLength; i++) {
      newPassword += characterList.at(Math.floor(Math.random() * listLength));
    }
  }
  if (includeAlpha === 1) {
    for (var i = 0; i < newPassword.length; i++) {
      if (newPassword.includes(alphabet[i])) {
        alert("this password contains the lower case requirement");
        includeAlpha = 0;
        break;
      }
    }
  }
  if (includeCaps === 1) {
    for (var i = 0; i < newPassword.length; i++) {
      if (newPassword.includes(alphabetCaps[i])) {
        alert("this password contains the upper case requirement");
        includeCaps = 0;
        break;
      }
    }
  }
  if (includeSymbols === 1) {
    for (var i = 0; i < newPassword.length; i++) {
      if (newPassword.includes(symbols[i])) {
        alert("this password contains the symbol requirement");
        includeSymbols = 0;
        break;
      }
    }
  }
  if (includeNum === 1) {
    for (var i = 0; i < newPassword.length; i++) {
      if (newPassword.includes(numeric[i])) {
        alert("this password contains the numeric requirement");
        includeNum = 0;
        break;
      }
    }
  }
  if (includeAlpha === 1 || includeCaps === 1 || includeNum === 1 || includeSymbols === 1) {
    alert("this password does not contain all requirements")
    includeAlpha = 0;
    includeCaps = 0;
    includeNum = 0;
    includeSymbols = 0;
    return newPassword
  }
  return newPassword;
}

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
