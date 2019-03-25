/* eslint-disable */
import dongdong from "./avatars/dongdong.jpg";
import neo from "./avatars/neo.jpg";
import dora from "./avatars/dora.jpg";
import mark from "./avatars/mark.jpg";
import samantha from "./avatars/samantha.jpg";
import justin from "./avatars/justin.jpg";
import leslie from "./avatars/leslie.jpg";
import ying from "./avatars/ying.jpg";

import dongdong_drama from './persons/dongdong'
import justin_drama from './persons/justin'
import neo_drama from './persons/neo'
import ying_drama from './persons/ying'
import mark_drama from './persons/mark'
import dora_drama from './persons/dora'
import leslie_drama from './persons/leslie'
import samantha_drama from './persons/samantha'

export default {
    // 剧本
    dramas: ['20.青衣怪谈', '19.坠入深渊', '18.南越王陵', '17.反光', '16.幽灵群岛', '15.业火馆', '14.狼人之血', '13.校园灵异', '12.上海滩杀人', '11.皂罗袍', '10.大明青龙劫', '9.记忆碎片', '8.儿童劫', '7.苍笙九剑', '6.大胥秘史', '5.星座怪谈', '4.盖弥书院', '3.良辰吉日', '2.孽海疑云', '1.蛊魂铃'],
    // 玩家
    persons: [
        { id: 'Dong', name: '老板', avatar: dongdong, participant: '18/20' },
        { id: 'Justin', name: '郭磊', avatar: justin, participant: '18/20' },
        { id: 'Neo', name: '周游', avatar: neo, participant: '19/20' },
        { id: 'Ying', name: '颖姐', avatar: ying, participant: '16/20' },
        { id: 'Mark', name: '马克', avatar: mark, participant: '20/20' },
        { id: 'Dora', name: '雪莲', avatar: dora, participant: '20/20' },
        { id: 'Leslie', name: '苏震', avatar: leslie, participant: '19/20' },
        { id: 'Samantha', name: '慧莹', avatar: samantha, participant: '10/20' }],
    // 列表数据
    results: {
        ...dongdong_drama,
        ...justin_drama,
        ...neo_drama,
        ...ying_drama,
        ...mark_drama,
        ...dora_drama,
        ...leslie_drama,
        ...samantha_drama
    }
}
