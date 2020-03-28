function fib(n) {
  if (n ===0 || n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}
// 转换成尾递归：单个递归调用体作为程序的最后返回
// 1 1 2 3 5 8
function fib1(n) {
  let a = 1, b = 1;
  for(let i = 2; i <= n; i++) {
    [b, a] = [a+b, b]
  }
  return b;
}

console.log(fib(10));
console.log(fib1(10));

function steps(n) {
  const s = [1,1]
  for(let i = 2; i <= n; i++) {
    s[i] = s.reduce((a,b) => a + b)
  }
  return s.pop()
}

function steps1(n) {
  if(n === 0) {
    return 1
  }

  return [...Array(n)].map((_, i) => i)
  .reduce((s, i) => {
    return steps1(i) +s }, 0
  )
}

console.log(steps1(2));
