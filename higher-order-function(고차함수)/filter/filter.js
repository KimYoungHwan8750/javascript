const list = [1, 2, 3, 4, 5]
const result = list.filter((item, index, original) => {
  if(item%2 == 0) {
    return true
  }
})
console.log('result', result)