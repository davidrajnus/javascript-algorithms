function binarySearch(numArray, key) {
  //finds the mid element of the array
  var midIdx = Math.floor(numArray.length/2);
  var midElem = numArray[midIdx];
  //if key is found at the middle
  if (midElem == key) {
    return true;
  // checks the top half through recursion
  } else if (midElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(midIdx, numArray.length), key);
  // checks the bottom half through recursion
  } else if (midElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, midIdx), key);
  // if not found
  } else {
    return false;
  }
}

binarySearch([1,2,3,4,5,6], 4) // true

// function has a Linear Time Complexity O(n)
// binarySearch is a function that checks if an array contains a specified value
