<template>
  <div class="myheader">
    <div class="logo-info">
        <div class="left">
            <img class="img" src="http:img/logo.png" alt="">
        </div>
        <div class="right">
            <div>全国统一服务热线：<span class="phone">17696524266</span></div>
            <!-- <div>全国统一服务热线：<span class="phone">400-1688-957</span></div> -->
        </div>
    </div>
    <div class="nav-container">
        <ul class="nav">
            <li><router-link class="nav-item" active-class="active" to="/home">网站首页</router-link></li>
            <li><router-link class="nav-item" to="/home">关于蓝鲸</router-link></li>
            <li><router-link class="nav-item" to="/home">经典案例</router-link></li>
            <li><router-link class="nav-item" to="/home">产品中心</router-link></li>
            <li><router-link class="nav-item" to="/home">新闻资讯</router-link></li>
            <li><router-link class="nav-item" to="/home">招商加盟</router-link></li>
            <li><router-link class="nav-item" to="/home">人力资源</router-link></li>
            <li><router-link class="nav-item" to="/home">联系蓝鲸</router-link></li>
        </ul>
    </div>
    <!-- <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
    name: 'MyHeader'
}
</script>

<style lang="scss">
.myheader {
    position: absolute;
    width: 100%;
    z-index: 999;

    background: transparent;
    .logo-info {
        padding: 10px 100px;
        height: 60px;
        .left {
            float: left;
            .img {
                height: 60px;
            }
        }
        .right {
            float: right;
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            color: #fcfcfc;
            .phone {
                font-size: 22px;
                color: #fff;
            }
        }
        
    }
    .nav-container {
        height: 55px;
        padding: 0 50px;
        background: #101010;
        color: #fff;
        line-height: 55px;
        .nav {
            display: flex;
            justify-content: space-around;
            list-style: none;
            margin: 0;
            padding: 0;
            .nav-item {
                color: #fff;
                text-decoration: none;
                &.active, &:hover {
                    color: #2213f0;
                }
            }
        }
    }
}
.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>