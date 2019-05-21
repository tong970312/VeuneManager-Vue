<template>
  <div id="register">
    <!--<router-link to="manager">Home</router-link>-->
    <div id="left">
      <h1 style="margin-top: 50px">欢迎使用</h1>
      <h2>君悦乒乓球场馆管理系统</h2>
      <h2>请填写信息进行注册</h2>
      <div id="registerForm">
        <el-form :model="registerData" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm"
                 style="margin-top: 45px">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="registerData.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="registerData.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input type="text" v-model="registerData.phone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" @click="accountRegister(registerData)">注册</el-button>
            <el-button type="primary" @click="goback">返回</el-button>
          </el-form-item>
          <h4 style="color: red">{{message}}</h4>
        </el-form>
      </div>
    </div>
    <div id="bgimg"></div>
  </div>
</template>

<script>
  import {register} from "../api/jiekou";
  export default {
        name: "register",
        phoneExit:"",
      data() {
        var validatename = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          }else{
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
        var validatephone = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入手机号'));
          } else {
            callback();
          }

        };
        return {
          message:"",
          registerData: {
            name: '',
            checkPass: '',
            phone:''
          },
          rules2: {
            name: [
              {validator: validatename, trigger: 'blur'}
            ],
            checkPass: [
              {validator: validatePass, trigger: 'blur'}
            ],
            phone: [
              {validator: validatephone, trigger: 'blur'}
            ],
          }
        };
      },
      methods:{
        accountRegister:function (registerData) {
            var RegisterDTO = {
              "username":registerData.name,
              "password":registerData.checkPass,
              "phone":registerData.phone};

            register(RegisterDTO).then(response=>{
              this.message = response.data.msg;
              var reqStatus = response.data.status;
              if (reqStatus===1){
              }
              if (reqStatus===0){
                this.$router.push({path:"/"});
              }
            })
        },
        goback:function () {
          this.$router.push({path:"/"});
        }
      }
    }
</script>

<style >
  #register {
    width: 1600px;
    height: 789px;
    display: flex;
  }
  #left{
    width: 400px;
    height: 100%;
    /*background-color: rgba(44, 116, 185, 0.25);*/

  }
  #registerForm {
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
    background-image: url("../picture/2018052801171054.jpg");
    background-size: 100% 100%;
  }
</style>
