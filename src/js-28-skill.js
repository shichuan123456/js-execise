// 学习 https://juejin.im/post/5cef46226fb9a07eaf2b7516 小结
// 数据类型检测

/* const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType('Array');
const isFunction = isType('Function');
console.log(isArray([1,2,3]), isFunction(() => {})); */

// 循环实现map方法


 /*  const selfMap = function(fn, context) {
    const source = Array.prototype.slice.call(this);
    const result = [];
    source.forEach((v, i, source) => {
      result.push(fn.call(context, v, i, source))
    })
    return result;
  } 
  const selfMap = function(fn, context) {
    const source = Array.prototype.slice.call(this);
    return source.reduce((t,v, i, source) => [...t, fn.call(context, v, i, source)], []);
  }

  Array.prototype.selfMap = selfMap

  console.log([1,2,3,4].selfMap((v) => v*2));
   */

  // 循环实现数组 filter 方法
/*   const selfFilter = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
      fn.call(context, arr[i], i, this) && filteredArr.push(arr[i])
    }
    return filteredArr
} 

const selfFilter = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  return arr.reduce((t,v, i, arr) => fn.call(context, v, i, arr) ? [...t, v] : t, [])
}

Array.prototype.selfFilter = selfFilter

console.log([1,2,3].selfFilter((v) => v * 2 > 3));

*/

// 实现some

/* const selfSome = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  for (let i = 0; i < arr.length; i++) {
      let res = fn.call(context,arr[i],i,this)
      if(res)return true
  }
  return false
}

const selfSome1 = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  return arr.reduce((t,v, i, arr) => t || fn.call(context, v, i, arr), false)
}

Array.prototype.selfSome1 = selfSome1
console.log([1,2,3].selfSome1((v) => v * 2 > 6)); */

// reduce 实现flat方法
/* const flat = function (arr, depth = 3) {
  if(!depth) return arr
  return arr.reduce((t,v) => {
    return t.concat(Array.isArray(v) ? flat(v, depth-1): v)
  }, [])
}

let arr = [1, 2, [3, 4, [5, 6, [7, 8]], 9], 10, 11, 12, [13, 14]]
Array.prototype.flat = flat

console.log(flat(arr));
 */

 // 模拟class

/*  function Animal(name) {
  this.name = name
}

Animal.staticFunc = function () {
  console.log('staticFunc')
}
Animal.prototype.sleep = function () {
  console.log('animal is sleeping')
}

function Dog(name, color) {
  Animal.call(this, name)
  this.color = color
}

//寄生组合式继承 + 构造函数之间的继承
function inherit(subType, superType) {
  //由于JavaScript引用类型和函数按值传递的特性，不能改变subType的引用地址
  subType.prototype = Object.create(superType.prototype, {
      constructor: {
          enumerable: false,
          configurable: true,
          writable: true,
          // 指向子类，和默认的继承行为保持一致
          value: subType
      }
  })
  //子构造函数继承父构造函数(子类继承父类的静态方法和静态属性)
  Object.setPrototypeOf(subType, superType)
}

inherit(Dog, Animal)

//需要在继承之后再往Dog中添加原型方法，否则会被覆盖掉
Dog.prototype.barking = function () {
  console.log('wang!')
}


let brownTeddy = new Dog('teddy', 'brown')
Dog.staticFunc()
console.log(brownTeddy)
brownTeddy.sleep()
brownTeddy.barking() */

