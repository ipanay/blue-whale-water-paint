<template>
    <div class="myfooter">
        <div class="nav-qr">
            <div class="nav-flat">
                <ul class="nav" v-for="navs,i in navList" :key="i">
                    <li v-for="nav in navs" :key="nav.title">
                        <router-link
                            v-if="!nav.main"
                            class="nav-item"
                            :class="{main:nav.main}"
                            :to="nav.to"
                        >
                            {{nav.title}}
                        </router-link>
                        <span
                            v-else
                            class="nav-item"
                            :class="{main:nav.main}"
                            :to="nav.to"
                        >
                            {{nav.title}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="qrcode-container">
                <img class="item" src="http:img/bossWechat_qrcode.jpg" alt="">
            </div>
        </div>
        <div class="copy">
            Copyright © 2023 All Rights Reserved 版权所有 徐州蓝鲸新材料科技有限公司 苏ICP备2023005110号-1
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    data () {
        return {
            navList: []
        }
    },
    created () {
        this.navList = [
            [
                { title: '关于蓝鲸', main: true, to: '' },
                { title: '公司简介', main: false, to: '' },
                { title: '企业文化', main: false, to: '' },
                { title: '企业优势', main: false, to: '' },
            ],
            [
                { title: '产品展示', main: true, to: '' },
                { title: '水性丙烯酸系列', main: false, to: '' },
                { title: '水性醇酸系列', main: false, to: '' },
                { title: '水性环氧系列', main: false, to: '' },
                { title: '水性聚氨酯系列', main: false, to: '' },
                { title: '水性氨基烤漆', main: false, to: '' },
                { title: '水性塑胶漆', main: false, to: '' }
            ],
            [
                { title: '经典案例', main: true, to: '' },
                { title: '钢结构', main: false, to: '' },
                { title: '彩钢瓦翻新', main: false, to: '' },
                { title: '活动住房、集装箱', main: false, to: '' },
                { title: '机械设备', main: false, to: '' },
                { title: '烤漆', main: false, to: '' },
                { title: '桔纹锤纹漆', main: false, to: '' },
                { title: '橘纹漆', main: false, to: '' },
                { title: '环氧漆', main: false, to: '' },
            ],
            [
                { title: '新闻资讯', main: true, to: '' },
                { title: '公司新闻', main: false, to: '' },
                { title: '行业动态', main: false, to: '' },
                { title: '常见问题', main: false, to: '' },
            ],
            [
                { title: '招商加盟', main: true, to: '' },
                { title: '加盟优势', main: false, to: '' },
                { title: '加盟条件', main: false, to: '' },
            ],
        ]
    }
}
</script>

<style lang="scss">
.myfooter {
    font-size: 14px;
    color: #999;
    width: 100%;
    height: auto;
    background: #232323;
    overflow: hidden;
    padding-top: 48px;
    padding-bottom: 30px;
    .nav-qr {
        display: flex;
        justify-content: center;
        .nav-flat {
            display: flex;
            .nav {
                list-style: none;
                .nav-item {
                    font-size: 14px;
                    color: #999;
                    text-decoration: none;
                    line-height: 28px;
                    height: 30px;
                    &.main {
                        font-size: 16px;
                        color: #bbbbbb;
                    }
                    &:hover {
                        color: #bbb;
                    }
                }
            }
        }
        .qrcode-container {
            margin: 20px;
            .item {
                width: 102px;
                margin-left: 20px;
            }
        }
    }
    .copy {
        text-align: center;
    }
}
</style>