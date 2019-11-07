//需要先下载router依赖包：npm i vue-router -S

import Vue from 'vue';
import VueRouter from 'vue-router'//1 引入插件
Vue.use(VueRouter) //2 安装插件



import Home from '../pages/Home';
import News from '../pages/News';
import Error from '../pages/Error';
import Detail from '../pages/Detail';
import Price from '../pages/Price';
import Pricedetail from '../pages/Pricedetail';
import Map from '../components/Map' ;
import Tel from '../pages/tel';
import protection from '../pages/protection';

const routes = [
    {path: '/home', component: Home},
    {path: '/news', component: News},
    {path: '/detail/:id', component: Detail},
    {path: '/price', component: Price},
    {path: '/map', component: Map},
    {path: '/protection', component: protection},
    {path: '/tel', component: Tel},
    {path: '/Pricedetail/:id', component: Pricedetail},
    {path: '/', redirect: '/home'},
    {path: '*', component: Error}
];

export default new VueRouter({
    mode:'hash',
    routes:routes
});