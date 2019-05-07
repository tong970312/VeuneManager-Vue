<template>
    <div id="main">
      <el-form ref="form" style="width: 500px" :model="form" label-width="120px">
        <el-form-item label="管理员编号">
          <el-input v-model="form.id" readonly=""></el-input>
        </el-form-item>
        <el-form-item label="管理员姓名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)">提交修改</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {getSelfInfo,update} from "../api/jiekou";
  export default {
    data() {
      return {
        form: {
          id:'',
          username: '',
          password: '',
          phone:''
        }
      }
    },
    methods: {
      onSubmit(form) {
        var jsonStr = {"username":form.username,"password":form.password,"id":form.id,"phone":form.phone};
       // console.log(form);
        update(jsonStr).then(response=>{
          console.log(response)
        //  this.form = response.data.data.list;
          alert("修改成功")
        })
      }
    },
    created() {
      getSelfInfo().then(response=>{
        this.form = response.data.data;
      });
    }

  }
</script>

<style>
  #main{
    width: 1365px;
    height: 900px;
    min-width: 800px;
    margin-left: 1px;
  }
</style>
