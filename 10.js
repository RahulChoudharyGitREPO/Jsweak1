function printPositiveNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        console.log(arr[i]);
      }
    }
  }
  
  // Example usage
  const numbers = [1,2, 3, -5, 7, -9, 8, -3];
  printPositiveNumbers(numbers);