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

function getPasswordRequirements() {
  var length = parseInt(
    prompt(
      "How many characters (between 8-128) would you like your password to have?"
    ),
    10
  );
  console.log("User entered:", length);

  // If user does not enter a numerical value, this error message will occur.
  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number");
    return null;
  }
  // Controlling the length of the password (must be between 8-128 characters)
  if (length < 8) {
    alert("Please enter a number between 8-128");
    return null;
  }

  if (length > 128) {
    alert("Please enter a number between 8-128");
    return null;
  }
  // Variables that will be used for user requirements for: special characters, numbers, uppercase and lowercase letters.

  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  console.log("User selected their special character requirements");

  var hasNumbers = confirm("Click OK to confirm including numbers.");
  console.log("User selected their number requirements");

  var hasLowerCaseLetters = confirm(
    "Click OK to confirm including lowercase letters."
  );
  console.log("User selected their lowercase letter requirements");

  var hasUpperCaseLetters = confirm(
    "Click OK to confirm including uppercase letters."
  );
  console.log("User selected their uppercase letter requirements");

  // Confirming that user has to use at least one of the special characters, numbers, lower/uppercase letters. (Must come after var)

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert("Please select at least one character type");
    return null;
  }

  // Object to store user input
  var passwordRequirements = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    hasLowerCaseLetters: hasLowerCaseLetters,
    hasUpperCaseLetters: hasUpperCaseLetters,
  };

  return passwordRequirements;
}

// End password reruirement section

// Begin randomizing an element
function getRandom(arr) {
  var randomCharacter = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomCharacter];

  return randomElement;
}
// End randomizer

// Begin function for generating password based on user requirements

function generatePassword() {
  var requirements = getPasswordRequirements();
  var password = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  // I dont understand this part, had to look at answer
  if (!requirements) return null;

  // Below will add arrays of possible characters for given variable (lowercase, uppercase, number, special character)

  if (requirements.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (requirements.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (requirements.hasLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    guaranteedCharacters.push(getRandom(lowerCaseLetters));
  }

  if (requirements.hasUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    guaranteedCharacters.push(getRandom(upperCaseLetters));
  }

  // For loop to continue running until the password lenth requirment is met
  for (var i = 0; i < requirements.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    password.push(possibleCharacter);
  }

  // Add a guarenteed character
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    password[i] = guaranteedCharacters[i];
  }

  // Change the result to a string and pass into writePassword
  return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log("Password generated!");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
