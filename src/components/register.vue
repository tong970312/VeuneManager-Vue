<template>
  <div id="register">
    <!--<router-link to="manager">Home</router-link>-->
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
      </el-form>
    </div>
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
              var reqStatus = response.data.status;
              var reqMsg = response.data.msg;
              if (reqStatus===1){
                alert(reqMsg)
              }
              if (reqStatus===0){
                alert(reqMsg)
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
    justify-content: center;

  }

  #registerForm {
    margin-top: 250px;
    width: 400px;
    height: 300px;
    display: flex;
    background-color: rgba(255, 234, 157, 0.24);
  }
</style>
