// Assignment Code
var generateBtn = document.querySelector("#generate");

//Special Characters to be used in PW Generator
var specialCharacters = [
  "{",
  "]",
  "-",
  "_",
  ".",
  "[",
  "@",
  "%",
  "+",
  ",",
  ")",
  "(",
  "}",
  "~",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
];

//Uppercase Letters to be used in PW Generator
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Lowercase Letters to be used in PW Generator
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//Numbers to be used in PW Generator
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function passwordRequirements() {
  var length = parseInt(
    prompt("How many characters does your password need to have? (Between 8-128)"),10
  );
  
  // Controlling the length of the password (must be between 8-128 characters)
  if (length < 8) {
    alert("Please enter a number between 8-128");
    return null;
  }
  
  if (length > 128) {
    alert("Please enter a number between 8-128");
    return null;

      // If user does not enter a numerical value, this error message will occur. 
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
    
  }
    
    







































































































// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
