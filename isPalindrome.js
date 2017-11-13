function isPalindrome(string) {
  //lowercase the string and regex removes spaces and non-alphabet character
  var cleanString = string.toLowerCase().replace(/\W/g, '');
  
  //reverse function works with array, hence the need to split and join the string
  if (cleanString === cleanString.split('').reverse().join('')){
    return true;
  }
  return false;
}

isPalindrome("Madam I'm Adam");

// function has a Linear Time Complexity O(n) + O(m)
// isPalindrome is a function that checks if a string is the same when it is reversed
// example: "Madam I'm Adam" is the same forward and reverse