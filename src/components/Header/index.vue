<template>
  <div class="myheader">
    <div class="logo-info">
        <div class="left flex">
            <img class="img" src="http:img/logo.png" alt="">
            <span class="intro">致力于轻重金属结构的环保涂装<br>推广应用符合国家标准的环保水漆。</span>
        </div>
        <div class="right">
            <div>全国统一服务热线：<span class="phone">17696524266</span></div>
            <!-- <div>全国统一服务热线：<span class="phone">400-1688-957</span></div> -->
        </div>
    </div>
    <div class="nav-container">
        <ul class="nav">
            <li class="nav-li" v-for="nav in navList" :key="nav.title">
                <router-link class="nav-item" :class="{active:routeName==nav.name}" :to="nav.to">{{nav.title}}</router-link>
                <ul class="nav-item-list" v-show="nav.child && nav.child.length" :style="{height:nav.child&&nav.child.length*55}">
                    <li v-for="navItem in nav.child" :key="navItem.title">
                        <router-link class="nav-list-item" :to="navItem.to">{{navItem.title}}</router-link>
                    </li>
                </ul>
            </li>
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
import { mapState } from 'vuex'
export default {
    name: 'MyHeader',
    data () {
        return {
            routeName: ''
        }
    },
    watch: {
        '$route.name': {
            handler (name) {
                this.routeName = name
            },
            immediate: true
        }
    },
    computed: {
        ...mapState(['navList'])
    },
    created () {
    }
}
</script>

<style lang="scss" scoped>
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
            
            .intro {
                display: inline-block;
                color: #1c499e;
                font-size: 14px;
                border-left: 1px solid;
                padding-left: 10px;
                margin-left: 10px;
            }
            &.flex {
                display: flex;
                align-items: center;
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
        background: #fff;
        // color: #fff;
        opacity: 0.8;
        line-height: 55px;
        .nav {
            display: flex;
            justify-content: space-around;
            list-style: none;
            margin: 0;
            padding: 0;
            .nav-li {
                position: relative;
                .nav-item,.nav-list-item {
                    color: #333;
                    text-decoration: none;
                    &.active, &:hover {
                            color: #0d68be;
                        }
                }
                .nav-item-list {
                    display: none;
                    min-width: 130px;
                    height: 0!important;
                    transition: all 2s;
                    overflow: hidden;
                    white-space: nowrap;
                    left: -32px;
                    position: absolute;
                    text-align: center;
                    background: #fff;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    .nav-list-item {
                        padding: 0 10px;
                    }
                }
                &.active, &:hover {
                    .nav-item {
                        color: #0d68be;
                    }
                }
                 &:hover {
                    .nav-item-list {
                        height: auto!important;
                        display: block;
                    }
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