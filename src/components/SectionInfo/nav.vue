<template>
    <div class="info-nav-container">
        <div class="nav-title-container">
            <h1 class="nav-title">{{currentNav.title}}</h1>
            <!-- <span>></span> -->
        </div>
        <ul class="nav-list">
            <li
                class="nav-item"
                v-for="nav, i in currentNavList"
                :key="i"
                :class="{active: id==nav.title}"
                @click="infoChange(nav.title)"
            >
                {{nav.title}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Nav',
    props: {
    },
    computed: {
        ...mapState(['navList'])
    },
    watch: {
        '$route.name' (routeName) {
            this.getCurrentNav(routeName)
        },
        '$route.query': {
            handler (query) {
                this.infoChange(query.id || '')
            },
            deep: true
        } 
        
    },
    data () {
        return {
            currentNav: {},
            currentNavList: [],
            id: 0
        }
    },
    created () {
        const title = this.$route.query.id || ''
        const routeName = this.$route.name
        this.getCurrentNav(routeName)
        if (this.currentNavList) {
            if (this.currentNavList.length) {
                title ? this.infoChange(title) : this.currentNavList[0].title && this.infoChange(this.currentNavList[0].title)
            } else {
                this.infoChange(routeName)
            }
        }       
    },
    methods: {
        getCurrentNav (routeName) {
            const currentNav = this.navList.find(item => item.name == routeName)
            if (currentNav) {
                this.currentNav = currentNav
                this.currentNavList = this.currentNav.child
            }
        },
        infoChange (title) {
            this.id = title
            const { name } = this.$route
            this.$emit('getNav', name, title)
        }
    }
}
</script>

<style lang="scss" scoped>
    .info-nav-container {
        display: inline-block;
        text-align: center;
        width: 260px;
        background: #1c1c1c;
        .nav-title-container {
            line-height: 68px;
            background: #105dad;
            color: #fff;
            text-align: left;
            padding-left: 20px;
            .nav-title {
                font-size: 20px;
            }
        }
        .nav-list {
            color: #999;
            text-align: left;
            .nav-item {
                height: 48px;
                line-height: 48px;
                text-indent: 1.5em;
                border: #4C4C4C 1px solid;
                border-top: 0 none;
                cursor: pointer;
                &:hover,&.active {
                    color: #105dad;
                }
            }
        }
    }
</style>