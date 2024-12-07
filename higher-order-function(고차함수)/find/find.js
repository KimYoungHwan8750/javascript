const list = [1, 2, 3, 4, 5]
const result = list.find((item, index, original) => {
  console.log('item', item)
  console.log('index', index)
  console.log('original', original)
  console.log();
  if (item == 2 || item == 4){
    return true
  }
})
console.log('result', result)
