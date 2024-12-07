# array.some()
사용 방법은 `array.some((item, index, original) => {})`이다. 배열을 순회하면서 각 아이템에 원하는 코드를 수행할 수 있는데, 이때 `true`를 반환하는 게 단 하나라도 있으면 순회는 중단된다.

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
console.log('result',result)
```

item이 3이면 false를 반환하고 4면 true를 반환하게 만들었다.

```terminal
# 실행 결과
item 1
item 2
item 3
item 4
result true
```

중간에 `false`를 반환한다고 해서 배열 순회가 중단되지는 않는다. 또한 `true`를 반환 받으면 그 즉시 배열 순회를 멈추고 true를 반환한다.