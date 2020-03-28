function insert(arr) {
  for(let i = 1, len = arr.length; i < len - 1 ; i++) {
    key = arr[i];
    let j = i;
    while(j > 0 && key < arr[j-1]) { // 这里是key
      arr[j] = arr[j-1];
      j = j - 1;
    }
    if(j !== i) arr[j] = key;
  }
  console.log(arr)
}

insert([1,5,4,2,2,2,2,8]);