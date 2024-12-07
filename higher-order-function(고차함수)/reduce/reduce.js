const list = [1, 2, 3, 4, 5]
const initialValue = 0
const result = list.reduce((previousValue, currentValue, index, original) => {
  return previousValue + currentValue
}, initialValue)
console.log('result', result)

const list2 = [1, 2, 3, 4, 5]
const result2 = list2.reduce((pre, cur) => { return pre + cur })
console.log('result2', result2)