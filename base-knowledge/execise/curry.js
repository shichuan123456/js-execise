// 学习https://juejin.im/post/5e6ed0bc6fb9a07c8334f75c 笔记小结

/* 
  函数柯里化是函数式编程里面的概念，即：只传递一部分参数来调用它，让它返回一个函数去处理剩下的参数
*/

const add = x => y => z =>  x + y + z;
add(1)(2)(3);


const curry = (fn, ...args) => 
   // 函数的参数个数可以直接通过函数数的.length属性来访问
   args.length >= fn.length // 这个判断很关键！！！
   // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
   ? fn(...args)
   /**
    * 传入的参数小于原始函数fn的参数个数时
    * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
   */
   : (..._args) => curry(fn, ...args, ..._args);
  
   

function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));

/* 柯里化的作用：
   参数复用、提前返回和 延迟执行
   参数复用是指之前参数的存储，提前返回是指在计算最终结果之前，延迟执行是指等到所有参数输入之后执行
*/