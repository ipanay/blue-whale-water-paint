<template>
    <div class="cases">
        <SectionTitle title="经典案例" describe=""></SectionTitle>
        <CarouselFlow :list="sections.case||[]"></CarouselFlow>
        <More name="case"></More>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import SectionTitle from '@/components/SectionTitle'
import CarouselFlow from '@/components/CarouselFlow'
import More from '@/components/more'
export default {
    name: 'Cases',
    components: {
        SectionTitle,
        CarouselFlow,
        More
    },
    data () {
        return {
        }
    },
    computed: {
        ...mapState(['sections'])
    },
    created () {
    }
}
</script>

<style lang="scss">
.cases {
    background-image: url('http:img/bg/bg_cases.jpg');
    padding: 30px 0px;
    overflow: hidden;
}
</style>