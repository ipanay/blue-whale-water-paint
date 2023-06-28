<template>
    <div class="more">
        <span class="span" @click="go2">MORE+</span>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import CarouselFlatOneByOne from '@/components/CarouselFlatOneByOne'
export default {
    name: 'More',
    props: {
        name: [String]
    },
    components: {
        SectionTitle,
        CarouselFlatOneByOne
    },
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
        go2 () {
            this.$router.push({
                name: this.name
            })
        }
    }
}
</script>

<style lang="scss">
    .more {
        text-align: center;
        color: #fff;
        margin: 40px;
        .span {
            background: red;
            border-radius: 15px;
            padding: 0 10px;
            cursor: pointer;
            &:hover {
                background: #282828;
            }
        }
    }
</style>