<template>
  
  <el-header style="text-align: right; font-size: 12px">
    <div style="float: left;height: 13px;">
            <h1>崩坏晓店</h1>
          </div>
        <div class="toolbar">
          
          <el-dropdown>
            <el-avatar :icon="UserFilled" style="float: right; margin-top: 10px;" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>登录</el-dropdown-item>
                <el-dropdown-item>切换账号</el-dropdown-item>
                <el-dropdown-item>推出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          
        </div>
  </el-header>
 
  
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
 
  </el-menu>
  
  <el-container>
    <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
      
      
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { UserFilled } from '@element-plus/icons-vue'
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-container{
  position: absolute;
  width: 1300px;
  height: 700px;
  top: 50px;
  left: 200px;
}
.el-header{
  background-color: azure;
}
</style>