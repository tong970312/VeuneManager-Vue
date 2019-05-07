<template>
 <div>
   <el-input
     type="textarea"
     placeholder="请输入内容"
     v-model="textarea"
     maxlength="50"
     show-word-limit
     style="width: 600px"
   >
   </el-input>
   <el-button type="primary" style="position: absolute;top: 150px;left: 45%" @click="sendMessage(textarea)">发布通知</el-button>
   <el-button type="danger" style="position: absolute;top: 150px;left: 55%" @click="cleanMsg">清空内容</el-button>

 </div>
</template>

<script>
  import {send_notice} from "../api/jiekou";
    export default {
      data() {
        return {
          text: '',
          textarea: ''
        }
      },
      methods:{
        sendMessage:function (notice) {
          send_notice({"data":notice}).then(res=>{
            console.log(res);
            alert("发布成功")
          }).catch(err=>{
             alert("发布失败,请检查")
          })
        },
        cleanMsg:function () {
          this.textarea='';
        }
      }
    }
</script>

<style scoped>

</style>
