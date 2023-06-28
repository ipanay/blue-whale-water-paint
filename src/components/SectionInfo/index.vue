<template>
    <div class="section-info-container">
        <Nav @getNav="getNav"></Nav>
        <Information :info="info" :isImage="isImage_"></Information>
    </div>
</template>

<script>
import Nav from './nav.vue'
import Information from './info.vue'
import { mapState } from 'vuex'
export default {
    name: 'SectionInfo',
    components: {
        Nav,
        Information
    },
    props: {
        isImage: [Boolean]
    },
    data () {
        return {
            infoMap: {},
            info: {},
            isImage_: this.isImage
        }
    },
    computed: {
        ...mapState(['sections'])
    },
    created () {
    },
    methods: {
        getNav(name, id) {
            if (name) {
                const module = this.sections[name]
                if (!module) return
                const content = module.find(item => item.title == id)
                if (id && content) {
                    this.info = content
                }
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .section-info-container {
        display: flex;
        justify-content: center;
        padding: 30px;
        text-align: center;
        min-height: 350px;
        overflow: hidden;
        background: #1c1c1c;
    }
</style>