/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let str1_obj = {}
  let str2_obj = {}
  for (let s of str1.toLowerCase()){
    if (s in str1_obj){
      str1_obj[s] += 1
      continue
    }
    str1_obj[s] = 1
  }

  for (s of str2.toLowerCase()){
    if (s in str2_obj){
      str2_obj[s] += 1
      continue
    }
    str2_obj[s] = 1
  }

  const keys1 = Object.keys(str1_obj)
  const keys2 = Object.keys(str2_obj)

  if (keys1.length !== keys2.length) return false

  for (let key of keys1){
    if (str1_obj[key] !== str2_obj[key]){
      return false
    }
  }
  return true
}

console.log(isAnagram('Debit Card', 'Bad Credit'));

module.exports = isAnagram;
