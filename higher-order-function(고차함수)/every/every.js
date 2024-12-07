const list = [1, 2, 3, 4, 5]
const result = list.every((item, index, original) => {
  return Number.isInteger(item)
})

const list2 = [1, 2, 3, '4', 5]
const result2 = list2.every((item, index, original) => {
  console.log('item',item)
  return Number.isInteger(item)
})

console.log('result', result)
console.log('result2', result2)