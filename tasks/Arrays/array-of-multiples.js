const arrayOfMultiples = (num, length) => {
  return new Array(length).fill(0).map((_, i) => (num + num * i))
}

console.log(arrayOfMultiples(7, 5))  // [ 7, 14, 21, 28, 35 ]
console.log(arrayOfMultiples(12, 10))  // [ 12, 24, 36, 48, 60, 72, 84, 96, 108, 120 ]
console.log(arrayOfMultiples(17, 6))  // [ 17, 34, 51, 68, 85, 102 ]
