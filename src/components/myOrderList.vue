<template>
    <div id="main">
      <el-table
        :data="tableList"
        style="width: 100%;margin-left:3px">
        <el-table-column
          prop="orderNo"
          label="我的订单编号"
          width="130">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="areaid"
          label="场地编号"
          width="80">
        </el-table-column>
         <el-table-column
          prop="location"
          label="场地位置"
          width="80">
        </el-table-column>
        <el-table-column
          prop="price"
          label="场地单价/小时"
          width="110">
        </el-table-column>
        <el-table-column
          prop="starttime"
          label="开始时间"
          width="160">
        </el-table-column>
        <el-table-column
          prop="usetime"
          label="使用时长"
          width="80">
        </el-table-column>
        <el-table-column
          prop="payment"
          label="需支付金额"
          width="90">
        </el-table-column>
        <el-table-column
          prop="paystatus"
          label="订单状态"
          width="80">
        </el-table-column>
        <el-table-column
          prop="createtime"
          label="订单创建时间"
          width="150">
        </el-table-column>
     <el-table-column width="90" label="支付操作" align="center">
          <template slot-scope="scope"  >
            <el-button
              size="mini"
              type="primary"
              @click="payment(scope.$index, scope.row)">支付</el-button>
          </template>
     </el-table-column>
     <el-table-column  width="90" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除订单</el-button>
          </template>
     </el-table-column>
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
  import { userGetOrder,deleteOrder,payOrder} from "../api/jiekou";
  export default {
    data() {
      return {
        Count:1,
        currentPage:1,
        pageSize:10,
        isDisable:true,
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
      handleDelete(index, row) {
       console.log(row)
        deleteOrder({"orderId":row.id}).then(response=>{
            alert(response.data.msg);
          userGetOrder().then(response=>{
            // console.log(response.data.data)
            this.tableList = response.data.data.list;

        });
        })
      },
      payment(index, row){
        payOrder({"orderId":row.id}).then(response=>{
          alert(response.data.msg)
          userGetOrder().then(response=>{
            // console.log(response.data.data)
            this.tableList = response.data.data.list;

          });

        })
      }
    },
      /*加载页面时调用*/
      created() {
        userGetOrder().then(response=>{
         // console.log(response.data.data)
          this.tableList = response.data.data.list;

        });

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
    width: 1323px;
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
