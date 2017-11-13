function fibonacci(position) {
  if (position < 3){
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}

fibonacci(6) // 8

// function has a Linear Time Complexity O(2^n)
// fibonacci is a function that returns the value of a specific position in the fibonacci sequence