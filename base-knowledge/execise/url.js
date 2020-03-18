// 学习 https://juejin.im/post/5d038c9051882548ac439933 小结  

let searchUrl = '?wd=蔡徐坤&skill=篮球&year=2019&';
let searchParams = new URLSearchParams(searchUrl);

for (const item of searchParams) {
  console.log(item)
}
// console.log(typeof searchParams);
// console.log(searchParams.get('year'));
// console.log(searchParams.set("name", "robert"))
// console.log(searchParams.set("name", "robert1"))
// console.log(searchParams.has("year"))
// console.log(searchParams.delete("year"))
// console.log(searchParams.has("year"))
// console.log(searchParams.toString())
// console.log(decodeURIComponent(decodeURIComponent(searchParams.toString())))


// 学习https://juejin.im/post/5c9d2ed3e51d45386c068d0f小结

/* 
  后端解析数组有以下几种方法：
  ---index: ids[0]=1&ids[1]=2&ids[2]=3
  ---comma:ids=1,2,3
  ---none: ids=1&ids=2&ids=3
  ---bracket: ids[]=1&ids[]=2&ids[]=3
*/

const url = new URL('http://www.pushme.top/users?sort_by=asc#page=userlist')
console.log(url)

/* 
  {
    hash: "#page=userlist"
    host: "www.pushme.top"
    hostname: "www.pushme.top"
    href: "http://www.pushme.top/users?sort_by=asc#page=userlist"
    origin: "http://www.pushme.top"
    password: ""
    pathname: "/users"
    port: ""
    protocol: "http:"
    search: "?sort_by=asc"
    searchParams: URLSearchParams {}
    username: ""
}
*/

const query = 'id=1&sort=asc&hello=world';
// 对 & 分割取得数据对
const data = query.split('&').reduce((data,keyValue) => {
    const [ key, value ] = keyValue.split('=');
    return (data[key] = value, data);
}, {});

// 输出 {id: "1", sort: "asc", hello: "world"}
console.log(data);

/////////////////////////////////////////////////////////////////////////////
let redirect = 'www.test.com?hello=world&id=1';
redirect = encodeURIComponent(redirect);

let url = `http://www.pushmetop.com?redirect=${redirect}`;
url = new URL(url)

// 输出: www.test.com?hello=world&id=1
console.log(url.searchParams.get('redirect'))

/* 
  hash 的改变不会引起页面的刷新

*/

//  http://username:password@www.pushme.top/test/blah?something=123
