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