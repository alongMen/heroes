import VueRouter from 'vue-router';
import Vue from 'vue';

//导入组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';



//注册VueRouter插件
Vue.use(VueRouter);

//创建路由对象
var router = new VueRouter({
    //配置激活的类样式
    linkExactActiveClass: 'active',
    //路由规则
    routes: [
        { path: '/',redirect:'/heroes'},
        { name:'heroes',path:'/heroes',component: HeroesList},
        { name:'equips',path:'/equips',component: EquipsList},
        { name:'weapons',path:'/weapons',component: WeaponsList}
    ]
});

//模块中导出路由对象
export default router;