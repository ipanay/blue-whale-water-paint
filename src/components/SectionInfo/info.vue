<template>
    <div class="info-container">
        <div class="info-title">
            {{info.title}}
            <span v-show="showDetail" class="reture" @click="showDetail=!showDetail">返回</span>
        </div>
        <div class="content">
            <template v-if="isImage_">
                <Detail :detail="detail" v-if="showDetail"></Detail>
                <template v-else>
                    <div class="img-item" hidden
                        v-for="imgSrc in info.content"
                        :key="imgSrc">
                        <div class="img-box">
                            <img
                                class="img"
                                :src="imgSrc"
                                alt=""
                            >

                        </div>
                    </div>
                    <div class="imgs">
                        <div class="img-item"
                            v-for="imgSrc in imgs"
                            :key="imgSrc">
                            <div class="img-box">
                                <img
                                    class="img"
                                    :src="imgSrc"
                                    alt=""
                                    @click="bigImg(imgSrc)"
                                >

                            </div>
                            <p class="info">
                                <span class="title">{{imgSrc | getImgAlt}}</span>
                            </p>
                        </div>
                    </div>
                    <div class="page-control">
                        <span class="total">共有{{info.content && info.content.length}}条记录 </span>
                        <span class="pre page-num" :class="{disabled:page==1}" @click="prePage"><<</span>
                        <!-- <span class="eplisis page-num" v-show="pages>3&&page>1">...</span> -->
                        <div class="page-num-box">
                            <span
                                class="page-num"
                                :class="{active: page==i}"
                                v-for="i in pages" :key="i"
                                v-show="i==page||i==page-1||i==page+1"
                                @click="pageChange(i)"
                            >
                                {{i}}
                            </span>
                        </div>
                        <!-- <span class="eplisis page-num" v-show="pages>3&&page<pages">...</span> -->
                        <span class="next page-num" :class="{disabled: page==pages}" @click="nextPage">>></span>
                    </div>
                    <div class="big-img-box" v-show="bigSrc">
                        <span class="close" @click="bigSrc=''">X</span>
                        <div class="bg-cover"></div>
                        <img class="img" :src="bigSrc" alt="">
                    </div>
                </template>
            </template>
            <div v-else>
                <pre style="white-space: pre-wrap;">{{info.content}}</pre>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Detail from './detail.vue'
export default {
    name: 'Info',
    components: {
        Detail
    },
    props: {
        info: {
            type: Object,
            default: () => ({
                title: '',
                content: ''
            })
        },
        isImage: [Boolean]
    },
    data () {
        return {
            pageSize: 6,
            page: 1,
            showDetail: false,
            detail: {},
            isImage_: this.isImage,
            bigSrc: ''
        }
    },
    watch: {
        'info.content' (n) {
            this.isImage_ = Array.isArray(n)
        }
    },
    computed: {
        imgs () {
            const startI = (this.page - 1) * this.pageSize
            const endI = startI + 6
            return this.isImage_?  this.info.content && this.info.content.slice(startI, endI) : []
        },
        pages () {
            this.page = 1
            return this.info.content && Math.ceil(this.info.content.length / this.pageSize)
        }
    },
    filters: {
        getImgAlt(src) {
            const arr = ((src || '').split(/.(jpg|jpeg|png)/)[0]||'').split('/')
            return arr[arr.length-1]
        },
    },
    created () {
    },
    methods: {
        
        pageChange (page) {
            this.page = page
        },
        prePage () {
            if (this.page != 1) this.page--
        },
        nextPage () {
            if (this.page < this.pages) this.page++
        },
        bigImg (src) {
            const arr = ((src || '').split(/.(jpg|jpeg|png)/)[0]||'').split('/')
            const file = arr[arr.length-1]
            console.log(file)
            if (Number(file) > 0) {
                this.bigSrc = src
            } else {
                this.detail = this.info.details[file]
                this.showDetail = true
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .info-container {
        margin-left: 20px;
        width: 816px;
        border: #4C4C4C 1px solid;
        .info-title {
            height: 66px;
            line-height: 66px;
            padding-left: 30px;
            text-align: left;
            border-bottom: #4C4C4C 1px solid;
            color: #105dad;
            font-size: 16px;
        }
        .reture {
            float: right;
            margin-right: 20px;
            color: #aaa;
            cursor: pointer;
            &:hover {
                color: #fff;
            }
        }
        .content {
            padding: 20px 30px;
            line-height: 30px;
            text-align: left;
            text-indent: 2rem;
            font-size: 14px;
            color: #999;
            .imgs {
                display: flex;
                flex-wrap: wrap;
            }
            .img-item {
                width: 210px;
                margin: 0 12px;
                cursor: pointer;
                .img-box {
                    width: 210px;
                    height: 210px;
                    overflow: hidden;
                    .img {
                        width: 210px;
                        height: 210px;
                        vertical-align: bottom;
                        transition: all 1s;
                    }
                }
                .info {
                    background: #1b1b1b;
                    text-align: center;
                    line-height: 40px;
                    .title {
                        color: #999;
                    }
                    .btn {
                        color: #fff;
                        background: #313231;
                        padding: 0 10px;
                        float: right;
                        cursor: pointer;
                    }
                }
                &:hover{
                    .img {
                        transform: scale(1.1);
                    }
                    .btn {
                        background: #c30d0d;
                    }
                }
            }
            .page-control {
                display: flex;
                    justify-content: right;
                .page-num-box {
                    display: flex;
                }
                .page-num {
                    user-select: none;
                    text-indent: 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    text-align: center;
                    width: 70px;
                    cursor: pointer;
                    &:hover,&.active {
                        background: #ccc;
                        color: #fff;
                    }
                    &.disabled {
                        color: #999;
                        background: #aaa;
                    }
                }
            }

        }
        .big-img-box {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 999;
            overflow: auto;
            .bg-cover {
                position: absolute;
                top: 0;
                width: 100vw;
                height: 100vh;
                background: #fff;
                opacity: 0.9;
            }
            .img {
                position: relative;
                height: 90%;
                padding: 20px;
            }
            .close {
                position: absolute;
                right: 100px;
                top: 20px;
                font-size: 30px;
                color: #aaa;
                z-index: 9;
                display: inline-block;
                // border: 1px solid #000;
                // border-radius: 50%;
                width: 30px;
                height: 40px;
    cursor: pointer;
            }
        }
    }
</style>