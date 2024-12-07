# array.forEach()
사용 형태는 `array.forEach((item, index, original) => {})`이다. 콜백함수는 반환값이 없다. 즉 배열을 순회하면서 해당 배열을 출력한다던가, 객체인 경우 필드값을 수정할 수 있다.

```js
const list = [1, 2, 3, 4, 5]
list.forEach((item, index, original) => {
  console.log('현재 값은', item, '입니다.')
  console.log('현재 인덱스는', index, '입니다.')
  console.log('원본 배열은', original, '입니다.')
  console.log()
  item++
})
console.log('list', list) // list는 여전히 [1, 2, 3, 4, 5]
```

list의 아이템에 1을 더했지만 출력 결과 list는 여전히 1, 2, 3, 4, 5를 가리킨다.

```js
const obj = { field:1 }
const objList = [obj]
objList.forEach(o => o.field = 10)
console.log(obj.field) // 10
```

하지만 배열에 객체를 추가하고 forEach를 통해 값을 수정하자 변경사항이 원본 객체에도 반영된다.