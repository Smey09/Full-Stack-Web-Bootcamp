// 6. Write a function that could check if the password provided is strong or not. A strong password should have a minimum length of 8 characters
function isPassword(password) {
  return password.length >= 8;
}

console.log(isPassword("password123"));
console.log(isPassword("pass"));
