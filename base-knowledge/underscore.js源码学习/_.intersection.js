// break跳出循环， continue跳过本次循环，继续下次
const intersection = function (array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength(array); i < length; i++){
    var item = array[i];
    if (_.contains(result, item)) continue;
    var j;
    //
    for (j = 1; j < argsLength; j++) {
      if (!_.contains(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
};
  

