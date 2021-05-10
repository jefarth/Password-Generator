// Create prompts for password criteria
// when button is clicked

// Choose password length bteween 8-128 char

// Choose character types to include in password
// lowercase, uppercase, numeric, and/or special

// Take prompt inputs and generate appropriate password in textarea


// Assignment Code
// Global Variables
var generateBtn = document.querySelector(`#generate`);
var lowerCase = `abcdefghijklmnopqrstuvwxyz`;
var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var number = `0123456789`;
var special = `!@#$%^&*()_-+={}[];:'"~<,>.?/|`;
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
    alert(`Password length set. The following screens will allow you to choose if you want to include special password criteria. \nIf you choose "No" for every prompt your password will only contain lowercase letters.`);
  }

  // Call the completed function
  return passwordLength;
}


// Create function to prompt if the user wants to use uppercase letters
function checkUpper() {
  upperCheck = prompt(`Please choose if you would like to include uppercase letters in your password. \n(Yes or No)`);
  // Sets user input to lowercase to avoid errors
  upperCheck = upperCheck.toLowerCase();


  //  Checks if the user left text blank instead of entering Yes or No, re-runs the function if true
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
  numberCheck = prompt(`Please choose if you would like to include numbers in your password. \n(Yes or No)`);
  // Sets user input to lowercase to avoid errors
  numberCheck = numberCheck.toLowerCase();


  //  Checks if the user left text blank instead of entering Yes or No, re-runs the function if true
  if (numberCheck === null || numberCheck === "") {
    alert(`Please enter Yes or No`);
    checkNumber();

    // Checks if the user answered Yes
  } else if (numberCheck ===`yes` || numberCheck === `y`) {
    numberCheck = true;
    return numberCheck;

    // Checks if the user answered No
  } else if (numberCheck ===`no` || numberCheck === `n`) {
    numberCheck = false;
    return numberCheck;

    // Checks if the user answered with any other key, re-runs the function if true
  } else {
    alert(`Please answer Yes or No`);
    checkNumber();
  }
  return numberCheck;
}


// Create function to ask if user wants to use special characters
function checkSpecial() {
  specialCheck = prompt(`Please choose if you would like to include special characters in your password. \n(Yes or No)`);
  // Sets user input to lowercase to avoid errors
  specialCheck = specialCheck.toLowerCase();

    //  Checks if the user left text blank instead of entering Yes or No, re-runs the function if true
    if (specialCheck === null || specialCheck === "") {
      alert(`Please enter Yes or No`);
      checkSpecial();
  
      // Checks if the user answered Yes
    } else if (specialCheck ===`yes` || specialCheck === `y`) {
      specialCheck = true;
      return specialCheck;
  
      // Checks if the user answered No
    } else if (specialCheck ===`no` || specialCheck === `n`) {
      specialCheck = false;
      return specialCheck;
  
      // Checks if the user answered with any other key, re-runs the function if true
    } else {
      alert(`Please answer Yes or No`);
      checkSpecial();
    }
    return specialCheck;
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


  // Sets password value to nothing
let lower = lowerCase;
let password = "";

// If user selects all prompts add all options together
if (upperCheck && numberCheck && specialCheck){
  lower += upperCase + number + special;

// If user selects Uppercase and Numbers add only those options to Lowercase password
}else if (upperCheck && numberCheck){
  lower += upperCase + number;

// If user selects Number and Special add only those options to Lowercase password
}else if (numberCheck && specialCheck){
  lower += number + special;

// If user selects Uppercase and Special add only those options to Lowercase password
}else if (upperCheck && specialCheck){
  lower += upperCase + special;

// If user only selects Uppercase add only that option to Lowercase password
}else if (upperCheck){
  lower += upperCase;

// If user only selects Numbers add only that option to Lowercase password
}else if(numberCheck){
  lower += number;

// If user only selects Special characters add only that option to Lowercase password
}else if (specialCheck){
  lower += special;

//If user denies all prompts only use a Lowercase password 
}else{
  lower === lowerCase;
}

// Use math.random to generate a random password from prompt criteria
  for(var i = 0; i < passwordLength; i++){
    password += lower.charAt(Math.floor(Math.random() * lower.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {


  // Reset password box and criteria everytime button is clicked
  let password1 = "";
  password1 = generatePassword();

  // Send generated password to the "password" textfield on the HTML document
  const passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);