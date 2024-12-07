# array.includes()
사용 방법은 `array.includes(searchElement, startIndex)`다. searchElement에 찾고자하는 요소를, startIndex에 시작할 인덱스를 전달한다. 시작할 인덱스에 넣은 값은 탐색 범위에 포함되며 값을 인자를 전달하지 않고 기본값을 0으로 시작할 수 있다.

```js
const list = [1, 2, 3, 4, 5]
const result1 = list.includes(1) // true
const result2 = list.includes(6) // false
const result3 = list.includes(1, 2) // false
```