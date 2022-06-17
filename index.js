function isPalindrome(word) {
  // Write your algorithm here
  for(let startIndex = 0; startIndex < word.length ; startIndex++)
  {
    const lastIndex = word.length - 1 - startIndex
      if(word[startIndex] === word[lastIndex])
      {
        return true
      } else {
        return false
      }
  }
}
/*
Make a function returning true if the word is a palindrome 
If first letter is same as the last letter and the second letter is the same as the second last letter
as we continue we the trend up to the middle we should return true for the palindrome
*/ 
/*  Add your pseudocode here
Take our input and iterate from the beginning to the middle while checking
while checking if the first character matches the last character
the second character matches the second ast character and so on until we reach the middle.


*/
/*
  Add written explanation of your solution here
Took our function input length and divided it by two to the middle most index
Used a for loop to iterate the word length up to the middle number found above
as i compared the first and the last index of my word.
Checked if the letter at the start index matched the letter at the last index,
the letters at the second index matched the second last index and so on up to the middle index.
Finally returned true if the letters at the specified index matched and false if the letters did not match.

  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
