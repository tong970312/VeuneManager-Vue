import Vue from 'vue'
import Router from 'vue-router'
import manager from '@/components/manager'
import login from '@/components/login'
import register from '@/components/register'
Vue.use(Router);

export default new Router({
  /*配置页面  path为跳转所填的路径*/
  routes: [
    {
      path: '/',
      name: '首页登录',
      component: login
    },
     {
        path: '/register',
        name: '注册',
        component: register
      },

    {
      path: '/manager',
      name: '管理操作',
      component: manager,
      children: [{
				path: 'getMessage',
				//    	替换appmain里的router-view
				component: () =>import("@/components/getMessage")
			},
      {
      	path: 'selectArea',
				//    	替换appmain里的router-view
				component: () =>import("@/components/selectArea")
      },
      {
      	path: 'userList',
				//    	替换appmain里的router-view
				component: () =>import("@/components/userList")
      },
      {
      	path: 'update',
				//    	替换appmain里的router-view
				component: () =>import("@/components/update")
      },
      {
      	path: 'sendMessage',
				//    	替换appmain里的router-view
				component: () =>import("@/components/sendMessage")
      },
      {
      	path: 'orderList',
				//    	替换appmain里的router-view
				component: () =>import("@/components/orderList")
      },
      {
      	path: 'payOrderList',
				//    	替换appmain里的router-view
				component: () =>import("@/components/payOrderList")
      },
      {
      	path: 'reserveArea',
				//    	替换appmain里的router-view
				component: () =>import("@/components/reserveArea")
      },
      {
      	path: 'myOrderList',
				//    	替换appmain里的router-view
				component: () =>import("@/components/myOrderList")
      },
      {
      	path: 'userUpdate',
				//    	替换appmain里的router-view
				component: () =>import("@/components/userUpdate")
      },
      ]
    }


  ]
})
