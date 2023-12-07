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




const params = {
    name : '12',
    age : 18
}
// 校验参数方法
const checkParams = (params)=>{
    const {name,age} = params
    return new Promise((resolve,reject)=>{
        if(typeof name !== 'string'){
            reject(`name参数错误`)
        }
        if(typeof age !== 'number'){
            reject(`age参数错误`)
        }
        resolve('校验成功')
        
    })        
}

// 提交  async搭配await  await后面是个promise
const submit = async ()=>{
    try{
        await checkParams(params)
        // 上面校验通过后才会走下面 不然不会走
        console.log('提交成功');
        // ajax()
    }catch(err){
        console.log(err);
    }
}

submit()
