function isPalindrome(word) {
  // Write your algorithm here

  // iterate from the begging to the end.
  for(let startIndex = 0; startIndex < word.length/2; startIndex++){
    //check each letter to the corresponding letter from the end.
    const endIndex = word.length -1 - startIndex;
 
    // if any letters don't match return false
    if(word[startIndex] !== word[endIndex]) return false;
  }
  // if we reach in the middle, and all the letters match, return true 
  return true;
}

/* 
  Add your pseudocode here
  Iterate from the beginning to the middle.
      check each letter to the corresponding letter from the end.
          if any letters don't match, return false
  return true 

/*
  Add written explanation of your solution here:
  Make a function that returns true if a word is a palindrome. That means if the first letter is the same as last letter,
   and second  letter is the same as second to last letter, etc. until we reach the middle, return true.

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
