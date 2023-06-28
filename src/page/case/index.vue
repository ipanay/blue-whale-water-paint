<template>
  <div class="home">
    <HeaderBgImg :src="headerBgImg"></HeaderBgImg>
    <SectionInfo :isImage="true"></SectionInfo>
  </div>
</template>

<script>
import HeaderBgImg from '@/components/HeaderBgImg'
import SectionInfo from '@/components/SectionInfo'
export default {
    name: 'Case',
    components: {
        HeaderBgImg,
        SectionInfo
    },
    data () {
        return {
            headerBgImg: '',
            sectionInfo: ''
        }
    },
    created () {
        this.headerBgImg = 'http:img/bg/bg_about.jpg'
    }
}
</script>

<style>

</style>