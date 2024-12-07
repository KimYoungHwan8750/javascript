# array.indexOf()
사용 방법은 `array.indexOf(searchElement, startIndex)`이다. 시작할 인덱스를 지정할 수 있으며, 2번 인덱스에서 시작하면 2번을 포함하여 탐색한다.

```js
/**
 * 1: 0번 인덱스
 * 2: 1번 인덱스
 * 3: 2번 인덱스
 * 4: 3번 인덱스
 * 5: 4번 인덱스
 */
const list = [1, 2, 3, 4, 5]
const result1 = list.indexOf(3) // 2 반환
const result2 = list.indexOf(3, 2) // 2 반환
const result3 = list.indexOf(3, 3) // -1 반환
const result4 = list.indexOf(6) // -1 반환

console.log('result',result)
```
원하는 요소를 찾지 못하면 -1을 반환한다.