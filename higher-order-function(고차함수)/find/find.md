# array.find()
사용 방법은 `arr.find((item, index, original) => {})`이다. 배열을 순회하면서 어떤 차례에서 `true`가 반환되면 해당 차례의 `item`의 값을 그대로 반환한다.

```js
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
```
```terminal
# 결과값
item 1
index 0
original [ 1, 2, 3, 4, 5 ]

item 2
index 1
original [ 1, 2, 3, 4, 5 ]

result 2
```

결과를 통해 알 수 있듯이, 조건을 만족하는 값이 여러개 있더라도 가장 먼저 `true`를 반환하는 `item`만 반환된다. 또한 `true`가 반환되면 그 이후에 순회할 요소가 남았다고 하더라도 즉시 함수가 종료된다.