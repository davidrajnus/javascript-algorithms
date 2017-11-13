function bubbleSort (array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

bubbleSort([4,3,7,2,9,1]);

// function has a Linear Time Complexity O(2n)
// bubbleSort is a function that sorts out an array of numbers in ascending order
