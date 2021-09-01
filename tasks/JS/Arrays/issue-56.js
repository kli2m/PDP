const filterArray = (arr) => {
  return arr.filter(el => typeof (el) === "number")
}

console.log(filterArray([1, 2, "a", "b"]))  // [ 1, 2 ]
console.log(filterArray([1, "a", "b", 0, 15]))  // [ 1, 0, 15 ]
console.log(filterArray([1, 2, "aasf", "1", "123", 123]))  // [ 1, 2, 123 ]
