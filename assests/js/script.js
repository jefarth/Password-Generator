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



// Create function to prompt the user to set the desired length of the password, checks if in parameters
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
    alert(`Password length set. The following screens will allow you to choose if you want to include special characters.`);
  }

  // Call the completed function
  return passwordLength;
}


// Create function to prompt if the user wants to use uppercase letters
function checkUpper() {
  upperCheck = prompt(`Please choose if you would like to include uppercase letters in your password. \n(Yes or No)`);
  // Sets user input to lowercase to avoid errors
  upperCheck = upperCheck.toLowerCase();

  //  Checks if the user left blank instead of entering Yes or No, re-runs the function if true
  if (upperCheck === null || upperCheck === "") {
    alert(`Please enter Yes or No`);
    checkUpper();

    // Checks if the user answered Yes
  } else if (upperCheck ===`yes` || upperCheck === `y`) {
    upperCheck = true;
    return upperCheck;

    // Checks if the user answered No
  } else if (upperCheck ===`no` || upperCheck === `n`) {
    upperCheck = false;
    return upperCheck;

    // Checks if the user answered with any other key, re-runs the function if true
  } else {
    alert(`Please answer Yes or No`);
    checkUpper();
  }
  return upperCheck;
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
  checkUpper();
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