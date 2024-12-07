const list = [1, 2, 3, 4, 5]
list.forEach((item, index, original) => {
  console.log('현재 값은', item, '입니다.')
  console.log('현재 인덱스는', index, '입니다.')
  console.log('원본 배열은', original, '입니다.')
  console.log()
  item++
})
console.log('list', list) // list는 여전히 [1, 2, 3, 4, 5]

const obj = { field:1 }
const objList = [obj]
objList.forEach(o => o.field = 10)
console.log(obj.field) // 10