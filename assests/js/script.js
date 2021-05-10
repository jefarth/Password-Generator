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
var upperCheck;
var numberCheck;
var specialCheck;



// Create function to create a prompt to check the desired length of the password
function checkLength() {
  passwordLength = prompt(`Please choose how many characters you would like your password to be (between 8 and 128 characters): `);

// Checks if the password is less than 8 characters and alerts user if true, then re-runs the function
  if (passwordLength < 8) {
    alert(`Password must be at least 8 characters long`);
    checkLength();
    // Checks if the password is more than 128 characters and alers user if true, then re-runs the function
  } else if (passwordLength > 128) {
    alert(`Password must be less than 128 characters long`);
    checkLength();
    // Checks if the user input a character other than a number and alerts user if true, then re-runs the function
  } else if (isNaN(passwordLength)) {
    alert(`Must use a number to determine character length between 8 and 128 characters`);
    checkLength();
    // If all criteria met, set the password length to user preference and end the function
  } else {
    alert(`Password length set. The following three screens will allow you to choose if you want to include special characters.`);
  }
  // Call the completed function
  return passwordLength;
}


// Create function to ask if user wants to use uppercase letters
function checkUppercase() {
 
}


// Create function to ask if user wants to use numbers
function checkNumber() {
  
}


// Create function to ask if user wants to use special char
function checkSpecial() {

}


// Create function to compile previous answers and generate random password
function generatePassword() {
  checkLength();
  console.log(passwordLength);
  checkUppercase();
  console.log(upperCheck)
  checkNumber();
  console.log(numberCheck);
  checkSpecial();
  console.log(specialCheck);

}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);