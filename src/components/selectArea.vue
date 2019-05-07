<template>
	<div :visible.sync="Rerequest">
		<el-table :data="tableList">
			<el-table-column prop="id" label="场地编号" width="" align="center">
			</el-table-column>
			<el-table-column prop="areaname" label="场地名称" width="" align="center">
			</el-table-column>
			<el-table-column prop="detail" label="场地详情" width="" align="center">
			</el-table-column>
			<el-table-column prop="location" label="场地位置" width="" align="center">
			</el-table-column>
			<el-table-column prop="image" label="场地图片" width="" align="center">
        <template   slot-scope="scope">
          <img :src="url.image" style="width: 100px;" />
        </template>
			</el-table-column>
			<el-table-column prop="price" label="场地单价/小时" width="" align="center">
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
    </el-table>
    <el-dialog title="添加场地" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="场地名称" :label-width="formLabelWidth">
          <el-input v-model="form.areaname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="场地详情" :label-width="formLabelWidth">
          <el-input v-model="form.detail" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="场地位置" :label-width="formLabelWidth">
          <el-input v-model="form.location" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="场地单价/小时" :label-width="formLabelWidth">
          <el-input v-model="form.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="上传场地图片" :label-width="formLabelWidth">
          <el-upload class="avatar-uploader" action="" :show-file-list="false" :auto-upload="false" :on-change="fileChange">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="primary" style="position: absolute;right: 120px;bottom: 100px"
               @click="dialogFormVisible = !dialogFormVisible">添加场地</el-button>
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
	import { addVenue ,getVenueList,deleteVenue} from "../api/jiekou";

	export default {
		data() {
			return {
			  url:"D:/webstormspace/demo/src/picture/",
				Count: 1,
        Rerequest:true,
				currentPage: 1,
				pageSize: 10,
				tableList: [{
					id: '',
					areaname: "",
					detail: "",
					location: "",
					image: "",
					price: "",
					status: "",
					ifdelete: ""
				}],
				dialogFormVisible: false,
				formLabelWidth: '120px',
				form: {
					areaname:'',
					detail:"",
					location:'',
					price:''
				},
				imageUrl:'',
				img:""
			}
		},

		methods: {
			fileChange(files) {
				console.log(files)

				var reader = new FileReader();
				reader.readAsDataURL(files.raw);
				reader.onload = ()=>{
				//	console.log(this.imageUrl)
					this.imageUrl = reader.result

				};
				this.img = files.raw

			},
			submit(){

				let formData = new FormData();
				formData.append("jsonStr", JSON.stringify(this.form));
				formData.append("file",this.img);
				addVenue(formData).then(res=>{
          this.dialogFormVisible = false;
				}).catch(err=>{
          alert("场地添加失败");
				})


			},

			// handleCurrentChange(val) {
			//   console.log(`当前页: ${val}`);
			//   getAll({"pageNum":val}).then(response=>{
			//     this.tableList = response.data.content.data.list;
			//     this.Currenttotal =response.data.content.data.total;
			//     console.log("加载时本页总数"+this.Currenttotal);
			//     console.log(response)
			//   });
			// },
			handleDelete( index,row) {
        deleteVenue({"venueId":row.id}).then(response=>{
          alert("删除成功")

        });
			}
		},
		/*加载页面时调用*/
		created() {
      getVenueList().then(response=>{
			  this.tableList = response.data.data.list;
			    console.log(this.tableList);
			 /*   console.log("初始化的"+this.Currenttotal+"条数");
			  console.log("初始化的页数"+response.data.content.data.pageNum)*/
			});

			//  getTotalCount().then(response=>{
			//   this.Count = response.data.content.data;
			// /*   console.log(response.data.content.data);
			//    console.log("总数据个数")*/
			//  })
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
