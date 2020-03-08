// 学习 「从源码中学习」Vue源码中的JS骚操作 https://juejin.im/post/5c73554cf265da2de33f2a32 练习

 const inBrowser = typeof window !== "undefined"
 const hasProto = '__proto__' in {}

 const UA = inBrowser && window.navigator.userAgent.toLowerCase()

 const isIE = UA && /msie|trident/.test(UA)
 const isEdge = UA && /edge\//.test(UA)
 const isChrome = UA && /chrome\/d+/.test(UA) && !isEdge
 const isIE9 = UA && UA.indexOf('msie 9.0') > 0;

 function isReserved(str){
  const c = ( str + '' ).charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

 function fearNotLetter(str) {
  //将字符串转为ASCII码，并存入数组
  let arr=[];
  for(let i=0; i<str.length; i++){
    arr.push(str.charCodeAt(i));
  }

  for(let j=1; j<arr.length; j++){
    let num=arr[j]-arr[j-1];
    //判断后一项减前一项是否为1，若不为1，则缺失该字符的前一项
    if(num!=1){
      //将缺失字符ASCII转为字符并返回 
      return String.fromCharCode(arr[j]-1); 
    }
  }
  return undefined;
}

const reg = /-(\w)/g;
function camelize(str) {
  return str.replace(reg, (_, c) => c ? c.toUpperCase() :'')
}

console.log(camelize('a-b-c-sfds-afds'));

var data = {
  name:"niuzai",
  info:{
    age:18,
    sex:"male"
  }
};


function toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}


function mergeHook (parentVal,childVal) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

function firstUpperCase(str){
  return str.charAt(0).toUpperCase() + str.slice(1)
}
// $1是分组匹配出来的结果
const hyphenateRE = /\B([A-Z])/g
const hyphenate = (str) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
  // return str.replace(hyphenateRE, (_, c) => '-' + c.toLowerCase())
}

function isPrimitive (value){
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

function toNumber(val) {
  var n = parseFloat(val)
  return isNaN(n) ? val : n;
}

function isRegExp (v) {
  return Object.prototype.toString.call(v) === '[object RegExp]'
}

function isValidArrayIndex (val) {
  const n = parseFloat(String(val))
  // n >= 0 && Math.floor(n) === n 保证了索引是一个大于等于 0 的整数
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function once(fn) {
  let called = false;
  return function(...arg) {
    if(!called) {
      called = true;
      fn.apply(this, arg)
    }
  }
}

// 适用于纯函数
function cached(fn) {
  const cache = Object.create(null)  //创建一个干净的对象，这点还是比较重要的
  return (function cachedFn (str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  })
}


export function looseEqual (a, b) {
  // 当 a === b 时，返回true
  if (a === b) return true
  // 否则进入isObject判断
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  // 判断是否都为Object类型
  if (isObjectA && isObjectB) {
    try {
      // 调用 Array.isArray() 方法，再次进行判断
      // isObject 不能区分是真数组还是对象（typeof）
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      // 判断是否都为数组
      if (isArrayA && isArrayB) {
        // 对比a、bs数组的长度
        return a.length === b.length && a.every((e, i) => {
          // 调用 looseEqual 进入递归
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        // 均不为数组，获取a、b对象的key集合
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        // 对比a、b对象的key集合长度
        return keysA.length === keysB.length && keysA.every(key => {
          //长度相等，则调用 looseEqual 进入递归
          return looseEqual(a[key], b[key])
        })
      } else {
        // 如果a、b中一个是数组，一个是对象，直接返回 false
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
