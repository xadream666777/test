/*
 * @FilePath: /test/1.js
 * @Description: 
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// const txt1 = fs.readFileSync('./1.txt').toString()
// const edit = txt1 + '2'
// fs.writeFileSync('./1.txt',edit)
// console.log(txt1,txt1.toString());

const isExist = fs.existsSync('./1.txt')
// console.log(isExist);

// fs.open('./1.txt','r+',(err,fd)=>{})

// const watch = fs.watch('./1.txt',(event,filename)=>{
//     console.log(event,filename);
// })

const nodeVersion = execSync('node -v')
console.log(nodeVersion.toString());
// execSync('start chrome http://www.baidu.com --incognito')
// execSync("start chrome http://www.baidu.com --incognito")
// console.log(process.cwd());
// console.log(process.argv); // 获取执行进程后的参数
// console.log(process.env); // 获取环境变量