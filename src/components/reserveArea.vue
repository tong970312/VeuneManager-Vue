<template>
	<div>
		<el-table :data="tableList" >
			<el-table-column prop="id" label="场地编号" width="80" align="center">
			</el-table-column>
			<el-table-column prop="areaname" label="场地名称" width="100" align="center">
			</el-table-column>
			<el-table-column prop="detail" label="场地详情" width="" align="center">
			</el-table-column>
			<el-table-column prop="location" label="场地位置" width="" align="center">
			</el-table-column>
      <el-table-column prop="status" label="当前状态" width="80" align="center">
			</el-table-column>
      <!--<el-table-column prop="startTime" label="使用开始时间" width="" align="center">-->
      <!--</el-table-column>-->
      <el-table-column prop="endtime" label="使用结束时间" width="" align="center">
			</el-table-column>
      <el-table-column prop="price" label="场地单价/小时" width="" align="center">
      </el-table-column>

			<el-table-column prop="image" label="场地图片" width="" align="center">
				<template slot-scope="scope">
					<img src="@/picture/timg.jpg" alt="" style="width: 100px;height: 60px" />
				</template>
			</el-table-column>

			<el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">预定场地</el-button>
          </template>
				<!--<template slot-scope="scope">-->
        <!--<el-button-->
          <!--size="mini"-->
          <!--type="primary"-->
          <!--@click=" dialogFormVisible = !dialogFormVisible">预定场地</el-button>-->
        <!--</template>-->

			</el-table-column>
    </el-table>
    <el-dialog title="预定场地" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="场地名称" :label-width="formLabelWidth">
          <el-input v-model="formData.areaname" auto-complete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="场地详情" :label-width="formLabelWidth">
          <el-input v-model="formData.detail" auto-complete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="场地位置" :label-width="formLabelWidth">
          <el-input v-model="formData.location" auto-complete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="场地单价/小时" :label-width="formLabelWidth">
          <el-input v-model="formData.price" auto-complete="off" readonly></el-input>
        </el-form-item>
        <!--<el-form-item label="使用时场" :label-width="formLabelWidth">-->
          <!--<el-input v-model="formData.useTime" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="选择使用时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.startTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
         <el-form-item label="选择结束时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="formData.endTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>


      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" >取 消</el-button>
        <el-button type="primary" @click="submit(formData)">确 定</el-button>
      </div>
    </el-dialog>
    <div id="page" style="position: absolute;left: 600px;bottom: 100px">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="Count">
      </el-pagination>
    </div>

	</div>
</template>
<script>
import {getVenueList,addOrder} from "../api/jiekou";

export default {
		data() {
			return {
				Count: 1,
				currentPage: 1,
				pageSize: 5,
        dialogFormVisible: false,
        currentTime:'',
        tableList: [{
					id: 5,
					areaname: "场地1",
					detail: "双鱼",
					location: "A区1号",
					image: "111",
					price: "10.00",
					status: "",
					ifdelete: "否",
					startTime: "空",
					endtime: "空",

				}],

				formLabelWidth: '120px',
				formData: {
					areaname:'',
					detail:"",
					location:'',
					price:'',
          useTime:'',
          startTime:'',
          endTime:''
				},
				imageUrl: '',
				img:""
			}
		},

		methods: {
			submit(formData){
        var addOrderDTO={"venueId":formData.id,"startTime":formData.startTime,"endTime":formData.endTime}
        addOrder(addOrderDTO).then(response=>{
          this.dialogFormVisible = false
          alert(response.data.msg)
        })

				},
        handleEdit(index, row) {

			  this.formData = row;
			//  this.formData.startTime = row.endtime;
			  this.dialogFormVisible = true;
          // if (s==="已被占用") {
          //   this.dialogFormVisible = false;
          // }else{
          //   this.formData = row;
          //   this.dialogFormVisible = true;
          // }

        },


},
      created() {
        getVenueList().then(response=>{
         console.log(response.data.data.list)
          this.tableList = response.data.data.list

        })
      },

      handleCurrentChange(val,pageSize) {
            // console.log(`当前页: ${val}`);
            // getVenueList({"pageNum":val,"pageSize":pageSize}).then(response=>{
            //   this.tableList = response.data.data.list;
            //   this.Currenttotal =response.data.data.total;
            //   console.log("加载时本页总数"+this.Currenttotal);
            //   console.log(response)
            // });
          },





}

</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
