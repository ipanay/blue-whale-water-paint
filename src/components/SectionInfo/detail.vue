<template>
    <div class="info-detail">
        <div class="title">
            <h4>{{detail.title || '水性环氧防腐漆'}}</h4>
            <p class="subInfo">{{detail.subInfo || '发布时间: 2022-07-14 13:18:49 浏览次数: 633次'}}</p>
        </div>
        <img src="" alt="" class="img">
        <div class="intro" v-show="detail.intro">
            <span class="subtitle">产品介绍</span>
            <p class="infoItem">
                {{detail.intro || '该产品采用水性硅酸盐树脂、锌粉及相关助剂制备而成。施工简单方便，漆膜干燥迅速，硬度高，防护性能优异'}}
            </p>
        </div>
        <div class="about" v-show="detail.about">
            <span class="subtitle">应用领域</span>
            <p class="infoItem">
                {{detail.about || '适用于对防腐要求非常高的大型钢结构、铸铁件的防腐防锈，与高性能的中间漆和面漆配套使用，可进一步提高防腐性能。'}}
            </p>
        </div>
        <div class="technology" v-show="detail.technology">
            <span class="subtitle">技术参数</span>
            <table class="infoItem">
            </table>
        </div>
        <div class="system" v-show="detail.system">
            <span class="subtitle">配套体系</span>
            <p class="infoItem">
                {{detail.system || '水性无机富锌底漆+水性环氧云铁中间漆+水性丙烯酸聚氨酯面漆'}}
            </p>
        </div>
        <div class="instructions" v-show="detail.instructions">
            <span class="subtitle">施工说明</span>
            <ul class="infoItem">
                <li v-for="item,i in detail.instructions || []" :key="item">{{i+1}}. {{item || '涂装前将基材表面的油污、浮锈、旧漆皮等污物清除干净，保证基材表面的洁净和干燥。'}}</li>
            </ul>
        </div>
        <div class="store" v-show="detail.store">
            <span class="subtitle">储存与运输</span>
            <ul class="infoItem">
                <li v-for="item,i in detail.store || []" :key="item">{{i+1}} {{item || '产品应密封存放在干燥通风良好的库房内，贮存温度在5℃以上，35℃以下，防止浸水、阳光直接照射，隔绝火源，远离热源。'}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoDetail',
    props: {
        detail: {
            type: Object,
            default: () => ({
                title: '',
                content: ''
            })
        },
    },
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
    }
    
}
</script>

<style lang="scss" scoped>
    .info-detail {
        .subtitle {
            font-weight: 700;
        }
    }
</style>