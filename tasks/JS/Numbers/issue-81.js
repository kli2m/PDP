const addUp = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i
  }
  return result;
}

console.log(addUp(4))  // 10
console.log(addUp(13))  // 91
console.log(addUp(600))  // 180300
