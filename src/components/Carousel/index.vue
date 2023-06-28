<template>
  <div class="scroll-container">
    <img
        class="img-item"
        v-for="imgSrc in imgArr"
        :key="imgSrc"
        v-show="imgSrc==currendImgSrc"
        :src="imgSrc"
        alt=""
    >
    <div class="scroll-bar">
        <span
            class="item"
            v-for="i in barLength"
            :key="i"
            :class="{active: i == currendIndex + 1}"
            @click="onBarClick(i)"
        >
        </span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CarouselFlash',
    data () {
        return {
            imgArr: [],
            barLength: 0,
            currendIndex: 0,
            currendImgSrc: '',
            timer: null
        }
    },
    created () {
        this.imgArr = [
            'http:img/scroll/1_scroll.jpg',
            'http:img/scroll/2_scroll.jpg',
            // 'http:img/scroll/3_scroll.jpg',
            'http:img/scroll/4_scroll.jpg',
        ]

        this.barLength = this.imgArr.length
        if (this.barLength) {
            this.currendImgSrc = this.imgArr[this.currendIndex]
        }
        this.onImgScroll()
    },
    methods: {
        onImgScroll () {
            clearInterval(this.timer)
            if (!this.imgArr.length) return
            this.timer = setInterval(() => {
                this.currendIndex += 1
                if (this.currendIndex >= this.imgArr.length) {
                    this.currendIndex = 0
                }
                this.currendImgSrc = this.imgArr[this.currendIndex]
            }, 3000)
        },
        onBarClick (i) {
            this.currendIndex = i - 1
            this.currendImgSrc = this.imgArr[this.currendIndex]
            this.onImgScroll()
        }
    }
}
</script>

<style lang="scss">
.scroll-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    // top: -135px;
    .img-item {
        width: 100%;
        height: 740px;
        vertical-align: top;
        // max-height: 740px;
    }
    .scroll-bar{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        user-select: none;
        .item {
            display: inline-block;
            margin-right: 15px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 1px solid #c30d0d;
            cursor: pointer;
            &.active{
                background: #c30d0d;
            }
        }
    }
}
</style>