// It’s the opposite to rest parameter, where rest parameter collects items into an array, the spread operator unpacks the collected elements into single elements.

function insertItem(arr1, arr2, n) {
  let localArr = arr2.slice();

  // method1: sperad operator
  // localArr.splice(n, 0, ...arr1);
  // return localArr;

  // method2: for loop
  for (let i = 0; i < arr1.length; i++) {
    localArr.splice(n, 0, arr1[i]);
    n++;
  }
  return localArr;
}

var result = insertItem([1, 2], [5, 4, 6, 7], 3);
console.log(result);
