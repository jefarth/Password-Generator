// Create prompts for password criteria
// when button is clicked

// Choose password length bteween 8-128 char

// Choose character types to include in password
// lowercase, uppercase, numeric, and/or special

// Take prompt inputs and generate appropriate password in textarea


// Assignment Code
// Global Variables
const generateBtn = document.querySelector(`#generate`);
const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const number = `0123456789`;
const special = `!@#$%^&*()_-+={}[];:'"~<,>.?/|`;
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Create function to determine length of password

// Create function to ask if user wants to use lowercase letters

// Create function to ask if user wants to use uppercase letters

// Create function to ask if user wants to use numbers

// Create function to ask if user wants to use special char

// Create function to compile previous answers and generate random password

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);