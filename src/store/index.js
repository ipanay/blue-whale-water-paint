import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import * as modules from './module';
// import persistedState  from 'vuex-persistedstate';
Vue.use(Vuex);
const store = new Store({
    state: {
        navList: [

            {
                title: '网站首页',
                to: '/home',
                name: 'home',
            },
            {
                title: '关于蓝鲸',
                to: '/about',
                name: 'about',
                child: [
                    {
                        title: '公司简介',
                        to: '/about?id=公司简介',
                    },
                    {
                        title: '企业文化',
                        to: '/about?id=企业文化',
                    },
                    {
                        title: '荣誉资质',
                        to: '/about?id=荣誉资质',
                    },
                ]
            },{
                title: '经典案例',
                to: '/case',
                name: 'case',
                child: [
                    {
                        title: '钢结构',
                        to: '/case?id=钢结构',
                    },
                    {
                        title: '彩钢瓦翻新',
                        to: '/case?id=彩钢瓦翻新',
                    },
                    {
                        title: '活动住房、集装箱',
                        to: '/case?id=活动住房、集装箱',
                    },
                    {
                        title: '机械设备',
                        to: '/case?id=机械设备',
                    },
                    {
                        title: '金属钢体',
                        to: '/case?id=金属钢体',
                    },
                    {
                        title: '钢模版',
                        to: '/case?id=钢模版',
                    },
                    {
                        title: '挂车车厢',
                        to: '/case?id=挂车车厢',
                    },
                    {
                        title: '特种集装箱',
                        to: '/case?id=特种集装箱',
                    },
                    {
                        title: '活动板房',
                        to: '/case?id=活动板房',
                    },
                ]
            },
            {
                title: '产品中心',
                to: '/product',
                name: 'product',
                child: [
                    {
                        title: '水性环氧防腐漆',
                        to: '/product?id=水性环氧防腐漆',
                    },
                    {
                        title: '水性无机富锌漆',
                        to: '/product?id=水性无机富锌漆',
                    },
                    {
                        title: '水性醇酸漆',
                        to: '/product?id=水性醇酸漆',
                    },
                    {
                        title: '水性丙烯酸漆',
                        to: '/product?id=水性丙烯酸漆',
                    },
                    {
                        title: '水性氨基烤漆',
                        to: '/product?id=水性氨基烤漆',
                    },
                    {
                        title: '水性丙烯酸聚氨酯漆',
                        to: '/product?id=水性丙烯酸聚氨酯漆',
                    },
                ]
            },
            {
                title: '新闻资讯',
                to: '/news',
                name: 'news',
                child: [
                    {
                        title: '集团新闻',
                        to: '/news?id=集团新闻',
                    },
                    // {
                    //     title: '行业动态',
                    //     to: '/news?id=行业动态',
                    // }
                ]
            },
            // {
            //     title: '招商加盟',
            //     to: '/join',
            //     child: [
            //         {
            //             title: '招商加盟',
            //             to: '/home?id=',
            //         }
            //     ]
            // },
            {
                title: '联系蓝鲸',
                to: '/connect',
                name: 'connect',
                child: [
                    // {
                    //     title: '联系蓝鲸',
                    //     to: '/home?id=',
                    // }
                ]
            },
        ],
        sections: {
            product: [
                {
                    title: '水性环氧防腐漆',
                    content: ['http:img/products/shuixinghuanyang/水性环氧底漆.jpg','http:img/products/shuixinghuanyang/水性环氧富锌底漆.jpg','http:img/products/shuixinghuanyang/水性环氧云铁中间漆.jpg'],
                    details: {
                        水性环氧底漆: {
                            title: '水性环氧防腐漆',
                            subInfo: '发布时间: 2022-07-14 13:18:49 浏览次数: 633次',
                            intro: '该产品采用水性硅酸盐树脂、锌粉及相关助剂制备而成。施工简单方便，漆膜干燥迅速，硬度高，防护性能优异',
                            about: '适用于对防腐要求非常高的大型钢结构、铸铁件的防腐防锈，与高性能的中间漆和面漆配套使用，可进一步提高防腐性能。',
                            system: '水性无机富锌底漆+水性环氧云铁中间漆+水性丙烯酸聚氨酯面漆',
                            instructions: [
                                '涂装前将基材表面的油污、浮锈、旧漆皮等污物清除干净，保证基材表面的洁净和干燥。',
                                '砂轮打磨以除去工件表面的焊瘤、飞溅、以及火工矫正部位的硬化层。所有气割、剪切或机械加工后的自由边锐角均应打磨到R2。',
                                '喷砂至Sa2.5级或者动力工具清理至St2级，喷砂后6小时内进行施工。',
                                '可采用刷涂、喷涂方法施工，涂装前应先将漆搅拌均匀。若黏度偏高，可加入适量去离子水，加水量不宜超过10%，应边添加边搅拌，保证漆液均匀。',
                                '施工时保持良好的通风，环境温度低于5℃或者湿度大于85%的状况下不建议施工。',
                                '雨雪雾天气不能在户外施工，如已经施工，可采取用篷布遮盖等办法保护漆膜。'
                            ],
                            store: [
                                '产品应密封存放在干燥通风良好的库房内，贮存温度在5℃以上，35℃以下，防止浸水、阳光直接照射，隔绝火源，远离热源。',
                                '产品在符合贮存条件下，自生产之日起贮存期为一年，超过贮存期可进行检验，如符合标准仍可使用。',
                                '产品在运输过程中，应防止严寒、雨淋、日光曝晒，应符合运输部门的有关规定。',
                            ]
                        },
                        水性环氧富锌底漆: {
                            title: '水性环氧富锌底漆',
                            subInfo: '发布时间: 2020-03-19 18:33:20浏览次数：292 次',
                            intro: '该产品采用水性环氧树脂、胺固化剂、锌粉及相关助剂制备而成；不添加铬、铅等重金属含量高的防锈颜料。涂膜具有优异的物理机械性能、优异的硬度、附着力。良好的耐盐雾、耐冲击、耐水、耐油性。',
                            about: '适用于重防腐领域的金属底涂，对防腐要求较高的大型钢结构、桥梁、船舶、塔机、储罐的防腐防锈，与高性能的中间漆和面漆配套使用，可进一步提高防腐性能。',
                            instructions: [
                                '涂装前将基材表面的油污、浮锈、旧漆皮等污物清除干净，保证基材表面的洁净和干燥。',
                                '砂轮打磨以除去工件表面的焊瘤、飞溅、以及火工矫正部位的硬化层。所有气割、剪切或机械加工后的自由边锐角均应打磨到R2。',
                                '喷砂至Sa2.5级或者动力工具清理至St2级，喷砂后6小时内进行施工。',
                                '可采用刷涂、喷涂方法施工，涂装前应先将漆搅拌均匀。若黏度偏高，可加入适量去离子水，加水量不宜超过10%，应边添加边搅拌，保证漆液均匀。',
                                '施工时保持良好的通风，环境温度低于5℃或者湿度大于85%的状况下不建议施工。',
                                '雨雪雾天气不能在户外施工，如已经施工，可采取用篷布遮盖等办法保护漆膜。'
                            ],
                            store: [
                                '产品应密封存放在干燥通风良好的库房内，贮存温度在5℃以上，35℃以下，防止浸水、阳光直接照射，隔绝火源，远离热源。',
                                '产品在符合贮存条件下，自生产之日起贮存期为一年，超过贮存期可进行检验，如符合标准仍可使用。',
                                '产品在运输过程中，应防止严寒、雨淋、日光曝晒，应符合运输部门的有关规定。',
                            ]
                        },
                        水性环氧云铁中间漆: {
                            title: '水性环氧云铁中间漆',
                            subInfo: '发布时间: 2020-03-19 18:32:56浏览次数：231 次',
                            intro: '该产品采用水性环氧树脂、胺固化剂、云母氧化铁及相关助剂制备而成。涂膜具有较高的耐盐雾性能，产品具有较高的封闭性，可有效阻挡外来介质对涂层的渗透。',
                            about: '适用于重防腐领域的金属涂装，对防腐要求较高的大型钢结构、桥梁、船舶、塔机、储罐的防腐防锈，与高性能的底漆和面漆配套使用，可进一步提高防腐性能。',
                            instructions: [
                                '涂装前将基材表面的油污、浮锈、旧漆皮等污物清除干净，保证基材表面的洁净和干燥。',
                                '砂轮打磨以除去工件表面的焊瘤、飞溅、以及火工矫正部位的硬化层。所有气割、剪切或机械加工后的自由边锐角均应打磨到R2。',
                                '喷砂至Sa2.5级或者动力工具清理至St2级，喷砂后6小时内进行施工。',
                                '可采用刷涂、喷涂方法施工，涂装前应先将漆搅拌均匀。若黏度偏高，可加入适量去离子水，加水量不宜超过10%，应边添加边搅拌，保证漆液均匀。',
                                '施工时保持良好的通风，环境温度低于5℃或者湿度大于85%的状况下不建议施工。',
                                '雨雪雾天气不能在户外施工，如已经施工，可采取用篷布遮盖等办法保护漆膜。'
                            ],
                            store: [
                                '产品应密封存放在干燥通风良好的库房内，贮存温度在5℃以上，35℃以下，防止浸水、阳光直接照射，隔绝火源，远离热源。',
                                '产品在符合贮存条件下，自生产之日起贮存期为一年，超过贮存期可进行检验，如符合标准仍可使用。',
                                '产品在运输过程中，应防止严寒、雨淋、日光曝晒，应符合运输部门的有关规定。',
                            ]
                        }
                    }
                },
                {
                    title: '水性无机富锌漆',
                    content: ['http:img/products/shuixingwujifuxinqi/水性无机富锌底漆.jpeg'],
                    details: {
                        水性无机富锌底漆: {
                            title: '水性无机富锌底漆',
                            subInfo: '发布时间: 2022-07-14 13:18:49浏览次数：636 次',
                            intro: '该产品采用水性硅酸盐树脂、锌粉及相关助剂制备而成。施工简单方便，漆膜干燥迅速，硬度高，防护性能优异',
                            about: '适用于对防腐要求非常高的大型钢结构、铸铁件的防腐防锈，与高性能的中间漆和面漆配套使用，可进一步提高防腐性能。                            ',
                            system: '水性无机富锌底漆+水性环氧云铁中间漆+水性丙烯酸聚氨酯面漆',
                            instructions: [
                                '涂装前将基材表面的油污、浮锈、旧漆皮等污物清除干净，保证基材表面的洁净和干燥。',
                                '砂轮打磨以除去工件表面的焊瘤、飞溅、以及火工矫正部位的硬化层。所有气割、剪切或机械加工后的自由边锐角均应打磨到R2。',
                                '喷砂至Sa2.5级或者动力工具清理至St2级，喷砂后6小时内进行施工。',
                                '可采用刷涂、喷涂方法施工，涂装前应先将漆搅拌均匀。若黏度偏高，可加入适量去离子水，加水量不宜超过10%，应边添加边搅拌，保证漆液均匀。',
                                '施工时保持良好的通风，环境温度低于5℃或者湿度大于85%的状况下不建议施工。',
                                '雨雪雾天气不能在户外施工，如已经施工，可采取用篷布遮盖等办法保护漆膜。'
                            ],
                            store: [
                                '产品应密封存放在干燥通风良好的库房内，贮存温度在5℃以上，35℃以下，防止浸水、阳光直接照射，隔绝火源，远离热源。',
                                '产品在符合贮存条件下，自生产之日起贮存期为一年，超过贮存期可进行检验，如符合标准仍可使用。',
                                '产品在运输过程中，应防止严寒、雨淋、日光曝晒，应符合运输部门的有关规定。',
                            ]
                        },
                    }
                },
                {
                    title: '水性醇酸漆',
                    content: ['http:img/products/shuixingchunsuanqi/水性醇酸防锈底漆.png','http:img/products/shuixingchunsuanqi/水性醇酸面漆.png','http:img/products/shuixingchunsuanqi/水性醇酸底面合一漆.png'],
                    details: {
                        水性醇酸防锈底漆: {
                            title: '水性醇酸防锈底漆',
                            subInfo: '发布时间: 2020-03-19 18:37:37浏览次数：1385 次',
                            about: '适合低、中等防腐防锈要求，适用于一般要求的钢结构建筑、机械设备等金属表面的防锈打底；主要应用于C型钢、H型钢、减震器、矿井支架、龙门吊等领域的涂装。                             ',
                            instructions: [
                                '涂装前将基材表面的油污、浮锈、旧漆皮等污物清除干净，保证基材表面的洁净和干燥。',
                                '砂轮打磨以除去工件表面的焊瘤、飞溅、以及火工矫正部位的硬化层。所有气割、剪切或机械加工后的自由边锐角均应打磨到R2。',
                                '喷砂至Sa2.5级或者动力工具清理至St2级，喷砂后6小时内进行施工。',
                                '可采用刷涂、喷涂方法施工，涂装前应先将漆搅拌均匀。若黏度偏高，可加入适量去离子水，加水量不宜超过10%，应边添加边搅拌，保证漆液均匀。',
                                '施工时保持良好的通风，环境温度低于5℃或者湿度大于85%的状况下不建议施工。',
                                '雨雪雾天气不能在户外施工，如已经施工，可采取用篷布遮盖等办法保护漆膜。'
                            ],
                            store: [
                                '产品应密封存放在干燥通风良好的库房内，贮存温度在5℃以上，35℃以下，防止浸水、阳光直接照射，隔绝火源，远离热源。',
                                '产品在符合贮存条件下，自生产之日起贮存期为一年，超过贮存期可进行检验，如符合标准仍可使用。',
                                '产品在运输过程中，应防止严寒、雨淋、日光曝晒，应符合运输部门的有关规定。',
                            ]
                        },
                        水性醇酸底面合一漆: {
                            title: '水性醇酸底面合一漆',
                            subInfo: '发布时间: 2020-03-19 18:37:10浏览次数：255 次',
                            about: '适合低、中等防腐防锈要求，适用于一般要求的钢结构建筑、机械设备等金属表面的防锈打底；主要应用于C型钢、H型钢、减震器、矿井支架、龙门吊等领域的涂装。                             ',
                            instructions: [
                                '涂装前将基材表面的油污、浮锈、旧漆皮等污物清除干净，保证基材表面的洁净和干燥。',
                                '砂轮打磨以除去工件表面的焊瘤、飞溅、以及火工矫正部位的硬化层。所有气割、剪切或机械加工后的自由边锐角均应打磨到R2。',
                                '喷砂至Sa2.5级或者动力工具清理至St2级，喷砂后6小时内进行施工。',
                                '可采用刷涂、喷涂方法施工，涂装前应先将漆搅拌均匀。若黏度偏高，可加入适量去离子水，加水量不宜超过10%，应边添加边搅拌，保证漆液均匀。',
                                '施工时保持良好的通风，环境温度低于5℃或者湿度大于85%的状况下不建议施工。',
                                '雨雪雾天气不能在户外施工，如已经施工，可采取用篷布遮盖等办法保护漆膜。'
                            ],
                            store: [
                                '产品应密封存放在干燥通风良好的库房内，贮存温度在5℃以上，35℃以下，防止浸水、阳光直接照射，隔绝火源，远离热源。',
                                '产品在符合贮存条件下，自生产之日起贮存期为一年，超过贮存期可进行检验，如符合标准仍可使用。',
                                '产品在运输过程中，应防止严寒、雨淋、日光曝晒，应符合运输部门的有关规定。',
                            ]
                        },
                    }
                },
            ],
            about: [
                {
                    title: '公司简介',
                    content: `蓝鲸水漆是一家致力于中国工业绿色发展，专业从事环保水漆的研发、生产、销售及服务的一体化环保型技术企业。
    公司位于有五省通衢，华夏九洲之称的江苏徐州，交通发达，运输便利。
    公司自成立以来，历经数载经营，积累了丰富的技术生产及管理经验。公司始终秉承“质量为基础，诚信赢天下”的经营理念，为广大客户提供高品质的产品和优质的服务。`
                },
                {
                    title: '企业文化',
                    content: `（一）核心价值观——客户满意是我们的宗旨
    内涵释义：客户是企业发展的基石，让内外部客户满意是一切工作的出发点和落脚点，我们要把客户满意的经营理念有效贯穿于企业发展和运营全过程。要始终坚持以客户为中心，想客户之所想，急客户之所急，满足客户之所需，为客户提供一流的产品、技术、服务，成就客户价值，与客户合作共赢，同发展，共成长。   
                    
    （二）核心文化——责任、创新、沟通、包容
                    
    内涵释义：
    责任——牢记使命  永葆激情
    责任如山。责任是一种担当，一种境界和觉悟，它与使命感紧密相连，是企业和员工干好工作、成就事业的前提，是战胜困难、取得成功的强大精神力量。蓝鲸水漆的行业地位和社会影响力，决定了我们既要承担起对客户、股东、员工的责任，更要承担起对国家、民族和社会的责任。
    有责任才有动力。对于广大员工，责任就是要履行好岗位职责，干就负责、做就到位；对于领导干部，责任就是要坚持以人为本，永葆创业激情，不断追求远大理想，持续为客户创造价值，为股东创造利润，为员工创造幸福。
    创新——颠覆传统  追新求变
    创新为核。创新是企业发展的永恒主题，是企业生存的根本。在市场竞争激烈、科学技术突飞猛进的今天，不创新，就意味着灭亡，企业要赢得发展，必须要追新求变。
    创新意味着不断突破习惯思维的束缚，勤于探索新思路，勇于尝试新方法，努力创造新成果。我们需牢记：今天不创新，明天就会被竞争对手超越，市场就会抛弃我们。
    沟通——真诚交流  融合升华
    沟通是桥。沟通是企业上下达成统一意志、团结协作的前提和基础，是解决矛盾、化解分歧的良药。沟通启迪创新灵感，交流激发思想火花，让不同文化在交融中绽放。
    沟通是一种手段，是企业组织的生命线。沟通的目的就是步调一致、相互协作，共同发展。沟通要以各方坦诚相见为基础，伟大的事业需要一颗真诚的心与人沟通，只有与人良好的沟通，才能获得他人的鼎力相助，才能形成高效协作的基础，才能达成发展的合力。
    包容——海纳百川  博采众长
    包容似海。海纳百川，有容乃大。江苏公羊要成为受人尊敬的国际化跨国集团，就要有大海一样的文化容量，融合共生，携手发展。
    包容，就是要以博大的胸怀，包容各种文化，体现出文化的包容性和“沟通四海、容纳八方”的吸纳力；包容，就是要求同存异、尊重个性、拓展共性，强调的是战略的统一和协同，是和而不同；包容不是纵容，是主动吸纳，而非被动容忍，体现的是企业高度的文化自觉和文化自信。
    “责任、创新、沟通、包容”四位一体，相互影响，互为补充，共同构成了蓝鲸水漆核心文化。责任是落脚点，体现在每一个岗位、每一个细节、每一项日常工作中；创新是动力，是企业持续发展的助推器和活力之源；沟通是一种方式、一种手段，高效协作是最终目的；包容是一种态度、一种胸怀。`
                },
                {
                    title: '荣誉资质',
                    content: ['http:img/zizhi/1.jpeg','http:img/zizhi/2.jpeg','http:img/zizhi/3.jpeg']
                }
            ],
            case: [
                {
                    title: '钢结构',
                    content: ['http:img/gangjiegou/1.jpg','http:img/gangjiegou/2.jpg','http:img/gangjiegou/3.jpg','http:img/gangjiegou/4.jpg',
                    'http:img/gangjiegou/5.jpg','http:img/gangjiegou/6.jpg','http:img/gangjiegou/7.jpg','http:img/gangjiegou/8.jpg',
                    'http:img/gangjiegou/9.jpg','http:img/gangjiegou/10.jpg','http:img/gangjiegou/11.jpg','http:img/gangjiegou/12.jpg',
                    'http:img/gangjiegou/13.jpg','http:img/gangjiegou/14.jpg','http:img/gangjiegou/15.jpeg']
                },
                {
                    title: '彩钢瓦翻新',
                    content: ['http:img/caigangwafanxin/1.jpg','http:img/caigangwafanxin/2.jpg','http:img/caigangwafanxin/3.jpg','http:img/caigangwafanxin/4.jpg']
                },
                {
                    title: '活动住房、集装箱',
                    content: ['http:img/huodongzhufangjizhuangxiang/1.jpg','http:img/huodongzhufangjizhuangxiang/2.jpg','http:img/huodongzhufangjizhuangxiang/3.jpg','http:img/huodongzhufangjizhuangxiang/4.jpg',
                    'http:img/huodongzhufangjizhuangxiang/5.jpg','http:img/huodongzhufangjizhuangxiang/6.jpg','http:img/huodongzhufangjizhuangxiang/7.jpg','http:img/huodongzhufangjizhuangxiang/8.jpg',
                    'http:img/huodongzhufangjizhuangxiang/9.jpg','http:img/huodongzhufangjizhuangxiang/10.jpg','http:img/huodongzhufangjizhuangxiang/11.jpg','http:img/huodongzhufangjizhuangxiang/12.jpg',
                    'http:img/huodongzhufangjizhuangxiang/13.jpg','http:img/huodongzhufangjizhuangxiang/14.jpg','http:img/huodongzhufangjizhuangxiang/15.jpg','http:img/huodongzhufangjizhuangxiang/16.jpg']
                },
                {
                    title: '机械设备',
                    content: ['http:img/jixieshebei/1.jpg','http:img/jixieshebei/2.jpg','http:img/jixieshebei/3.jpg']
                },
                {
                    title: '金属钢体',
                    content: ['http:img/jinshugangti/1.jpg','http:img/jinshugangti/2.jpg','http:img/jinshugangti/3.jpg','http:img/jinshugangti/4.jpg',
                    'http:img/jinshugangti/5.jpg','http:img/jinshugangti/6.jpg','http:img/jinshugangti/7.jpg','http:img/jinshugangti/8.jpg',
                    'http:img/jinshugangti/9.jpg','http:img/jinshugangti/10.jpg','http:img/jinshugangti/11.jpg','http:img/jinshugangti/12.jpg',
                    'http:img/jinshugangti/13.jpg']
                },
                {
                    title: '钢模版',
                    content: ['http:img/gangmoban/1.jpg','http:img/gangmoban/2.jpg','http:img/gangmoban/3.jpg','http:img/gangmoban/4.jpg',
                    'http:img/gangmoban/5.jpg','http:img/gangmoban/6.jpg','http:img/gangmoban/7.jpg','http:img/gangmoban/8.jpg',
                    'http:img/gangmoban/9.jpg','http:img/gangmoban/10.jpg','http:img/gangmoban/11.jpg']
                },
                {
                    title: '挂车车厢',
                    content: ['http:img/guachechexiang/1.jpg','http:img/guachechexiang/2.jpg','http:img/guachechexiang/3.jpg','http:img/guachechexiang/4.jpg',
                    'http:img/guachechexiang/5.jpg','http:img/guachechexiang/6.jpg']
                },
                {
                    title: '活动板房',
                    content: ['http:img/huodongbanfang/1.jpg','http:img/huodongbanfang/2.jpg','http:img/huodongbanfang/3.jpg','http:img/huodongbanfang/4.jpg']
                },
                {
                    title: '特种集装箱',
                    content: ['http:img/tezhongjizhuangxiang/1.jpg','http:img/tezhongjizhuangxiang/2.jpg','http:img/tezhongjizhuangxiang/3.jpg']
                },
            ],
            connect: [
                {
                    title: '联系蓝鲸',
                    content: ''
                }
            ]
        
        }
    },
    modules,
    getters: {
        // 是否为窄屏
        isSmall: ({nav: {isSmall}}) => isSmall,
        // 窄屏显示宽度设置
        multiple: ({nav: {isSmall}}) => isSmall ? .6 : 1,
        // 当前浏览器宽度
        windowWidth: ({nav: {windowWidth}}) => windowWidth,
        // 终端列表
        // teminalList: ({teminal: {teminalList}}) => teminalList,
        // 终端类型列表
        // stypeList: ({teminal: {stypeList}}) => stypeList,
        // 版本号列表
        // versionTypeList: ({version: {typeList}}) => typeList,
        //    权限判断
        checkPermission: ({app: {menuList}}) => (id) => {

            if (id === '0') return true;
       
            return !!menuList.find(item => {
                return item.SysMenuId === id;
            });
        },
    },
    // plugins:[persistedState()]
});
export default store;
export {
    store
};

/*
(function (win) {
    win.addEventListener('beforeunload', function () {
        win.sessionStorage.setItem(StorageKey.RELOAD_STORE_APP_STATE, JSON.stringify(store.state));
    });
})(window);*/
