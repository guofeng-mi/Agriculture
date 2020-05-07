/*
 * @Descripttion: 
 * @version: 
 * @Date: 2020-03-10 16:54:46
 */
/*
 * @Descripttion:
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/test',
          name: 'test',
          component: () => import('./views/Test.vue')
        },
        {
          path: '/',
          name: 'main',
          component: () => import('./views/Main.vue')
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('./views/Home.vue'),
        },{
            path: 'park/:id',
            name: 'park',
            component: () => import('./views/Park.vue')
        },{
          path: 'echarts',
          name: 'echarts',
          component: () => import('./views/Echarts.vue')
        },{
          path: 'renwu/:id',
          name: 'renwu',
          component: () => import('./views/Renwu.vue')
        },{
          path: 'map',
          name: 'map',
          component: () => import('./views/Map.vue')
        },{
          path: 'dikuai/:id',
          name: 'dikuai',
          component: () => import('./views/Dikuai.vue')
        },{
          path: 'dikuaibf',
          name: 'dikuaibf',
          component: () => import('./views/DikuaiBf.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('[ to : ', to.name + ' ] ')
  // console.log("store", store)
  // store.commit('changeHdShow', 'tab_dikuai');
  console.log(to.name)
  if(to.name == 'layout') {
    next({name: 'home'})
  } else if(to.name == 'main') {
    store.commit('changeHdShow', 'none');
    next();
  } else if(to.name == 'home') {
    store.commit('changeHdShow', 'Search_1');
    next();
  } else {
    next();
  }
})


export default router;
