<template>
    <div id="main">
      <el-table
        :data="tableList"
        style="width: 100%;margin-left: 10px">
        <el-table-column
          prop="orderNo"
          label="订单编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户姓名"
          width="110">
        </el-table-column>
        <el-table-column
          prop="areaid"
          label="场地编号"
          width="110">
        </el-table-column>
         <el-table-column
          prop="location"
          label="场地位置"
          width="200">
        </el-table-column>
        <el-table-column
          prop="price"
          label="场地单价/小时"
          width="150">
        </el-table-column>
        <el-table-column
          prop="starttime"
          label="开始时间"
          width="200">
        </el-table-column>
        <el-table-column
          prop="usetime"
          label="使用时长"
          width="110">
        </el-table-column>
        <el-table-column
          prop="payment"
          label="支付金额"
          width="110">
        </el-table-column>
        <el-table-column
          prop="createtime"
          label="订单创建时间"
          width="220">
        </el-table-column>

   <!--     <el-table-column>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>-->
      </el-table>

      <!--换页-->
      <div id="page">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="Count">
        </el-pagination>
      </div>
    </div>
</template>
<script>
  import {selectOrderPay} from "../api/jiekou";
  export default {
    data() {
      return {
        Count:1,
        currentPage:1,
        pageSize:10,
        tableList:""
      }
    },
    methods: {
      // handleCurrentChange(val) {
      //   console.log(`当前页: ${val}`);
      //   getAll({"pageNum":val}).then(response=>{
      //     this.tableList = response.data.content.data.list;
      //     this.Currenttotal =response.data.content.data.total;
      //     console.log("加载时本页总数"+this.Currenttotal);
      //     console.log(response)
      //   });
      // },
      // handleDelete(index, row) {
      //   userDeleteById({"id":row.id}).then(response=>{
      //     console.log(response);
      //     alert("删除成功");
      //     window.location.reload();
      //   })
      // }
    },
      /*加载页面时调用*/
      created() {
        selectOrderPay().then(response=>{
          this.tableList = response.data.data.list;
          console.log(this.tableList)
         /* this.Currenttotal =response.data.content.data.total;*/
         /*   console.log("初始化的"+this.Currenttotal+"条数");
          console.log("初始化的页数"+response.data.content.data.pageNum)*/
        });

       //  getTotalCount().then(response=>{
       //   this.Count = response.data.content.data;
       // /*   console.log(response.data.content.data);
       //    console.log("总数据个数")*/
       //  })
      }
    }
</script>

<style>


  #page{
    position: fixed;
    bottom: 100px;
    left: 450px;
  }
  #main{
    width: 1365px;
    height: 692px;
    min-width: 800px;
    margin-left: 1px;
  }
  .el-table td, .el-table th {
    padding: 8px 0;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
  }
</style>
