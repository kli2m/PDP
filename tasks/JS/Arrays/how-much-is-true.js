const countTrue = (arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce((pre, el) => el ? pre += 1 : pre, 0)
  } else return 0;
}
console.log(countTrue([true, false, false, true, false])) // 2
console.log(countTrue([false, false, false, false]))  // 0
console.log(countTrue([])) // 0
