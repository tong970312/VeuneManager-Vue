<template>
	<div class="hello">
		<el-container style="height: 100vh; border: 1px solid #eee">
			<el-aside width="200px" style="background-color: #2c74b9">
				<el-menu default-active="2" background-color="#2c74b9" text-color="#fff" active-text-color="#ffd04b" router>
					<el-menu-item-group>
						<el-menu-item index="/manager/homeImage">君悦乒乓球场馆管理系统</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1" >
						<template slot="title">
							<i class="el-icon-star-on"></i>
							<span>账户管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item style="text-indent: 40px" index="/manager/userList" v-show="rise=='true'">●查看用户列表</el-menu-item>
							<el-menu-item style="text-indent: 40px" index="/manager/update" v-show="rise=='true'">●信息修改</el-menu-item>
							<el-menu-item style="text-indent: 40px" index="/manager/userUpdate" v-show="rise!='true'">●信息修改</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2" v-if="rise=='true'">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span slot="title">场地管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item style="text-indent: 40px" index="/manager/selectArea">●管理我的场地</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3" v-if="rise=='true'">
						<template slot="title">
							<i class="el-icon-document"></i>
							<span slot="title">订单管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item style="text-indent: 40px" index="/manager/orderList">●查看订单</el-menu-item>
							<el-menu-item style="text-indent: 40px" index="/manager/payOrderList">●查看已完成订单</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
          <el-submenu index="2" v-if="rise!='true'">
						<template slot="title">
							<i class="el-icon-document"></i>
							<span slot="title">场地预定</span>
						</template>
						<el-menu-item-group>
              <el-menu-item style="text-indent: 40px" index="/manager/reserveArea">●预定场地</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
          <el-submenu index="3" v-if="rise!='true'">
						<template slot="title">
							<i class="el-icon-document"></i>
							<span slot="title">订单查看</span>
						</template>
						<el-menu-item-group>
              <el-menu-item style="text-indent: 40px" index="/manager/myOrderList">●查看我的订单</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4" v-if="rise=='true'">
						<template slot="title">
							<i class="el-icon-setting"></i>
							<span slot="title">消息管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item style="text-indent: 40px" index="/manager/sendMessage">●发布消息</el-menu-item>
							<el-menu-item style="text-indent: 40px" index="/manager/ManagerMessage">●查看已发布</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
          <el-submenu index="3" v-if="rise!='true'">
						<template slot="title">
							<i class="el-icon-setting"></i>
							<span slot="title">查看通知</span>
						</template>
						<el-menu-item-group>
							<el-menu-item style="text-indent: 40px" index="/manager/getMessage">●已发布通知</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item-group>
						<el-menu-item index="" @click="exit(rise)" route="/">退出登录</el-menu-item>
					</el-menu-item-group>
				</el-menu>
			</el-aside>
			<el-container>

				<el-header style="text-align: right; font-size: 12px">
					<el-dropdown>
						<i class="el-icon-setting" style="margin-right: 15px"></i>
					</el-dropdown>
					<span>欢迎 : {{currentUser}}</span>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>

	</div>
</template>
<script>
  import {getSelfInfo,user_exit,getAdmin,admin_exit} from "../api/jiekou";

  export default {
    data(){
      return {
       rise:"",
       currentUser:''
      }
    },
		methods: {
      exit:function (rise) {
        if (rise==="true"){
          admin_exit().then(response=>{
            console.log(response)
          })
        }else if (rise==="false") {
          user_exit().then(response=>{
            console.log(response)
          })
        }
        localStorage.removeItem("rise");
        console.log("localStorage.getItem(\"rise\")"+localStorage.getItem("rise"))
      },

		},
    created(){
      var role = localStorage.getItem("rise");
      console.log(role)
      if (role==="true"){
        getAdmin().then(response=>{
          console.log(response.data.data);
          this.currentUser = response.data.data.username;
        })
      }
      else if (role==="false") {
        getSelfInfo().then(response=>{
          console.log(response.data.data);
          this.currentUser = response.data.data.username;
        })
      }

    },
    mounted(){
       this.rise = localStorage.getItem("rise");
    }
	}
</script>
<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
</style>
