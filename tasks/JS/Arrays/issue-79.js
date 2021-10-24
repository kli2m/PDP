const sevenBoom = (arr) => {
  if (arr.every(el => !String(el).includes("7"))) {
    return "there is no 7 in the array"
  } else return "Boom!"
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
