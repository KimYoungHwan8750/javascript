# array.findIndex()
사용 형식은 `array.findIndex((item, index, original) => {})`이다. `Array`가 제공하는 또다른 고차함수인 `find`의 인덱스 버전이다.

```js
const list = [1, 2, 3, 4, 5]
const result = list.findIndex((item, index, original) => {
  if(item - 5 == 0) {
    return true
  }
})
console.log('result', result) // 5의 인덱스인 4 반환
```

이 함수의 좋은 점은 어떤 로직을 만족하는 값을 찾을 수가 있다는 것에 있다.