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
  // return arr.reduceRight((t,v) => [...t, v] , [])
  return arr.reduceRight((t,v) => (t.push(v), t) , [])
}
// console.log(reverse([1,2,3,4,5]));

//代替map和filter
// const arr = [0, 1, 2, 3];
// const a = arr.map(v => v * 2).filter(v => v > 2);
// const b = arr.reduce((t,v) => (v * 2 > 2 ? [...t, v * 2] : t), []) // 扩展运算符进行数组的添加更直观
// console.log(a, b);
const scores = [
  { score: 45, subject: "chinese" },
  { score: 90, subject: "math" },
  { score: 60, subject: "english" }
];

// console.log(scores.some(item => item.score > 80));
// console.log(scores.reduce((t,v) => t || v.score > 80, false));

// console.log(scores.every(item => item.score > 80));
// console.log(scores.reduce((t,v) => t && v.score > 80, true));

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
// fill(arr, "aaa", 2, 5); // [0, 1, "aaa", "aaa", "aaa", 5, 6]

function fill(arr = [], val = "", start = 0, end = arr.length) {
  if (start < 0 || start >= end || end > arr.length) return arr;
  return [
      ...arr.slice(0, start),
      ...arr.slice(start, end).reduce((t, v) => (t.push(val || v), t), []),
      ...arr.slice(end, arr.length)
  ];
}

// 数组扁平
// const arr1 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// console.log(Flat(arr1)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function Flat(arr1) {
  return arr1.reduce((t,v) => t.concat(Array.isArray(v) ? Flat(t): v),[])
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
// console.log(Max(arr3), Min(arr3))

// 数组成员独立拆解
/* const arr1 = [["a", 1, true], ["b", 2, false]];
console.log(Unzip(arr1)); // [["a", "b"], [1, 2], [true, false]]
function Unzip(arr1) {
  return arr1.reduce((t,v) => (v.forEach((item, i) => t[i].push(item)),t),
    Array.from({length: Math.max(...arr1.map(v => v.length))}).map( v => []) // 不可以用fill，不然会整体操作，用map不会有问题
  )
} */

// 数组成员个数统计
/* const arr1 = [0, 1, 1, 2, 2, 2, 2];
console.log(Count(arr1)); // { 0: 1, 1: 2, 2: 3 }
function Count(arr1) {
  return arr1.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t),{}) // 这个赋值挺简洁
} */

// 数组成员位置
/* const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];
console.log(Position(arr, 2)); // [0, 4]
function Position(arr, target) {
  return arr.reduce((t, v, i) => target === v ? [...t, i] : t, [])
} */
// 数组成员分组
/* const arr = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 }
]; // 以地区area作为分组依据
console.log(Group(arr, "area")); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }
function Group(arr = [], key) {
  return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
} */

// 关键字统计
/* const text = [
  "今天天气真好，我想出去钓鱼",
  "我一边看电视，一边写作业",
  "小明喜欢同桌的小红，又喜欢后桌的小君，真TM花心",
  "最近上班喜欢摸鱼的人实在太多了，代码不好好写，在想入非非"
];
const keyword = ["偷懒", "喜欢", "睡觉", "摸鱼", "真好", "一边", "明天"];
console.log(Keyword(text, keyword)); // ["喜欢", "摸鱼", "真好", "一边"]
function Keyword(text, keys) {
  return keys.reduce((t,v) => text.some(item => item.includes(v)) ? [...t, v] : t, [])
} */

// 字符串反转
/* const str = "reduce最牛逼";
console.log(ReverseStr(str)); // "逼牛最ecuder"
function ReverseStr(str) {
  return str.split("").reduceRight((t,v) => [...t, v], []).join("");
}
 */

 // 数字千分化
function ThousandNum(num = 0) {
  const str = (+num).toString().split(".");
  const int = nums => nums.split("").reverse().reduceRight((t, v, i) => t + (i % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
  const dec = nums => nums.split("").reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
  return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0]);
}

// 斐波那契数列
// Fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// function Fibonacci(len = 2) {
//   const arr = [...new Array(len).keys()];
//   return arr.reduce((t, v, i) => (i > 1 && t.push(t[i - 1] + t[i - 2]), t), [0, 1]);
// }


// URL参数反序列化
/* function ParseUrlSearch(searchUrl) {
  return searchUrl.replace(/(^\?)|(&$)/g, "").split("&").reduce((t,v) => {
    const [key, value] = v.split("=");
    t[key] = decodeURIComponent(value);
    return t;
  }, {})
}
console.log(ParseUrlSearch("?age=25&name=TYJ"));

// URL参数序列化

function StringifyUrlSearch(search = {}) {
  return Object.entries(search).reduce(
      (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
      Object.keys(search).length ? "?" : ""
  ).replace(/&$/, "");
}

StringifyUrlSearch({ age: 27, name: "YZW" }); // "?age=27&name=YZW" */

// 返回对象指定键值
/* const target = { a: 1, b: 2, c: 3, d: 4 };
const keyword = ["a", "d"];
GetKeys(target, keyword); // { a: 1, d: 4 }

function GetKeys(obj = {}, keys = []) {
  return Object.keys(obj).reduce((t, v) => (keys.includes(v) && (t[v] = obj[v]), t), {});
}
 */
// 数组转对象
/* const people = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "SZ", name: "TYJ", age: 25 }
];

const map = people.reduce((t, v) => {
  const { name, ...rest } = v;
  t[name] = rest;
  return t;
}, {}); // { YZW: {…}, TYJ: {…} } */


/* // Redux Compose函数原理
function Compose(...funs) {
  if (funs.length === 0) {
      return arg => arg;
  }
  if (funs.length === 1) {
      return funs[0];
  }
  return funs.reduce((t,v) => (...args) => t(v(...args)))
}
 */