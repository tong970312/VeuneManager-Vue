<template>
  <div id="login">
    <!--<router-link to="manager">Home</router-link>-->
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
      </el-form>
    </div>
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
        loginData: {
          name: '',
          checkPass: ''
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
          var role = response.data.data.role;
          if (role === 0) {
             localStorage.setItem("rise", "false");
            this.$router.push({path:"/manager"});
          }
          if (role === 1) {
             localStorage.setItem("rise", "true");
            this.$router.push({path:"/manager"});
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
  #login {
    width: 1600px;
    height: 789px;
    display: flex;
    justify-content: center;

  }

  #loginForm {
    margin-top: 250px;
    width: 400px;
    height: 250px;
    display: flex;
    background-color: rgba(255, 234, 157, 0.24);
  }
</style>
