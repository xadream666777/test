/**  在console中执行此脚本  */ 

// 获取所有菜单项
var sectionList = document.querySelectorAll('.section');
var secLength = sectionList.length
var idx = 0;

var timer = null
var contentArea = null;
var errorCount = 0
async function fn(){
    // 遍历完了 或者 执行10次还没有获取到数据
    if(idx >= secLength || errorCount > 10){
        timer && clearInterval(timer)
        return;
    }

    contentArea = document.querySelector('.markdown-body');
    if(!contentArea){
        errorCount++
        return;
    }else{
        errorCount = 0;
    }

    // 内容区域存在
    // 提交到服务器
    var data = {
        articleDir:'神光nest', // 文章名字
        name: '',   // 当前章节名字
        content: '' // 当前章节内容
    }
    
    // 获取当前章节名字
    var sectionName = sectionList[idx++].querySelector('.title').innerText
    data.name = `${idx}-${sectionName}`
    
    // 获取当前文章标题
    var articleDir = document.querySelectorAll('.title .jj-link')[0].innerText;
    data.articleDir = articleDir;
    
    // 获取内容
    var contentArea = document.querySelector('.markdown-body');
    data.content = contentArea.outerHTML;
    
    await fetch("http://localhost:3000/save", {
      "body": JSON.stringify(data),
      "method": "post",
      "mode": "cors",
      "headers":{
            'Content-Type':'application/json'
      },  
    })

    sectionList[idx].click();
}
sectionList[0].click();
timer = setInterval(fn,1000)





