<template>
    <div class="about">
        <SectionTitle title="关于蓝鲸" describe=""></SectionTitle>
        <div class="infocards">
            <InfoCard title="公司简介" :describe="comInfo" src="about?id=公司简介"></InfoCard>
            <InfoCard title="企业文化" :describe="comCulture" src="about?id=企业文化"></InfoCard>
        </div>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import InfoCard from '@/components/InfoCard'
export default {
    name: 'About',
    components: {
        SectionTitle,
        InfoCard
    },
    data () {
        return {
            comInfo: '',
            comCulture: '',
        }
    },
    created () {
        this.comCulture = `一）核心价值观——客户满意是我们的宗旨

内涵释义：客户是企业发展的基石，让内外部客户满意是一切工作的出发点和落脚点，我们要把客户满意的经营理念有效贯穿于企业发展和运营全过程。要始终坚持以客户为中心，想客户之所想，急客户之所急，满足客户之所需，为客户提供一流的产品、技术、服务，成就客户价值，与客户合作共赢，同发展，共成长。   



（二）核心文化——责任、创新、沟通、包容`
        this.comInfo = `蓝鲸水漆是一家致力于中国工业绿色发展，专业从事环保水漆的研发、生产、销售及服务的一体化环保型技术企业。
                    公司位于有五省通衢，华夏九洲之称的江苏徐州，交通发达，运输便利。
                    公司自成立以来，历经数载经营，积累了丰富的技术生产及管理经验。公司始终秉承“质量为基础，诚信赢天下”的经营理念，为广大客户提供高品质的产品和优质的服务。`
    }
}
</script>

<style lang="scss" scoped>
.about {
    background: #1b1b1b;
    padding: 30px 120px;
    .infocards {
        display: flex;
        justify-content: center;
    }
}
</style>