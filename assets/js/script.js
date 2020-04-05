// Assignment code here
const key_strings = {
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	number: '0123456789',
	symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password
function generatePassword() {
  var passwordCharSet = "";

  var length = parseInt(window.prompt("Enter a number from 8 to 128 for password length."));
    if (length < 8 || length > 128) {
      window.alert("Not a valid number.");
      return;
    }
  
  var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase) {
        passwordCharSet += key_strings.lowercase;
    };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase) {
        passwordCharSet += key_strings.uppercase;
    };

  var symbols = window.confirm("Would you like to use symbols?");
    if (symbols) {
        passwordCharSet += key_strings.symbol;
    };

  var numbers = window.confirm("Would you like to use numbers?");
    if (numbers) {
        passwordCharSet += key_strings.number;
    };
  
  var password = "";
  for (let i =0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
