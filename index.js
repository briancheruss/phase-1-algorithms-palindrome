function isPalindrome(word) {
  // Write your algorithm here
  word = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

/* 
  Add your pseudocode here
  - Replace any non-alphabet characters in the input word with an empty string
  - Convert the word to lowercase
  - Initialize two pointers, start and end, pointing to the beginning and end of the word
  - Loop while the start pointer is less than the end pointer
    - If characters at start and end do not match, return false (not a palindrome)
    - Move start pointer one step forward and end pointer one step backward
  - If the loop completes without returning false, it's a palindrome, so return true

*/

/*
  Add written explanation of your solution here
  The function isPalindrome takes a string as input and checks if it's a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forwards and backwards.

  Here's how the function works:
  1. It first removes any non-alphabet characters and converts the string to lowercase to simplify the comparison.
  2. It initializes two pointers, 'start' at the beginning of the word and 'end' at the end.
  3. It enters a loop that continues as long as 'start' is less than 'end'.
  4. Inside the loop, it checks if the characters at 'start' and 'end' positions do not match. If they don't match, it returns false, indicating that the input string is not a palindrome.
  5. If the characters at 'start' and 'end' positions match, it moves 'start' one step forward and 'end' one step backward to continue checking the next pair of characters.
  6. If the loop completes without returning false, it means all pairs of characters matched, and the input string is a palindrome, so it returns true.

  This function effectively determines whether a given string is a palindrome or not, handling lowercase input with or without non-alphabet characters.
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
