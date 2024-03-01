// // 创建一个对象用于存储菜单内容
// var menuContentMap = {};
// // 获取所有菜单项
// var sectionList = document.querySelectorAll('.section');
// var secLength = sectionList.length
// var idx = 1;

// var timer = null
// var contentArea = document.querySelector('.markdown-body');
// var errorCount = 0
// function fn(){
//     // 遍历完了 或者 执行10次还没有获取到数据
//     if(idx >= sectionList.length || errorCount > 10){
//         timer && clearInterval(timer)
//         return;
//     }

//     contentArea = document.querySelector('.markdown-body');
//     if(!contentArea){
//         errorCount++
//         return;
//     }else{
//         errorCount = 0;
//     }

//     // 内容区域存在
//     // 提交到服务器
//     menuContentMap[idx++] = contentArea.outerHTML;
//     sectionList[idx].click();
// }
// sectionList[0].click();
// timer = setInterval(fn,1000)


// // 输出菜单内容对象
// console.log(menuContentMap);


const fs = require('fs')
var articleDir = '文章'
const path = require('path')
    // 检查文件夹是否存在
    if (!fs.existsSync(articleDir)) {
        // 如果不存在，则创建文件夹
        fs.mkdirSync(articleDir);
        console.log('文件夹已创建');
    } 
fs.writeFileSync(path.join(articleDir,'b.html'),'123')