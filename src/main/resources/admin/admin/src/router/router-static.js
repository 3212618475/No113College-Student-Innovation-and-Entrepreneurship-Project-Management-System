import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import news from '@/views/modules/news/list'
    import xiangmu from '@/views/modules/xiangmu/list'
    import xiangmujindu from '@/views/modules/xiangmujindu/list'
    import xuantishenhe from '@/views/modules/xuantishenhe/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXiangmu from '@/views/modules/dictionaryXiangmu/list'
    import dictionaryXiangmuYesno from '@/views/modules/dictionaryXiangmuYesno/list'
    import dictionaryXiangmujinduYesno from '@/views/modules/dictionaryXiangmujinduYesno/list'
    import dictionaryXuantishenheYesno from '@/views/modules/dictionaryXuantishenheYesno/list'
    import xiangmujinduAdd from '@/views/modules/xiangmujindu/add-or-update'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    },
	,{
	    path: '/xiangmujinduAdd',
	    name: '项目进度',
	    component: xiangmujinduAdd
	}
	
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXiangmu',
        name: '项目类型',
        component: dictionaryXiangmu
    }
    ,{
        path: '/dictionaryXiangmuYesno',
        name: '申报状态',
        component: dictionaryXiangmuYesno
    }
    ,{
        path: '/dictionaryXiangmujinduYesno',
        name: '选题申请',
        component: dictionaryXiangmujinduYesno
    }
    ,{
        path: '/dictionaryXuantishenheYesno',
        name: '选题申请',
        component: dictionaryXuantishenheYesno
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/jiaoshi',
        name: '指导教师',
        component: jiaoshi
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/xiangmu',
        name: '项目申报',
        component: xiangmu
      }
    ,{
        path: '/xiangmujindu',
        name: '项目进度',
        component: xiangmujindu
      }
    ,{
        path: '/xuantishenhe',
        name: '选题审核',
        component: xuantishenhe
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
