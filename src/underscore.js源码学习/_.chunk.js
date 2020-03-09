const slice = Array.prototype.slice;
const chunk = function (array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    // 这个思路不错
    result.push(slice.call(array, i, i += count));
  }
  return result;
};
// 也可用reduce实现
const chunkReduce = function (array, count) {
  if (count == null || count < 1) return [];
  return array.reduce((t, v) => (t[t.length - 1].length === count ? t.push([v]) : t[t.length - 1].push(v), t), [[]])
};

console.log(chunkReduce([1,2,3,2,21,1,2], 2));