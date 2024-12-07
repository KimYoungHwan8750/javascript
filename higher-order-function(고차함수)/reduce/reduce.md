# array.reduce()
사용 방법은 `array.reduce((previousValue, currentValue, index, original) => {}, initialValue)`이다. 매개변수가 굉장히 많아서 헷갈릴수도 있다. 나도 괜히 배우는 거 어려울까봐 계속 미뤘는데 사실 정말 별 거 없다.

같은 고차함수인 forEach는 `forEach((item, index, original) => {})`, find도 `find((item, index, original) => {})`인 것처럼 `reduce`도 자세히 보면 `index`, `original`이 있는 것을 알 수 있다. 그러나 대부분 가볍게 쓰는 경우가 많고 그럴때는 `index`와 `original`을 사용하지 않고 `array.forEach(item => console.log(item))`과 같이 필요한 매개변수만 쓰게 된다.

`reduce`도 가만보면 `array.reduce((pre, cur) => {})`와 같이 쓸 수 있음을 알 수 있다.

```js
const list = [1, 2, 3, 4, 5]
const initialValue = 0
const result = list.reduce((previousValue, currentValue, index, original) => {
  return previousValue + currentValue
}, initialValue)
console.log('result', result) // 1 + 2 + 3 + 4 + 5 = 15

const list2 = [1, 2, 3, 4, 5]
const result2 = list2.reduce((pre, cur) => { return pre + cur })
console.log('result2', result2) // 1 + 2 + 3 + 4 + 5 = 15
```

위 코드를 보면 같은 동작을 함을 알 수 있다. 다만 주의할 점이 있는데, initialValue를 설정해주지 않으면 배열의 첫 번째 요소가 첫 순회의 `previousValue`가 된다. 이해하기 어렵다면 그냥 배열의 첫 번째 요소가 기본값이 된다고 생각하면 된다. `initialValue`를 설정해주면 첫 순회에서 `previousValue`가 `initialValue`가 되는데 `initalValue`를 설정 안 하면 누가 그 자리를 채워주지? 라고 생각하면 된다. 따라서 위의 경우엔 같은 동작을 하는 것이다.

물론 다른 고차함수에 비해 "아주 조금" 복잡하다고 생각할 수도 있는데, 그 복잡한 고차함수들 싹 다 이걸로 구현 가능하다. 배워두면 좋다. 건강에 좋은 약이 쓰다고 생각하고 한 번 맛보는 걸 추천한다.