const ascDesNone = (arr, str) => {
  switch (str) {
    case "Asc": return arr.sort((a, b) => a - b);
    case "Des": return arr.sort((a, b) => b - a);
    case "None": return arr
  }
}

console.log(ascDesNone([4, 3, 2, 1], "Asc"))
console.log(ascDesNone([7, 8, 11, 66], "Des"))
console.log(ascDesNone([1, 2, 3, 4], "None"))
