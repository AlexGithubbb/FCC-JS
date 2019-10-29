// let arr = [1, 2, 5, 43, 56, -13, 0, 11];
// console.log(arr.slice(6, 9));

// // console.log(arr.slice(-4));

// function chunkyMonkey(arr, size) {
//   let newArr = [];
//   for (let i = 0; i < arr.length / size; i++) {
//     newArr.push(arr.slice(size * i, size * (i + 1)));
//   }
//   return newArr;
// }
function chunkyMonkey(arr, size, n) {
  let newArr = [];
  newArr.push(arr.slice(size * n, size * (n + 1)));
  if (n < arr.length / size) {
    chunkyMonkey(arr, size, n + 1);
  }
  return newArr;
}

console.log(chunkyMonkey([1, 2, 5, 43, 56, -13, 5, 87, 1, 9, 3, -3, 4], 5, 0));
