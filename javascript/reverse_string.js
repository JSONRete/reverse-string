function reverseString(str) {
  // type your code here
    if (!str.length) {
    return str
}

}

if (require.main === module) {
  // add your own tests in here
    let startingEnd = ''

  for (let index = str.length - 1; index >= 0; index--) {
    startingEnd = startingEnd + str[index];
  }
  return startingEnd
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution