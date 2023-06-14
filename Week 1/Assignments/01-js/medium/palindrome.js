/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let strLower = str.toLowerCase()
  strLower = strLower.replace(/[^a-zA-Z]/g, '');
  let j = strLower.length - 1
  for (let i = 0; i <= j; i++){
    if (strLower[i] === strLower[j]) {
      j -= 1
    }
    else return false
  }
  return true
}

// console.log(isPalindrome("race car"))

module.exports = isPalindrome;
