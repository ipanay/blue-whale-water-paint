<template>
  <div class="carousel-flow-scroll-container">
    
    <div class="item-box" ref="imgBox">
        <div class="img-item"
            @mouseover="stop"
            @mouseleave="onImgScroll"
            v-for="item in imgArr"
            :key="item.src">
            <div class="img-box">
                <img
                    class="img"
                    :src="item.src"
                    alt=""
                >

            </div>
            <p class="info">
                <span class="title">{{item.title}}</span>
                <span class="btn" @click="go2(item.title)">MORE+</span>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CarouselFlow',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            imgArr: [],
            timer: null,
            left: 0
        }
    },
    created () {
                console.log(99, this.list)
        const arr = []
        this.list.forEach(item => {
            item.content.slice(0, 5).forEach(src => {
                arr.push({ title: item.title, src})
            })
        })

        this.imgArr = arr
        this.onImgScroll()
    },
    beforeDestroy () {
        this.stop()
    },
    methods: {
        onImgScroll () {
            this.stop()
            if (!this.imgArr.length) return
            let left = this.left || 0
            this.timer = setInterval(() => {
                left += 1
                this.$refs.imgBox && this.$refs.imgBox.style && (this.$refs.imgBox.style.left = -left + 'px')
                if (left >= 294) {
                    this.imgArr.push(...this.imgArr.splice(0, 1))
                    this.$refs.imgBox && this.$refs.imgBox.style && (this.$refs.imgBox.style.left = 0)
                    left = 0
                }
                this.left = left
            }, 20)
            
        },
        stop () {
            clearInterval(this.timer)
        },
        go2(id) {
            this.$router.push({
                name: 'case',
                query: {
                    id
                }
            })
        }
    }
}
</script>

<style lang="scss">
.carousel-flow-scroll-container {
    // top: -135px;
    margin: auto;
    .item-box{
        display: flex;
        flex-wrap: nowrap;
        user-select: none;
        position: relative;
        left: 0;
        // transition: all 2s;
        .img-item {
            min-width: 300px;
            cursor: pointer;
            position: relative;;
            .img-box {
                width: 300px;
                height: 300px;
                overflow: hidden;
                .img {
                    width: 300px;
                    height: 300px;
                    vertical-align: bottom;
                    // transition: all 1s;
                }
            }
            .info {
                display: none;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(180,44,44,0.9);
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
                    // transform: scale(1.1);
                }
                .btn {
                    background: #c30d0d;
                }
                .info {
                    display: block;
                }
            }
        }
    }
}
</style>