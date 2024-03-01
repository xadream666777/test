// 创建一个对象用于存储菜单内容
var menuContentMap = {};
// 获取所有菜单项
var sectionList = document.querySelectorAll('.section');
var secLength = sectionList.length
var idx = 1;

var timer = null
var contentArea = document.querySelector('.markdown-body');
var errorCount = 0
function fn(){
    // 遍历完了 或者 执行10次还没有获取到数据
    if(idx >= sectionList.length || errorCount > 10){
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
    menuContentMap[idx++] = contentArea.outerHTML;
    sectionList[idx].click();
}
sectionList[0].click();
timer = setInterval(fn,1000)


// 输出菜单内容对象
console.log(menuContentMap);
