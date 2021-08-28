const uniqueSort = (arr) => {
  return Array.from(new Set(arr)).sort()
}

console.log(uniqueSort([1, 2, 4, 3]))  // [ 1, 2, 3, 4 ]
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]))  // [ 1, 2, 3, 4 ]
console.log(uniqueSort([6, 7, 3, 2, 1]))  //  [ 1, 2, 3, 6, 7 ]
