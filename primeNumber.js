function primeNumber (n) {
  var primes = [];
  //treat every number between 0 to n as true
  for (var i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (var j = 2; j * i <= n; j++) {
      //if a value is a multiple of the lower numbers, then its false
      primes[i * j] = false;
    }
  }

  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]){
      //pushing the index number of the trues in the array into results array
      result.push(i);
    }
  }
  return result;
}

primeNumber(20);

// function has a Linear Time Complexity O(2n)
// primeNumber is a function that list down all the prime numbers between 0 and the specified value(n)
