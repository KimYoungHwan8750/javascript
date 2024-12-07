# array.some()
사용 방법은 `array.some((item, index, original) => {})`이다. 배열을 순회하면서 `true`를 반환받지 못하면 계속해서 배열의 다음 아이템을 탐색한다. `false`를 반환하는 것은 의미가 없고, 오로지 `true`만을 성공 플래그로 삼는다. 따라서 `true`를 반환 받으면 그 즉시 `some()` 함수는 종료되며 `true`를 반환한다.

```js
const list = [1, 2, 3, 4, 5]
const result = list.some((item, index, original) => {
  console.log('item',item)
  if(item === 3) {
    return false
  } else if (item === 4) {
    return true
  }
})
console.log('result', result) // 1, 2, 3, 4 (5는 출력되지 않고 종료), true 반환
```