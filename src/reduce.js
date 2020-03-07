// 学习 https://juejin.im/post/5e44002c6fb9a07c9f3fd135 练习
// 累加
function accuAdd(...arg) {
  return arg.reduce((t,v) => t + v, 0)
}

// 累乘
function accuMultiply(...arg){
  return arg.reduce((t,v) => t * v, 1)
}

// 权重求和
// const scores = [
//   { score: 90, subject: "chinese", weight: 0.5 },
//   { score: 95, subject: "math", weight: 0.3 },
//   { score: 85, subject: "english", weight: 0.2 }
// ];

function scoreRes(scores) {
  return scores.reduce((t,{score,weight}) => t + score * weight, 0);
}

// console.log(scoreRes(scores));

// 代替数组的reverse方法
function reverse(arr){
  return arr.reduceRight((t,v) => (t.push(v), t) , [])
}
// console.log(reverse([1,2,3,4,5]));

//代替map和filter
const arr = [0, 1, 2, 3];
const a = arr.map(v => v * 2).filter(v => v > 2);
const b = arr.reduce((t,v) => (v * 2 > 2 ? [...t, v * 2] : t), []) // 扩展运算符进行数组的添加更直观
// console.log(a, b);
const scores = [
  { score: 45, subject: "chinese" },
  { score: 90, subject: "math" },
  { score: 60, subject: "english" }
];

console.log(scores.some(item => item.score > 80));
console.log(scores.reduce((t,v) => t || v.score > 80, false));

console.log(scores.every(item => item.score > 80));
console.log(scores.reduce((t,v) => t && v.score > 80, true));

// 数组分割

// const arr1 = [1, 2, 3, 4, 5];
// console.log(Chunk(arr, 2));
 // [[1, 2], [3, 4], [5]]

function Chunk(arr, size) {
  return arr1.length 
        ? arr1.reduce((t, v) => t[t.length - 1].length === size ? [...t, [v]]: (t[t.length-1].push(v), t), [[]])
        : []
}

// 数组过滤
/* const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6]
console.log(difference(arr1, arr2)); // [1, 4, 5] */
function difference(arr, oarr){
  return arr.reduce((t, v) => ( !oarr.includes(v) && t.push(v), t),[]);
}

// 数组过滤
// const arr = [0, 1, 2, 3, 4, 5, 6];
fill(arr, "aaa", 2, 5); // [0, 1, "aaa", "aaa", "aaa", 5, 6]

function fill(arr = [], val = "", start = 0, end = arr.length) {
  if (start < 0 || start >= end || end > arr.length) return arr;
  return [
      ...arr.slice(0, start),
      ...arr.slice(start, end).reduce((t, v) => (t.push(val || v), t), []),
      ...arr.slice(end, arr.length)
  ];
}





// 数组去重
/* const arr3 = [2, 1, 0, 3, 2, 1, 2];
console.log(Uniq(arr)); */

function Uniq(arr) {
  return arr.length
        ? arr.reduce((t,v) => t.includes(v) ? t : [...t, v] , [])
        : [];
}

// 数组最大最小值

const arr3 = [2, 1, 0, 3, 2, 1, 2];
function Max(arr3) {
  return arr3.reduce((t, v) => t > v ? t : v)
}
function Min(arr3) {
  return arr3.reduce((t, v) => t > v ? v : t)
}

console.log(Max(arr3), Min(arr3))

//URL参数反序列化
function ParseUrlSearch(searchUrl) {
  return searchUrl.replace(/(^\?)|(&$)/g, "").split("&").reduce((t,v) => {
    const [key, value] = v.split("=");
    t[key] = decodeURIComponent(value);
    return t;
  }, {})
}

console.log(ParseUrlSearch("?age=25&name=TYJ"));




