const capMe = (arr) => {
  return arr.map(el => {
    let newStr = el.toLowerCase()
    return newStr.slice(0, 1).toUpperCase() + newStr.slice(1)
  })
}

console.log(capMe(["mavis", "senaida", "letty"]))  // [ 'Mavis', 'Senaida', 'Letty' ]
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]))  // [ 'Samuel', 'Mabelle', 'Letitia', 'Meridith' ]
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]))  // [ 'Slyvia', 'Kristal', 'Sharilyn', 'Calista' ]
