const addName = (obj, ...rest) => {
  return Object.assign(obj, Object.fromEntries([rest]))
}

console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400))
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))
