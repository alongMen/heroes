// 导入模块  模块块语法 CommonJS
// const Vue = require('vue');

// ES6中模块化的语法
import Vue from 'vue';
import App from './App.vue';

// 导入全局样式
// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// 导入index.css
import './assets/css/index.css';

//导入路由模块
import router from './routes/router';

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
