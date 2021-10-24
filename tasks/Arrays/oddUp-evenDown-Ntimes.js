const evenAddTransform = (arr, value) => {
  return arr.map(el => el % 2 ? el + value * 2 : el - value * 2)
}

console.log(evenAddTransform([3, 4, 9], 3))  // [ 9, -2, 15 ]
console.log(evenAddTransform([0, 0, 0], 10))  // [ -20, -20, -20 ]
console.log(evenAddTransform([1, 2, 3], 1))  // [ 3, 0, 5 ]
