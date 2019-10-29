function bouncer(arr) {
  // method 1
  //   var newArr = arr.filter(item => {
  // if(item){
  //   return item;
  //   }
  //   });
  // return newArr;

  // method2
  return arr.filter(Boolean);
}

var truthy = bouncer([7, 'ate', undefined, null, '', false, 9, NaN]);
console.log(truthy);
