# array.every()
사용 방법은 `array.every((item, index, original) => {})`이다. 각 순회에서 `true`를 반환하면 다음 요소도 `true`를 반환하는지 확인하고, 각 아이템에 대한 모든 콜백함수가 `true`를 반환하면 `array.every()`함수가 `true`를 반환한다.

```js
const list = [1, 2, 3, 4, 5]
const result = list.every((item, index, original) => {
  return Number.isInteger(item)
})

const list2 = [1, 2, 3, '4', 5]
const result2 = list2.every((item, index, original) => {
  console.log('item',item)
  return Number.isInteger(item)
})

console.log('result', result) // true
console.log('result2', result2) // 1, 2, 3, false
```

위 결과를 보면 알겠지만 하나라도 만족하지 못하면 `every()`함수가 `false`를 반환하고, 그 즉시 함수가 종료된다.