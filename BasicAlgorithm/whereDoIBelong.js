function findWhereIBelong(arr, num) {
  // arr.push(num);
  // return arr.sort((a, b) => a - b).indexOf(num);

  // method C
  let newArr = [];
  newArr = arr.filter(item => item < num);
  return newArr.length;
}

console.log(findWhereIBelong([10, 50, 6, 2], 40));
