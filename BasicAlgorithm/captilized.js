function titleCase(str) {
  let array = str.split(' '); //['I\'m', 'a', 'little', 'tea', 'pot']
  let Captilized = array
    .map(item => {
      return item.split('');
    })
    .map(subarr => {
      return subarr[0]
        .toUpperCase()
        .concat(',')
        .concat(subarr.slice(1))
        .concat(' ');
    })
    .join('')
    .split('-');
  // console.log(Captilized);
  // console.log(array);
  console.log(Captilized);
}

titleCase("I'm a little tea pot");
