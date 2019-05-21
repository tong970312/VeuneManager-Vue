<template>
  <div id="login">
    <!--<router-link to="manager">Home</router-link>-->
    <div id="left">
      <h1 style="margin-top: 50px">欢迎使用</h1>
      <h2>君悦乒乓球场馆管理系统</h2>
      <div id="loginForm">
        <el-form :model="loginData" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm"
                 style="margin-top: 45px">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="loginData.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="loginData.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" @click="registerAccount">注册</el-button>
            <el-button type="primary" @click="submitForm(loginData)">登录</el-button>
          </el-form-item>
          <h4 style="color: red">{{message}}</h4>
        </el-form>
      </div>
    </div>
    <div id="bgimg"></div>
  </div>
</template>
<script>
  import {login} from '../api/jiekou'
  export default {
    data() {

      var validatename = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.loginData.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }

      };
      return {
        message:'',
        loginData: {
          name: '',
          checkPass: '',
        },
        rules2: {
          name: [
            {validator: validatename, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(loginData) {
        var userDTO = {"username": loginData.name, "password": loginData.checkPass};
        //   console.log(userDTO);
        login(userDTO).then(response => {
          this.message = response.data.msg;
          var role = response.data.data.role;
          if (role === 0) {
             localStorage.setItem("rise", "false");
            this.$router.push({path:"/manager/homeImage"});
          }
          if (role === 1) {
             localStorage.setItem("rise", "true");
            this.$router.push({path:"/manager/homeImage"});
          }

        })
      },
      registerAccount:function () {
           this.$router.push({path:"/register"});
      }
    }

  }
</script>

<style>
  #left{
    width: 400px;
    height: 100%;
    /*background-color: rgba(44, 116, 185, 0.25);*/

  }
  #login {
    width: 1600px;
    height: 789px;
    display: flex;
  }

  #loginForm {
    position: relative;
    top: 150px;
    left: 0;
    width: 400px;
    height: 250px;
    display: flex;
    background-color: rgba(226, 218, 57, 0.25);
  }
  #bgimg{
    width: 1200px;
    height: 100%;
    background-image: url("../picture/2018052801172135.jpg");
    background-size: 100% 100%;
  }
</style>
