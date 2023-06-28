<template>
  <div class="carousel-flat-one-by-one-scroll-container">
    
    <div class="item-box" ref="imgBox">
        <div class="img-item"
            @mouseover="stop"
            @mouseleave="onImgScroll"
            v-for="item in imgArr"
            :key="item.imgSrc">
            <div class="img-box">
                <img
                    class="img"
                    :src="item.imgSrc"
                    alt=""
                >

            </div>
            <p class="info">
                <span class="title">{{item.title}}</span>
                <span class="btn">MORE+</span>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CarouselFlatOneByOne',
    data () {
        return {
            imgArr: [],
            position: 0,
            timer: null,
            timerInner: null
        }
    },
    created () {
        this.imgArr = [
            {
                title: '水性环氧防腐漆',
                imgSrc: 'http:img/products/products_1.jpg',
                
            },
            {
                title: '水性无机富锌漆',
                imgSrc: 'http:img/products/products_2.jpg',
                
            },
            {
                title: '水性醇酸漆',
                imgSrc: 'http:img/products/products_3.jpg',
                
            },
            {
                title: '水性丙烯酸漆',
                imgSrc: 'http:img/products/products_4.jpg',
                
            },
            {
                title: '水性氨基烤漆',
                imgSrc: 'http:img/products/products_5.jpg',
                
            },
            {
                title: '水性丙烯酸聚氨酯漆',
                imgSrc: 'http:img/products/products_6.jpg',
                
            },
            // {
            //     title: '',
            //     imgSrc: 'http:img/products/products_7.jpg',
                
            // },
            // {
            //     title: '',
            //     imgSrc: 'http:img/products/products_8.jpg',
                
            // },
        ]
        this.onImgScroll()
    },
    beforeDestroy () {
        this.stop()
    },
    methods: {
        onImgScroll () {
            this.stop()
            this.position = 0
            if (!this.imgArr.length) return
            this.timer = setInterval(() => {
                this.position++
                let left_ = 0
                clearInterval(this.timerInner)
                this.timerInner = setInterval(() => {
                    left_ += 20
                    this.$refs.imgBox && this.$refs.imgBox.style && (this.$refs.imgBox.style.left = -left_ + 'px')
                    if (left_ >= 294) {
                        this.imgArr.push(...this.imgArr.splice(0, 1))
                        this.$refs.imgBox && this.$refs.imgBox.style && (this.$refs.imgBox.style.left = 0)
                        clearInterval(this.timerInner)
                    }
                }, 20)
                if (this.position >= this.imgArr.length) {
                    this.position = 0
                }
            }, 3000)
        },
        stop () {
            clearInterval(this.timer)
            clearInterval(this.timerInner)
        }
    }
}
</script>

<style lang="scss">
.carousel-flat-one-by-one-scroll-container {
    // top: -135px;
    width: 1176px;
    margin: auto;
    overflow: hidden;
    .item-box{
        display: flex;
        flex-wrap: nowrap;
        user-select: none;
        position: relative;
        left: 0;
        // transition: all 2s;
        .img-item {
            min-width: 270px;
            margin: 0 12px;
            cursor: pointer;
            .img-box {
                width: 270px;
                height: 270px;
                overflow: hidden;
                .img {
                    width: 270px;
                    height: 270px;
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
    }
}
</style>