
function findFirstString(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        console.log('Found the First String:', arr[i]);
        return; // Stop the loop after finding the first string
      }
    }
  }
  
  // Example usage
  const array = [1,,22.999 ,'Mithiun', 20, 'pw'];
  findFirstString(array);