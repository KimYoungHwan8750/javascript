# array.filter()
사용 방법은 `array.filter((item, index, original) => {})`이다. 함수가 `true`를 반환한다면 `item`의 값을 반환한다.

```js
const list = [1, 2, 3, 4, 5]
const result = list.filter((item, index, original) => {
  if(item%2 == 0) {
    return true
  }
})
console.log('result', result) // 2, 4 반환
```

아주 유용하게 사용되는 고차 함수 중 하나.