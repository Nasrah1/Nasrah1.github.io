// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";
var passwordUser = "";
var criteria = "";

var passwordCount;
var numCharacters, isUppercase, isLowercase, isNumbers, isSymbols;

var passwordText = document.querySelector("#password");
function generatePassword() {
  numCharacters = prompt(
    "How many charcters would you like this password to contain?"
  );
  if (numCharacters < 8 || numCharacters > 128) {
    alert("password must be between 128 characters");
    return;
  }

  promptResponse = "Password length must be less than 128 characters";

  isUppercase = confirm("Will this contain Uppercase");
  if (isUppercase === true) {
    criteria += uppercase;
  }
  isLowercase = confirm("Will this contain Lowercase");
  if (isLowercase === true) {
    criteria += lowercase;
  }
  isNumbers = confirm("Will this contain Numbers");
  if (isNumbers === true) {
    criteria += numbers;
  }
  isSymbols = confirm("Will this contain symbols");
  if (isSymbols === true) {
    criteria += symbols;
  }
  for (var i = 0; i < numCharacters; i++) {
    passwordUser += criteria.charAt(Math.floor(Math.random() * numCharacters));
  }
  console.log(passwordUser);
  console.log(criteria);
  return passwordUser;
}
// document.querySelector("#password").value = password;

// passwordText.value = password;

// Add event listener to generate button

// generateBtn
generateBtn.addEventListener("click", function (event) {
  var password = generatePassword();
  document.querySelector("#password").value = password;
});

// generatePassword);
