import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import longo from "./longo";
import home from "./home";
import cat from "./cat";
import fenlei from "./fenlei";
import list from "./list";
import seach from "./seach";
import good from "./good";
import detil from "./detil";
import shop from './shop';
import shopp from './shopp';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/home',
      component: HelloWorld
    },
    ...longo,
    ...home,
    ...cat,
    ...fenlei,
    ...list,
    ...seach,
    ...good,
    ...detil,
    ...shop,
    ...shopp,

  ]
})
