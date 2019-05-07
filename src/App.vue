<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
  /*第一次链接的页面  导入文件并设置components*/
  import login from'./components/login'

export default {
  name: 'App',

  components:{
    login,

  }
}

</script>
<!--样式代码-->
<style>
  *{
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
