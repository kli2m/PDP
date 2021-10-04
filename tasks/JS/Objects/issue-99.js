let inputData = [
  {
    type: 'one',
    body: 'test1',
    visible: true,
  },
  {
    type: 'two',
    body: 'test2',
    visible: true,
  },
  {
    type: 'three',
    body: 'test3',
    visible: true,
  },
  {
    type: 'one',
    body: 'test4',
    visible: true,
  },
  {
    type: 'two',
    body: 'test5',
    visible: true,
  },
  {
    type: 'one',
    body: 'test6',
    visible: false,
  },
];

function fn(inputData) {

  const map = new Map();

  inputData.forEach(item => {
    if (item.visible === false) return;       // добавляем для решения второй части задачи
    if (map.has(item.type)) {
      const getMapKey = map.get(item.type)
      getMapKey.push(item)
      map.set(item.type, getMapKey)
    } else {
      map.set(item.type, [item])
    }
  })

  const result = {};

  for (const [key, value] of map.entries()) {
    result[key] = value
  }

  return result
};

console.log(fn(inputData))
