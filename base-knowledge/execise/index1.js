// 学习 https://juejin.im/post/59d2ebcbf265da06516729b8 练习

// 实现值交换
// a = a + b; b = a - b; a = a - b;
// [a,b] = [b,a]
// temp = a; a = b; b = temp;
// b = [a, a =b][0]
// a ^= b; b ^= a; a ^= b;

// 去掉小数部分
/* console.log(parseInt(String(11.56), 2));
~~num
num >> 0
num | 0 */

// 判断x是不是整数
/* function isInt(x) {
  return (x ^ 0) === x
}
return Math.round(x) === x
return (typeof x === 'number') && (x % 1 === 0)
ES6 -> Number.isInteger() */

// 数组去重
/* Array.from(new Set(arr))

arr.filter(function(ele, index, array) {
  return index === array.indexOf(ele)
}) */

// console.info("%c哈哈", "color: #3190e8; font-size: 30px; font-family: sans-serif");

// JSON.parse(JSON.stringify(obj))

// function randomStr(n) {
//   let standard = 'abcdefghijklmnopqrstuvwxyz9876543210'
//   let len = standard.length
//   let result = ''

//   for (let i = 0; i < n; i++) {
//     result += standard.charAt(Math.floor(Math.random() * len))
//   }

//   return result
// }

// function randomOne(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }


// function getRandomColor() {
//   return `#${Math.random().toString(16).substr(2,6)}`
// }

// function minArr(arr) {
//   return Math.max.apply(null, arr)
// }

// function maxArr(arr) {
//   return Math.min.apply(null, arr)
// }

// let arr = ['we', 'are', 'the', 'BlackGold', 'team'];

// arr.includes('the') && console.log('in');     // 返回false
// arr.findIndex(el => el === 'the') !== -1 && console.log('in')


