<template>
  <div id="app">
    <!-- <header>头部公共部分</header> -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- siderbar -->
        <app-siderbar></app-siderbar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 英雄列表 -->
          <router-view></router-view>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

import AppSiderbar from './components/AppSiderbar.vue';



export default {
  //局部组建
  components: {
    AppHeader,
    AppSiderbar
  }
}
</script>

<style>
</style>
