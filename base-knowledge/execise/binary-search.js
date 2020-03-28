// 二分搜索 ，1000个数需要搜索几次？
function biSearch(arr, target) {
  let l = 0, r = arr.length - 1, guess;
  while(l <= r && target !== guess) {
    let mid = l + Math.floor((r - l)/2);
    guess = arr[mid]
    if(guess === target) {
      return true;
    } else if(guess > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return false
}

console.log(biSearch([1,2,3,4,5],4))