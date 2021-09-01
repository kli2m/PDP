const factorChain = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(factorChain([1, 2, 4, 8, 16, 32]))  // true
console.log(factorChain([1, 1, 1, 1, 1, 1]))  // true
console.log(factorChain([2, 4, 6, 7, 12]))  // false
console.log(factorChain([10, 1]))  // false
