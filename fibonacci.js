function fibonacci(position) {
  if (position < 3){
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}

fibonacci(6) // 8

// function has a Log Time Complexity O(2^n)
// fibonacci is a function that returns the value of a specific position in the fibonacci sequence

function fibMemo (index, cache) {
  cache = cache || [];
  if (cache[index]) {
    return cache[index];
  } else {
    if (index < 3) {
      return 1;
    } else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache)
    }
  }
  return cache[index]
}

fibMemo(50);

// function has a Linear Time Complexity O(n)
// Memoized Fibonacci is a function that returns the value of a specific position in the fibonacci sequence
// This function uses cache to make the process more efficient