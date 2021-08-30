const numbersSum = (arr) => {
  return arr.reduce((pre, el) => typeof (el) === 'number' ? pre += el : pre, 0)
}

console.log(numbersSum([1, 2, "13", "4", "645"]))  // 3
console.log(numbersSum([true, false, "123", "75"]))  // 0
console.log(numbersSum([1, 2, 3, 4, 5, true]))  // 15
