const list = [1, 2, 3, 4, 5]
const result = list.some((item, index, original) => {
  console.log('item',item)
  if(item === 3) {
    return false
  } else if (item === 4) {
    return true
  }
})
console.log('result', result)