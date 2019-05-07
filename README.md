# demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```
build	项目构建(webpack)相关代码
config	配置目录，包括端口号等。我们初学可以使用默认的。
node_modules	npm 加载的项目依赖模块

src	  这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
      assets: 放置一些图片，如logo等。
      components: 目录里面放了一个组件文件，可以不用。
      App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
      main.js: 项目的核心文件。
      
static	静态资源目录，如图片、字体等。
test	初始测试目录，可删除
.xxxx文件	这些是一些配置文件，包括语法配置，git配置等。
index.html	首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
```
```
src/App.vue

<!-- 展示模板 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>
 
<script>
// 导入组件
import Hello from './components/Hello'
export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>
<!-- 样式代码 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
------------------------
修改初始化的项目
vue项目本地启动后出现cannot GET /
修改config目录下index.js 里面的assetsPublicPath为  assetsPublicPath:'/'

v-html 可以显示dom效果
v-blind 为页面元素绑定属性 -->可以用 : 代替
绑定的内容放在new Vue的 data中

v-on 绑定事件  -->可以用 @ 代替
放在new Vue的methods中

```
```
1.config -index.js 
  添加代理
   "/test":{
          //接口服务器 --到端口
          target:"http://localhost:8181",
          secure:false,
          changeOrigin:true,
          pathRewrite:{
            '^/test':''
          }
        }
2.config  -dev.env.js
  module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    //上两行默认
    
    //添加这条代码  导入代理
    TEST_URL:'"/test"'
  });        
  
3.在src目录下创建 axios目录,在其中添加index.js(名字自定义)
  //添加以下代码创建axios实例
  import  axios from 'axios'
  //创建axios实例
  const service = axios.create({
    baseURL:process.env.TEST_URL
  });
  export  default service
  
4.创建api目录,创建jiekou.js(自定义名字)
  //导入axios实例
  import axios from '@/axios'
   //前端需要多少个function
  export function test(data) {
        return axios({
          url:'/employee/getAll',
          data:data,
          method:'get',
        })
  }

  
```
