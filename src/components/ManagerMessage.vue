<template>
	<div>
		<el-table :data="tableData" style="width: 100%;" align="center">
			<el-table-column prop="adminname" label="发布人" width="300">
			</el-table-column>
			<el-table-column prop="noticemsg" label="信息内容" width="300">
			</el-table-column>
			<el-table-column prop="createtime" label="发布时间" width="300">
			</el-table-column>
      <!--<el-table-column width="90" label="操作" align="center">-->
        <!--<template slot-scope="scope"  >-->
          <!--<el-button-->
            <!--size="mini"-->
            <!--type="danger"-->
            <!--@click="deleteMessage(scope.$index, scope.row)">删除</el-button>-->
        <!--</template>-->
      <!--</el-table-column>-->
		</el-table>
    <div id="page" style="position: absolute;left: 600px;bottom: 100px">
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
	import { getMessage,deleteMsg} from "../api/jiekou";

	export default {
    data() {
      return {
        Count: 1,
        currentPage: 1,
        pageSize: 10,
        tableData: []
      }
    },
    created() {
      this.getMessage_ajax()
    },
    methods: {
      getMessage_ajax() {
        getMessage().then(res => {
          console.log(res.data.data)
          this.tableData = res.data.data
        }).catch(err => {
          alert(err)
        })
      },
      deleteMessage(index, row) {
        console.log(row.id)
      //
      // deleteMsg({"messageId":row.id}).then(response=>{
      //   alert(response.data.msg)
      //
      //
      //   });
      }
  }
	}
</script>

<style>

</style>
