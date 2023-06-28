<template>
  <div class="header-bg-img-container">
    <img class="img" :src="src" alt="">
  </div>
</template>

<script>
export default {
    name: 'HeaderBgImg',
    props: {
        src: [String]
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
    .header-bg-img-container {
        text-align: center;
        height: 350px;
        overflow: hidden;
        background: #1c1c1c;
        .img {
            width: 100%;
        }
    }
</style>