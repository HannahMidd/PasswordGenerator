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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
