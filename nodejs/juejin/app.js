

const express = require('express')
const app = express()

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json({limit:'10mb'})
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const fs = require('fs');
const path = require('path');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});

app.get('/',function(req,res){
    res.send('helloworld')
})
app.post('/save',jsonParser,function(req,res){
    const body = req.body;
    const name = body.name;
    const content = body.content;
    const articleDir = body.articleDir;
    // 检查文件夹是否存在
    if (!fs.existsSync(articleDir)) {
        // 如果不存在，则创建文件夹
        fs.mkdirSync(articleDir);
        console.log('文件夹已创建');
    } 

    const filePath = path.join(articleDir, `${name}.html`)
    fs.writeFileSync( filePath, getHtml(content),function(err){
        if(err){
            console.log(err);
        }
    })

    res.send('ok')
})


function getHtml(content){
    const top = `<header>
        <style>
            .markdown-body{
                width: 80%;
                margin: auto;
            }
            .code-block-extension-header{
                display: none;
            }
        </style>
    </header>`
    return top + content;
}

app.listen(3000,()=>{
    console.log(123);
})