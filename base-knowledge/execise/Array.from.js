// 学习https://juejin.im/post/5d66b019f265da03a715e5d7 小结

// Array.from(arrayLike, [mapFunction], [thisArg])

/* const someNumbers = { '0': 10, '1': 15, length: 2 };
const obj = {
  a: 50
};
console.log(Array.from(someNumbers, function(value) {
  return value * 10 + this.a;
}, obj));        // => [20, 30] */

/* function sumArguments() {
  return Array.from(arguments).reduce((sum, num) => sum + num);
}

sumArguments(1, 2, 3); // => 6 */

/* Array.from('Hey');                   // => ['H', 'e', 'y']
Array.from(new Set(['one', 'two'])); // => ['one', 'two']

const map = new Map();
map.set('one', 1)
map.set('two', 2);
Array.from(map); // => [['one', 1], ['two', 2]]


const numbers = [3, 6, 9];
const numbersCopy = Array.from(numbers);

numbers === numbersCopy; // => false */

/* function recursiveClone(val) {
  // return Array.isArray(val) ? Array.from(val, recursiveClone) : val;
  return Array.isArray(val) ? Array.from(val, recursiveClone(val)) : val;
}

const numbers = [[0, 1, 2], ['one', 'two', 'three']];
const numbersClone = recursiveClone(numbers);

numbersClone; // => [[0, 1, 2], ['one', 'two', 'three']]
numbers[0] === numbersClone[0] // => false
 */


/* const length = 3;
const init   = 0;
const result = Array.from({ length }, () => init);

result; // => [0, 0, 0]

const length = 3;
const init   = 0;
const result = Array(length).fill(init);

fillArray2(0, 3); // => [0, 0, 0]


const length = 3;
const resultA = Array.from({ length }, () => ({}));
const resultB = Array(length).fill({});

resultA; // => [{}, {}, {}]
resultB; // => [{}, {}, {}]

resultA[0] === resultA[1]; // => false
resultB[0] === resultB[1]; // => true */
// map会跳过空项
/* const length = 3;
const init   = 0;
const result = Array(length).map(() => init);

result; // => [undefined, undefined, undefined]

function range(end) {
  return Array.from({ length: end }, (_, index) => index);
}

range(4); // => [0, 1, 2, 3] */
/* 
function unique(array) {
  return Array.from(new Set(array));
}

unique([1, 1, 2, 3, 3]); // => [1, 2, 3]
 */
