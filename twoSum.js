function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for( var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    //checks if the counterpart is in the hashtable
    if (hashTable.indexOf(counterpart) !== -1){
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum);
  }
  return pairs;
}

twoSum([1, 3, 5, ,6, 3, 2], 4) //[ [ 3, 1 ], [ 3, 1 ] ]

// function has a Linear Time Complexity O(n)
// twoSum is a function that checks a series of 2 values in the array equals to a specific sum
