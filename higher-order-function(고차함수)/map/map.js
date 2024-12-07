const list = [1, 2, 3, 4, 5]
const processedList = list.map((item, index, original) => {
  console.log('현재 값은', item, '입니다.')
  console.log('현재 반복은', index, '번 째 입니다.')
  console.log('원본 배열은', original, '입니다')
  console.log() // 가독성을 위한 enter 효과
  return item * 10
})
console.log('처리된 후 값은', processedList, '입니다.')