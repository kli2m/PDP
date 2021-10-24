const buildNewArr = (arr, count) => {
  let tempArr = [];

  for (let i = 0; i < count; i++) {
    tempArr.push(...arr)
  }

  return tempArr
}

const defaultLines = [
  { size: 'opt1', width: 435 },
  { size: 'opt2', width: 385 },
]

console.log(buildNewArr(defaultLines, 2))
console.log(buildNewArr(defaultLines, 3))
