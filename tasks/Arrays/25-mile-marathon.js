const marathonDistance = (arr) => {
  if (arr.every(el => typeof (el) === "number" && el !== undefined)) {
    let distance = arr.reduce((pre, el) => pre + Math.abs(el), 0)
    if (distance === 25) return true
  }
  return false;
}

console.log(marathonDistance([1, 2, 3, 4]))
console.log(marathonDistance([1, 9, 5, 8, 2]))
console.log(marathonDistance([-6, 15, 4]))
