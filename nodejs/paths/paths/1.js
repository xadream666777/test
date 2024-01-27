/*
 * @FilePath: /test/paths/paths/1.js
 * @Description: 
 */
const path = require('path')
const { resolve,join } = path

// console.log(path.resolve('../index.js'));
// 获取 public的绝对路径                              /Users/admin/Desktop/code/11/test/static/public
// console.log(111,resolve('static/public/')); // 绝对路径  /Users/admin/Desktop/code/11/test/static/public

// // 相等
// console.log(__dirname); // Users/admin/Desktop/code/11/test/paths/paths
// console.log(resolve(__dirname)); // 绝对路径  /Users/admin/Desktop/code/11/test/paths/paths  当前文件夹 绝对路径

// console.log(resolve()); // /Users/admin/Desktop/code/11/test
// // console.log(join(__dirname,'/static/public/'));///Users/admin/Desktop/code/11/test/paths/paths/static/public/


// console.log(path.join('/a','b')); // /a/b




// console.log(__dirname);
// console.log(__filename);

console.log(resolve()); // 根目录的绝对路径
console.log(path.extname(__filename)); // .js

// 互补
console.log(path.basename(__filename)); // 1.js
console.log(path.dirname(__filename)); // /Users/admin/Desktop/code/11/test/paths/paths

console.log('parse',path.parse(__filename));
console.log();
console.log();
console.log();