<template>
    <div class="info-card">
        <h1 class="title">{{title}}</h1>
        <div class="describe">
            <p class="info">{{describe}}</p>
            <el-button class="more" @click="go2(src)">MORE+</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoCard',
    props: {
        title: [String],
        src: [String],
        describe: [String],
    },
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
        go2(src) {
            const urlArr = src.split('?id=')
            this.$router.push({
                name: urlArr[0],
                query: {
                    id: urlArr[1]
                }
            })
        }
    }
}
</script>

<style lang="scss">
.info-card {
    background: #282828;
    width: 647px;
    height: 366px;
    overflow: hidden;
    padding: 30px 45px;
    .title {
        font-size: 20px;
        color: #fff;
        font-weight: bold;
    }
    .describe {
        font-size: 14px;
        color: #999999;
        line-height: 30px;
        .info {
            max-height: 270px;
            overflow: hidden;
        }
        .more {
            margin-top: 20px;
        }
    }
}
</style>