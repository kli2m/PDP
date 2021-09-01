const isPositiveDominant = (arr) => {
  const uniqueArr = Array.from(new Set(arr))
  const result = uniqueArr.reduce((pre, el) => el >= 0 ? pre + 1 : pre - 1, 0)
  return result >= 0 ? true : false
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]))  // false
console.log(isPositiveDominant([5, 99, 832, -3, -4]))  // true
console.log(isPositiveDominant([5, 0]))  // true
console.log(isPositiveDominant([0, -4, -1]))  // false
