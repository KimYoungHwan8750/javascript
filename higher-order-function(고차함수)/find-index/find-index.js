const list = [1, 2, 3, 4, 5]
const result = list.findIndex((item, index, original) => {
  if(item - 5 == 0) {
    return true
  }
})
console.log('result', result) // 5의 인덱스인 4 반환