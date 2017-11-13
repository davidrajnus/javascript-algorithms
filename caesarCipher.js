function caesarCipher (str, num) {
  //For num more than 26, total number of alphabets
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var newString = "";

  for(var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    //put back space into new string
    if (currentLetter === " "){
      newString += currentLetter;
      continue;
    }

    var currentIndex = alphabet.indexOf(currentLetter);
    //find the new letter after the num increment
    var newIndex = currentIndex + num;
    if (newIndex > 25) {
      newIndex = newIndex - 26
    };
    if (newIndex < 0) {
      newIndex = newIndex + 26
    };
    if (str[i] === str[i].toUpperCase()) {
      //Uppercase certain letters
      newString = newString + alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex]
    };
  }
  return newString
}

caesarCipher('Pencil Box', 4) //Tirgmp Fsb

//function has a Linear Time Complexity O(n) + O(m)
// caesarCipher is a function that increase the alphabets in the string by a specified amount(num)
// Example: If num is 3, "a" will be changed to "d"
