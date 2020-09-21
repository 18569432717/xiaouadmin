<template>
  <div class="box">
    <el-container>
      <el-aside width="200px">
          <Navbar/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    components:{
        Navbar
    }
};
</script>

<style lang="stylus" scoped>
.box,.el-container{
      width:100%;
      height:100%
    }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  </style>