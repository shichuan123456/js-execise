// 学习https://juejin.im/post/5db62f1bf265da4d560906ab 练习小结

// // 数组去重
// const arr = [1,2,3,4,5,3,2,3,4,3,2,5]
// // console.log([...new Set(arr)], Array.from(new Set(arr)));

// // 替换数组特定向
// // console.log((arr.splice(0,2, 'aaa', 'bbb'), arr));

// // Array.from 模仿 map方法
// const arr1 = [
//   {name: "a", age: 18},
//   {name: "b", age: 19},
//   {name: "c", age: 20},
//   {name: "d", age: 21},
// ]
// // console.log(arr1.map(item => item.name), Array.from(arr1, item => item.name), arr1.reduce((t,v) => [...t, v.name],[]));

// // 置空数组

// // console.log(arr1.length = 0, arr1);

// // 填充数组

// // console.log(Array(10).fill(1));
// // console.log(Array.from({length:10}, (v, i) => i));

// // function Array() {
// //   if(!(this instanceof arguments.callee)) {
// //     return new arguments.callee(arguments)
// //   } 
// // }

// // 数组合并
// // [...arr, ...arr1]

// // 数组交集
// const arr2 = [1,2,3,1,2,3,4,56,6,4]
// // console.log([...new Set(arr)].filter(item => arr2.includes(item)));
// // console.log([...new Set(arr)].reduce((t, v) => arr2.includes(v) ? [...t, v]: t, []));

// // 删除虚数
// // arr1.filter(Boolean) NaN 0 '' false undefined null

// //获取随机数
// arr[Math.floor(Math.random() * arr.length)]

// // 反转数组
// // arr.reverse()

// // lastIndexOf indexOf

// // 数组求和
// // arr.reduce((t,v) => t + v,0)

// 学习 https://juejin.im/post/5dcb425f6fb9a04aa20361d8 练习小结
/* 
  14个copy数组的方法
*/
const arr = [1,2,3,4,5]
console.log(arr.slice());
console.log([...arr]);
console.log(arr.map(v => v));
console.log(Array.from(arr, v => v));
console.log(Array.from(new Set(arr)));
console.log(Array.of(...arr));
console.log(new Array(...arr));
const [...copy] = arr;
console.log(copy);
console.log(arr.concat());
let newArray = [];
console.log(newArray.push(...arr),arr);
console.log(newArray.unshift(...arr),arr);
console.log(arr.reduce((t,v) => [...t, v], []));
newArray.length = 0
console.log(Array.prototype.push.apply(newArray, arr), newArray);





