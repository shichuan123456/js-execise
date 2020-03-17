const object = function (list, values) {
  var result = {};
  for (var i = 0, length = list.length; i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
};

const object1 = function(list,values) {
  return list.reduce((t, v, i) => (values ? t[v] = values[i] : t[v[0]] = v[1], t), {})
}

console.log(object1([['moe',30], ['larry', 40], ['curly', 50]]))
