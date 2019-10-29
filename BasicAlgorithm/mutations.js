function mutation(arr) {
  let test = arr[0].toLowerCase();
  let target = arr[1].toLowerCase();
  // console.log(arr1, arr2);
  for (let i = 0; i < target.length; i++) {
    if (test.indexOf(target[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(['helloworld', 'ehlo']));
