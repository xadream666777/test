<!--
 * @FilePath: /test/npm.md
 * @Description: 
-->
npm yarn pnpm  都是是node管理器
1. npm init -y 初始化(-y代表走默认配置，一般-y就可以了)  会生成 package.json文件
    初始化之后就可以去安装你需要的依赖了 比如lodash
2. npm install lodash 或者 yarn add lodash 或者 pnpm i lodash
    安装完了之后
    2.1 node_modules下面就会有一个lodash文件夹，这个依赖就下载下来了，注意：node_modules下面的所有文件不要提交到公司项目的git
    2.2 package.json里面的"dependencies" 就会有  "lodash": "^4.17.21" 这是你当前安装lodash的版本
3. 使用lodash  vue里面就import lodash from 'lodash'; node就 const lodash = require('lodash')
4. npm uninstall lodash 卸载 或者 yarn remove lodash 
5. npm update lodash 更新
6. npm install lodash@4.17.21 安装指定版本
7. npm install lodash@4.17.21 -D 这个是安装到devDependencies  -D安装不会打包 
8. npm install lodash@4.17.21 -g 安装到全局

"scripts": {
    "dev": "quasar dev",
    "build": "quasar build",
},
vue项目里面package.json里面scripts 
如果有 "dev" 就跑: "npm run dev"或者“yarn dev”
如果有 "serve": "npm run serve"或者“yarn serve

这些都是node_modules下面的依赖，不要提交的git.
在文件根目录下新建一个.gitignore文件 写入 node_modules