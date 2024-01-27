/*
 * @FilePath: /test/paths/1.js
 * @Description: 
 */
const path = require('path')
const { resolve } = path
// console.log(__dirname);// /Users/admin/Desktop/code/11/test/paths
// console.log(__filename); // /Users/admin/Desktop/code/11/test/paths/1.js

// console.log(resolve(__dirname, 'index.js'));
console.log(path.resolve('./index.js'));
console.log(path.resolve('index.js'));