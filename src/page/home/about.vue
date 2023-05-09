<template>
    <div class="about">
        <SectionTitle title="关于蓝鲸" describe="蓝鲸水性工业漆 专业金属防腐涂装"></SectionTitle>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
export default {
    name: 'About',
    components: {
        SectionTitle
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
.about {
    background: #1b1b1b;
    padding-top: 30px;
}
</style>