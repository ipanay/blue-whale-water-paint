<template>
    <div class="section-title">
        <h1 class="title">{{title}}</h1>
        <p class="describe">{{describe}}</p>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        title: [String],
        describe: [String],
    },
    data () {
        return {
        }
    },
    created () {
    }
}
</script>

<style lang="scss">
.section-title {
    text-align: center;
    user-select: none;
    padding: 20px 0;
    .title {
        font-size: 20px;
        color: #fff;
        font-weight: bold;
    }
    .describe {
        font-size: 14px;
        color: #999999;
        line-height: 30px;
    }
}
</style>