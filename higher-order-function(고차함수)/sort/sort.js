const list = [3, 7, 11, 61]
const result = list.sort()
console.log('result', result)
console.log('list', list)
console.log(list === result)


const people = [
  {
    name: "Luella French",
    age: 20,
    hobby: "Game"
  },
  {
    name: "Jean Reynolds",
    age: 57,
    hobby: "CrossFit"
  },
  {
    name: "Mildred Bates",
    age: 33,
    hobby: "Socker"
  },
  {
    name: "Maude Meyer",
    age: 40,
    hobby: "Cook"
  }
]

function customComparator(a, b) {
  if (a.age < b.age) return -1
  if (a.age == b.age) return 0
  if (a.age > b.age) return 1
}

/**
  { name: 'Luella French', age: 20, hobby: 'Game' },
  { name: 'Mildred Bates', age: 33, hobby: 'Socker' },
  { name: 'Maude Meyer', age: 40, hobby: 'Cook' },
  { name: 'Jean Reynolds', age: 57, hobby: 'CrossFit' }
 */
console.log('people.sort(customComparator)', people.sort(customComparator))
