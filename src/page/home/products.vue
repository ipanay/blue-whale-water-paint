<template>
    <div class="products">
        <SectionTitle title="产品中心" describe=""></SectionTitle>
        <CarouselFlatOneByOne></CarouselFlatOneByOne>
        <More name="product"></More>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import CarouselFlatOneByOne from '@/components/CarouselFlatOneByOne'
import More from '@/components/more'

export default {
    name: 'Products',
    components: {
        SectionTitle,
        CarouselFlatOneByOne,
        More
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
.products {
    background: #141414;
    padding: 30px 120px;
}
</style>