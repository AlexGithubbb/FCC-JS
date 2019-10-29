function countdown(myArray, n) {
  if (n <= 0) {
    return [];
  } else {
    // method 1
    // countdown(myArray, n - 1);
    // myArray.unshift(n);
    // return myArray;
    // method 2
    myArray.push(n);
    countdown(myArray, n - 1);
    return myArray;
  }
}

console.log(countdown([], 10));
