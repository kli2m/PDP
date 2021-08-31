const flickSwitch = (arr) => {
  let isTrue = true;
  return arr.map(el => {
    if (el === "flick") {
      isTrue = !isTrue;
    }
    return isTrue
  })
}

console.log(flickSwitch(["edabit", "flick", "eda", "bit"]))
console.log(flickSwitch(["flick", 11037, 3.14, 53]))
console.log(flickSwitch([false, false, "flick", "sheep", "flick"]))
