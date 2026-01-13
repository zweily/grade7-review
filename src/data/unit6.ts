import unit6_supp_a_unit_img from '@/assets/images/background.jpg';
import unit6_supp_ca_a_img from '@/assets/images/u4-textbook.jpg';
import unit6_supp_do_remember_to_wear__img from '@/assets/images/u2-used-to-do.jpeg';
import unit6_supp_hope_you_will_come_h_img from '@/assets/images/u5-funny.jpeg';
import unit6_supp_london_and_shanghai__img from '@/assets/images/u6-river.jpg';
import unit6_supp_sat_img from '@/assets/images/u4-good-at.jpeg';
import unit6_supp_tarren_a_img from '@/assets/images/u4-textbook.jpg';
import unit6_supp_that_sounds_like_it__img from '@/assets/images/u5-funny.jpeg';
import unit6_supp_they_flow_as_quietly_img from '@/assets/images/u5-funny.jpeg';
import unit6_supp_what_do_they_have_in_img from '@/assets/images/u5-funny.jpeg';
import unit6_supp_what_is_the_height_o_img from '@/assets/images/u6-height.jpg';
import unit6_supp_you_have_my_word_img from '@/assets/images/u4-textbook.jpg';
import unit6_supp_a_agra_cover_a_large_img from '@/assets/images/u6-cover.jpg';
import unit6_supp_a_a_a_img from '@/assets/images/u4-textbook.jpg';
import unit6_supp_a_geography_quiz_abo_img from '@/assets/images/u4-textbook.jpg';
import unit6_supp_cruise_taree_img from '@/assets/images/u6-cruise.jpg';
import unit6_supp_eatin_fa_img from '@/assets/images/u4-good-at.jpeg';
import unit6_supp_promise_img from '@/assets/images/u4-textbook.jpg';
import unit6_supp_read_an_article_in_a_img from '@/assets/images/u4-textbook.jpg';
import unit6_supp_sli_anan_ae_img from '@/assets/images/u4-textbook.jpg';
import unit6_supp_the_power_to_shape_t_img from '@/assets/images/u1-power.jpeg';
import unit6_supp_the_rich_history_of__img from '@/assets/images/u6-brochure.jpg';
import unit6_supp_wm_sey_img from '@/assets/images/u4-textbook.jpg';
import type { Section } from '../types';

import u6_w1_img from '@/assets/images/u6-mountain.jpg';
import u6_w2_img from '@/assets/images/u6-river.jpg';
import u6_w3_img from '@/assets/images/u6-lake.jpg';
import u6_w4_img from '@/assets/images/u6-ocean.jpg';
import u6_w5_img from '@/assets/images/u6-height.jpg';
import u6_w6_img from '@/assets/images/u6-ocean.jpg';
import u6_w7_img from '@/assets/images/u6-scenery.jpg';
import u6_w8_img from '@/assets/images/u6-trip.jpg';
import u6_w9_img from '@/assets/images/u6-scenery.jpg';
import u6_w10_img from '@/assets/images/u6-waterfall.png';
import u6_w11_img from '@/assets/images/u6-cover.jpg';
import u6_w12_img from '@/assets/images/u6-mountain.jpg';
import u6_w13_img from '@/assets/images/u6-attract.jpg';
import u6_w14_img from '@/assets/images/u6-tour.jpg';

import u6_ew1_img from '@/assets/images/u6-cruise.jpg';
import u6_ew2_img from '@/assets/images/u3-map.jpg';
import u6_ew3_img from '@/assets/images/u6-leisure.jpg';
import u6_ew4_img from '@/assets/images/u6-brochure.jpg';

import u6_p1_img from '@/assets/images/u3-map.jpg';
import u6_p2_img from '@/assets/images/u6-leisure.jpg';
import u6_p3_img from '@/assets/images/u6-river.jpg';
import u6_p4_img from '@/assets/images/u6-scenery.jpg';
import u6_p5_img from '@/assets/images/u6-trip.jpg';
import u6_p6_img from '@/assets/images/u6-scenery.jpg';
import u6_p7_img from '@/assets/images/u6-ski.jpg';
import u6_p8_img from '@/assets/images/u6-mountain.jpg';

import u6_s1_img from '@/assets/images/u6-mountain.jpg';
import u6_s2_img from '@/assets/images/u6-cover.jpg';
import u6_s3_img from '@/assets/images/u6-ski.jpg';
import u6_s4_img from '@/assets/images/u6-trip.jpg';
import u6_s5_img from '@/assets/images/u6-river.jpg';

export const unit6Data: Section[] = [
  {
    id: 'u6-core-words',
    title: '1. 核心单词 (Core Words)',
    items: [
      {
        id: 'u6-w1',
        type: 'word',
        category: 'core-word',
        english: 'mountain',
        translation: '山；山脉',
        partOfSpeech: 'n.',
        imageUrl: u6_w1_img,
        explanation: 'A very high hill, often with rocks near the top.',
        examples: [
            { id: 'u6-w1-ex1', en: 'We climbed the mountain yesterday.', zh: '我们昨天爬了山。' },
            { id: 'u6-w1-ex2', en: 'The mountain top is covered with snow.', zh: '山顶覆盖着雪。' }
        ],
        extensions: [
            { label: '名词', data: { id: 'u6-w1-ext1', english: 'mountaineer', translation: '登山者', examples: [{ id: 'u6-w1-ext1-ex1', en: 'He is an experienced mountaineer.', zh: '他是一位经验丰富的登山者。' }] } }
        ]
      },
      {
        id: 'u6-w2',
        type: 'word',
        category: 'core-word',
        english: 'river',
        translation: '河；江',
        partOfSpeech: 'n.',
        imageUrl: u6_w2_img,
        explanation: 'A natural wide flow of fresh water across the land.',
        examples: [
            { id: 'u6-w2-ex1', en: 'They went fishing by the river.', zh: '他们去河边钓鱼了。' },
            { id: 'u6-w2-ex2', en: 'The Yellow River is the second longest river in China.', zh: '黄河是中国第二长河。' }
        ],
        extensions: [
            { label: '短语', data: { id: 'u6-w2-ext1', english: 'river bank', translation: '河岸', examples: [{ id: 'u6-w2-ext1-ex1', en: 'We walked along the river bank.', zh: '我们沿着河岸散步。' }] } }
        ]
      },
      {
        id: 'u6-w3',
        type: 'word',
        category: 'core-word',
        english: 'lake',
        translation: '湖',
        partOfSpeech: 'n.',
        imageUrl: u6_w3_img,
        explanation: 'A large area of water surrounded by land.',
        examples: [
            { id: 'u6-w3-ex1', en: 'We can go boating on the lake.', zh: '我们可以在湖上划船。' }
        ],
        extensions: []
      },
      {
        id: 'u6-w4',
        type: 'word',
        category: 'core-word',
        english: 'ocean',
        translation: '海洋',
        partOfSpeech: 'n.',
        imageUrl: u6_w4_img,
        explanation: 'A very large area of sea.',
        examples: [
            { id: 'u6-w4-ex1', en: 'The Pacific Ocean is the largest ocean.', zh: '太平洋是最大的海洋。' }
        ],
        extensions: []
      },
      {
        id: 'u6-w5',
        type: 'word',
        category: 'core-word',
        english: 'height',
        translation: '高度',
        partOfSpeech: 'n.',
        imageUrl: u6_w5_img,
        explanation: 'The measurement of how tall a person or thing is.',
        examples: [
            { id: 'u6-w5-ex1', en: 'What is the height of the building?', zh: '这栋楼的高度是多少？' }
        ],
        extensions: [
            { label: '形容词', data: { id: 'u6-w5-ext1', english: 'high', translation: '高的', examples: [{ id: 'u6-w5-ext1-ex1', en: 'The mountain is very high.', zh: '这座山很高。' }] } }
        ]
      },
      {
        id: 'u6-w6',
        type: 'word',
        category: 'core-word',
        english: 'depth',
        translation: '深度',
        partOfSpeech: 'n.',
        imageUrl: u6_w6_img,
        explanation: 'The distance down from the top surface of something.',
        examples: [
            { id: 'u6-w6-ex1', en: 'Do you know the depth of the pool?', zh: '你知道这个水池的深度吗？' }
        ],
        extensions: [
            { label: '形容词', data: { id: 'u6-w6-ext1', english: 'deep', translation: '深的', examples: [{ id: 'u6-w6-ext1-ex1', en: 'The river is very deep.', zh: '这条河很深。' }] } }
        ]
      },
      {
        id: 'u6-w7',
        type: 'word',
        category: 'core-word',
        english: 'amazing',
        translation: '令人惊叹的',
        partOfSpeech: 'adj.',
        imageUrl: u6_w7_img,
        explanation: 'Extremely surprising and good.',
        examples: [
            { id: 'u6-w7-ex1', en: 'The view is amazing.', zh: '景色令人惊叹。' },
            { id: 'u6-w7-ex2', en: 'He did an amazing job.', zh: '他做得非常出色。' }
        ],
        extensions: [
            { label: '动词', data: { id: 'u6-w7-ext1', english: 'amaze', translation: '使吃惊', examples: [{ id: 'u6-w7-ext1-ex1', en: 'His skill amazed us.', zh: '他的技巧让我们吃惊。' }] } }
        ]
      },
      {
        id: 'u6-w8',
        type: 'word',
        category: 'core-word',
        english: 'trip',
        translation: '旅行',
        partOfSpeech: 'n.',
        imageUrl: u6_w8_img,
        explanation: 'A journey in which you go somewhere and come back again.',
        examples: [
            { id: 'u6-w8-ex1', en: 'Have a nice trip!', zh: '旅途愉快！' },
            { id: 'u6-w8-ex2', en: 'We went on a school trip last week.', zh: '我们上周去了学校旅行。' }
        ],
        extensions: [
            { label: '同义', data: { id: 'u6-w8-ext1', english: 'journey', translation: '旅程', examples: [{ id: 'u6-w8-ext1-ex1', en: 'It was a long journey.', zh: '那是一段漫长的旅程。' }] } }
        ]
      },
      {
        id: 'u6-w9',
        type: 'word',
        category: 'core-word',
        english: 'scenery',
        translation: '风景；景色',
        partOfSpeech: 'n.',
        imageUrl: u6_w9_img,
        explanation: 'The natural features of a landscape.',
        examples: [
            { id: 'u6-w9-ex1', en: 'The scenery here is beautiful.', zh: '这里的风景很美。' }
        ],
        extensions: []
      },
      {
        id: 'u6-w10',
        type: 'word',
        category: 'core-word',
        english: 'waterfall',
        translation: '瀑布',
        partOfSpeech: 'n.',
        imageUrl: u6_w10_img,
        explanation: 'Water dropping from a higher to a lower point.',
        examples: [
            { id: 'u6-w10-ex1', en: 'We took photos of the waterfall.', zh: '我们要拍了瀑布的照片。' }
        ],
        extensions: []
      },
      {
        id: 'u6-w11',
        type: 'word',
        category: 'core-word',
        english: 'cover',
        translation: '覆盖；占地',
        partOfSpeech: 'v.',
        imageUrl: u6_w11_img,
        explanation: 'To lie on the surface of something.',
        examples: [
            { id: 'u6-w11-ex1', en: 'Snow covers the mountain top.', zh: '雪覆盖了山顶。' },
            { id: 'u6-w11-ex2', en: 'The park covers a large area.', zh: '公园占地面积很大。' }
        ],
        extensions: [
            { label: '短语', data: { id: 'u6-w11-ext1', english: 'be covered with', translation: '被...覆盖', examples: [{ id: 'u6-w11-ext1-ex1', en: 'The ground is covered with leaves.', zh: '地面被树叶覆盖。' }] } }
        ]
      },
      {
        id: 'u6-w12',
        type: 'word',
        category: 'core-word',
        english: 'area',
        translation: '区域；面积',
        partOfSpeech: 'n.',
        imageUrl: u6_w12_img,
        explanation: 'A particular part of a place.',
        examples: [
            { id: 'u6-w12-ex1', en: 'This is a restricted area.', zh: '这是禁区。' }
        ],
        extensions: []
      },
      {
        id: 'u6-w13',
        type: 'word',
        category: 'core-word',
        english: 'attract',
        translation: '吸引',
        partOfSpeech: 'v.',
        imageUrl: u6_w13_img,
        explanation: 'To pull or draw someone or something towards them.',
        examples: [
            { id: 'u6-w13-ex1', en: 'The flowers attract bees.', zh: '花朵吸引蜜蜂。' },
            { id: 'u6-w13-ex2', en: 'The show attracts many visitors.', zh: '展览吸引了许多游客。' }
        ],
        extensions: [
            { label: '名词', data: { id: 'u6-w13-ext1', english: 'attraction', translation: '吸引力；景点', examples: [{ id: 'u6-w13-ext1-ex1', en: 'The Great Wall is a famous tourist attraction.', zh: '长城是著名的旅游景点。' }] } }
        ]
      },
      {
        id: 'u6-w14',
        type: 'word',
        category: 'core-word',
        english: 'tour',
        translation: '旅游',
        partOfSpeech: 'n./v.',
        imageUrl: u6_w14_img,
        explanation: 'A journey made for pleasure.',
        examples: [
            { id: 'u6-w14-ex1', en: 'We went on a guided tour of the city.', zh: '我们参加了城市的导游游览。' }
        ],
        extensions: [
            { label: '名词', data: { id: 'u6-w14-ext1', english: 'tourist', translation: '游客', examples: [{ id: 'u6-w14-ext1-ex1', en: 'There are many tourists in Summer.', zh: '夏天有很多游客。' }] } }
        ]
      }
    ]
  },
  {
    id: 'u6-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      {
        id: 'u6-ew1',
        type: 'word',
        category: 'extended-word',
        english: 'cruise',
        translation: '乘船游览',
        partOfSpeech: 'n./v.',
        imageUrl: u6_ew1_img,
        explanation: 'A journey on a large ship for pleasure.',
        examples: [
            { id: 'u6-ew1-ex1', en: 'They went on a cruise down the Nile.', zh: '他们乘船游览了尼罗河。' }
        ],
        extensions: []
      },
      {
        id: 'u6-ew2',
        type: 'word',
        category: 'extended-word',
        english: 'quiz',
        translation: '测验；问答',
        partOfSpeech: 'n.',
        imageUrl: u6_ew2_img,
        explanation: 'A game or competition in which you answer questions.',
        examples: [
            { id: 'u6-ew2-ex1', en: 'We had a geography quiz today.', zh: '我们今天进行了地理测验。' }
        ],
        extensions: []
      },
      {
        id: 'u6-ew3',
        type: 'word',
        category: 'extended-word',
        english: 'leisure',
        translation: '空闲；休闲',
        partOfSpeech: 'n.',
        imageUrl: u6_ew3_img,
        explanation: 'Free time.',
        examples: [
            { id: 'u6-ew3-ex1', en: 'What do you do in your leisure time?', zh: '你空闲时间做什么？' }
        ],
        extensions: [
            { label: '短语', data: { id: 'u6-ew3-ext1', english: 'leisure time', translation: '闲暇时间', examples: [{ id: 'u6-ew3-ext1-ex1', en: 'I enjoy reading in my leisure time.', zh: '我喜欢在闲暇时间读书。' }] } }
        ]
      },
      {
        id: 'u6-ew4',
        type: 'word',
        category: 'extended-word',
        english: 'brochure',
        translation: '小册子',
        partOfSpeech: 'n.',
        imageUrl: u6_ew4_img,
        explanation: 'A small magazine with pictures and information.',
        examples: [
            { id: 'u6-ew4-ex1', en: 'Read this travel brochure.', zh: '读读这本旅游小册子。' }
        ],
        extensions: []
      }
    ]
  },
  {
    id: 'u6-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      {
        id: 'u6-p1',
        type: 'phrase',
        category: 'core-phrase',
        english: 'a geography quiz',
        translation: '地理测验',
        imageUrl: u6_p1_img,
        explanation: 'A test about geography.',
        examples: [
            { id: 'u6-p1-ex1', en: 'He won the geography quiz.', zh: '他赢得了地理测验。' }
        ],
        extensions: []
      },
      {
        id: 'u6-p2',
        type: 'phrase',
        category: 'core-phrase',
        english: 'leisure time',
        translation: '闲暇时间',
        imageUrl: u6_p2_img,
        explanation: 'Free time.',
        examples: [
            { id: 'u6-p2-ex1', en: 'Make good use of your leisure time.', zh: '利用好你的闲暇时间。' }
        ],
        extensions: []
      },
      {
        id: 'u6-p3',
        type: 'phrase',
        category: 'core-phrase',
        english: 'the lifeblood of cities',
        translation: '城市的生命线',
        imageUrl: u6_p3_img,
        explanation: 'Something essential for cities.',
        examples: [
            { id: 'u6-p3-ex1', en: 'The river is the lifeblood of the city.', zh: '这条河是这座城市的生命线。' }
        ],
        extensions: []
      },
      {
        id: 'u6-p4',
        type: 'phrase',
        category: 'core-phrase',
        english: 'amazing scenery',
        translation: '令人惊叹的景色',
        imageUrl: u6_p4_img,
        explanation: 'Beautiful views.',
        examples: [
            { id: 'u6-p4-ex1', en: 'We enjoyed the amazing scenery along the way.', zh: '我们欣赏了沿途令人惊叹的景色。' }
        ],
        extensions: []
      },
      {
        id: 'u6-p5',
        type: 'phrase',
        category: 'core-phrase',
        english: 'be on a trip',
        translation: '在旅行中',
        imageUrl: u6_p5_img,
        explanation: 'Travelling.',
        examples: [
            { id: 'u6-p5-ex1', en: 'My parents are on a trip to Beijing.', zh: '我父母正在去北京旅行。' }
        ],
        extensions: []
      },
      {
        id: 'u6-p6',
        type: 'phrase',
        category: 'core-phrase',
        english: 'scenic spot',
        translation: '景点',
        imageUrl: u6_p6_img,
        explanation: 'A place with beautiful scenery.',
        examples: [
            { id: 'u6-p6-ex1', en: 'There are many scenic spots in Hangzhou.', zh: '杭州有许多景点。' }
        ],
        extensions: []
      },
      {
        id: 'u6-p7',
        type: 'phrase',
        category: 'core-phrase',
        english: 'ski resort',
        translation: '滑雪胜地',
        imageUrl: u6_p7_img,
        explanation: 'A place for skiing.',
        examples: [
            { id: 'u6-p7-ex1', en: 'They went to a ski resort for winter holiday.', zh: '他们去滑雪胜地度寒假。' }
        ],
        extensions: []
      },
      {
        id: 'u6-p8',
        type: 'phrase',
        category: 'core-phrase',
        english: 'cover a large area',
        translation: '占地面积大',
        imageUrl: u6_p8_img,
        explanation: 'To be large in size.',
        examples: [
            { id: 'u6-p8-ex1', en: 'The forest covers a large area.', zh: '这片森林占地面积很大。' }
        ],
        extensions: []
      }
    ]
  },
  {
    id: 'u6-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      {
        id: 'u6-s1',
        type: 'sentence',
        category: 'key-sentence',
        english: 'How long are the Rocky Mountains?',
        translation: '落基山脉有多长？',
        imageUrl: u6_s1_img,
        explanation: 'Asking about length.',
        examples: [
            { id: 'u6-s1-ex1', en: 'It is about 4,800 kilometres long.', zh: '它大约4800千米长。' }
        ],
        extensions: []
      },
      {
        id: 'u6-s2',
        type: 'sentence',
        category: 'key-sentence',
        english: 'Do remember to wear warm clothes.',
        translation: '务必记得穿上暖和的衣服。',
        imageUrl: u6_s2_img,
        explanation: 'Giving advice.',
        examples: [],
        extensions: [
            { label: '语法', data: { id: 'u6-s2-ext1', english: 'do + verb', translation: '强调语气', examples: [{ id: 'u6-s2-ext1-ex1', en: 'Do be careful.', zh: '务必小心。' }] } }
        ]
      },
      {
        id: 'u6-s3',
        type: 'sentence',
        category: 'key-sentence',
        english: 'Which activity attracts you most?',
        translation: '哪项活动最吸引你？',
        imageUrl: u6_s3_img,
        explanation: 'Asking preference.',
        examples: [],
        extensions: []
      },
      {
        id: 'u6-s4',
        type: 'sentence',
        category: 'key-sentence',
        english: 'That sounds like it would be fun!',
        translation: '那听起来会很有趣！',
        imageUrl: u6_s4_img,
        explanation: 'Expressing excitement.',
        examples: [],
        extensions: []
      },
      {
        id: 'u6-s5',
        type: 'sentence',
        category: 'key-sentence',
        english: 'The views of the Amazon are as beautiful as those of the Nile.',
        translation: '亚马逊河的景色和尼罗河的景色一样美丽。',
        imageUrl: u6_s5_img,
        explanation: 'Comparison.',
        examples: [],
        extensions: [
            { label: '句型', data: { id: 'u6-s5-ext1', english: 'as ... as', translation: '和...一样...', examples: [{ id: 'u6-s5-ext1-ex1', en: 'He is as tall as me.', zh: '他和我一样高。' }] } }
        ]
      }
    ]
  }

  ,{
    id: 'u6-supplementary',
    title: '5. 补充内容 (Supplementary)',
    items: [
      {
        id: 'u6-supp-1',
        type: 'word',
        category: 'supplementary',
        english: "A Unit",
        translation: "翻译待补充",
        explanation: "Definition or usage of A Unit",
        imageUrl: unit6_supp_a_unit_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-1-ex1', en: 'A Unit', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-2',
        type: 'word',
        category: 'supplementary',
        english: "Ca a",
        translation: "翻译待补充",
        explanation: "Definition or usage of Ca a",
        imageUrl: unit6_supp_ca_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-2-ex1', en: 'Ca a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-3',
        type: 'sentence',
        category: 'supplementary',
        english: "Do remember to wear warm clothes",
        translation: "务必记得穿上暖和的衣服",
        explanation: "Definition or usage of Do remember to wear warm clothes",
        imageUrl: unit6_supp_do_remember_to_wear__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-3-ex1', en: 'Do remember to wear warm clothes', zh: '务必记得穿上暖和的衣服' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-4',
        type: 'sentence',
        category: 'supplementary',
        english: "Hope you will come here one day",
        translation: "希望有一天你能来这里",
        explanation: "Definition or usage of Hope you will come here one day",
        imageUrl: unit6_supp_hope_you_will_come_h_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-4-ex1', en: 'Hope you will come here one day', zh: '希望有一天你能来这里' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-5',
        type: 'sentence',
        category: 'supplementary',
        english: "London and Shanghai aie not alone as riverside cities",
        translation: "翻译待补充",
        explanation: "Definition or usage of London and Shanghai aie not alone as riverside cities",
        imageUrl: unit6_supp_london_and_shanghai__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-5-ex1', en: 'London and Shanghai aie not alone as riverside cities', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-6',
        type: 'word',
        category: 'supplementary',
        english: "Sat",
        translation: "翻译待补充",
        explanation: "Definition or usage of Sat",
        imageUrl: unit6_supp_sat_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-6-ex1', en: 'Sat', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-7',
        type: 'word',
        category: 'supplementary',
        english: "Tarren a",
        translation: "翻译待补充",
        explanation: "Definition or usage of Tarren a",
        imageUrl: unit6_supp_tarren_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-7-ex1', en: 'Tarren a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-8',
        type: 'sentence',
        category: 'supplementary',
        english: "That sounds like it would be fun",
        translation: "听起来会很有趣",
        explanation: "Definition or usage of That sounds like it would be fun",
        imageUrl: unit6_supp_that_sounds_like_it__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-8-ex1', en: 'That sounds like it would be fun', zh: '听起来会很有趣' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-9',
        type: 'sentence',
        category: 'supplementary',
        english: "They flow as quietly as they come",
        translation: "翻译待补充",
        explanation: "Definition or usage of They flow as quietly as they come",
        imageUrl: unit6_supp_they_flow_as_quietly_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-9-ex1', en: 'They flow as quietly as they come', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-10',
        type: 'sentence',
        category: 'supplementary',
        english: "What do they have in common",
        translation: "它们有什么共同之处",
        explanation: "Definition or usage of What do they have in common",
        imageUrl: unit6_supp_what_do_they_have_in_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-10-ex1', en: 'What do they have in common', zh: '它们有什么共同之处' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-11',
        type: 'sentence',
        category: 'supplementary',
        english: "What is the height of the Jungfrau",
        translation: "少女峰的高度是多少",
        explanation: "Definition or usage of What is the height of the Jungfrau",
        imageUrl: unit6_supp_what_is_the_height_o_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-11-ex1', en: 'What is the height of the Jungfrau', zh: '少女峰的高度是多少' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-12',
        type: 'word',
        category: 'supplementary',
        english: "You have my word",
        translation: "向你保证",
        explanation: "Definition or usage of You have my word",
        imageUrl: unit6_supp_you_have_my_word_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-12-ex1', en: 'You have my word', zh: '向你保证' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-13',
        type: 'sentence',
        category: 'supplementary',
        english: "a AGRA cover a large area",
        translation: "翻译待补充",
        explanation: "Definition or usage of a AGRA cover a large area",
        imageUrl: unit6_supp_a_agra_cover_a_large_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-13-ex1', en: 'a AGRA cover a large area', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-14',
        type: 'word',
        category: 'supplementary',
        english: "a a a",
        translation: "翻译待补充",
        explanation: "Definition or usage of a a a",
        imageUrl: unit6_supp_a_a_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-14-ex1', en: 'a a a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-15',
        type: 'word',
        category: 'supplementary',
        english: "a geography quiz about",
        translation: "翻译待补充",
        explanation: "Definition or usage of a geography quiz about",
        imageUrl: unit6_supp_a_geography_quiz_abo_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-15-ex1', en: 'a geography quiz about', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-16',
        type: 'word',
        category: 'supplementary',
        english: "cruise TAREE",
        translation: "翻译待补充",
        explanation: "Definition or usage of cruise TAREE",
        imageUrl: unit6_supp_cruise_taree_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-16-ex1', en: 'cruise TAREE', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-17',
        type: 'word',
        category: 'supplementary',
        english: "eatin fa",
        translation: "翻译待补充",
        explanation: "Definition or usage of eatin fa",
        imageUrl: unit6_supp_eatin_fa_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-17-ex1', en: 'eatin fa', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-18',
        type: 'word',
        category: 'supplementary',
        english: "promise",
        translation: "翻译待补充",
        explanation: "Definition or usage of promise",
        imageUrl: unit6_supp_promise_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-18-ex1', en: 'promise', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-19',
        type: 'sentence',
        category: 'supplementary',
        english: "read an article in a magazine",
        translation: "翻译待补充",
        explanation: "Definition or usage of read an article in a magazine",
        imageUrl: unit6_supp_read_an_article_in_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-19-ex1', en: 'read an article in a magazine', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-20',
        type: 'word',
        category: 'supplementary',
        english: "sli Anan ae",
        translation: "翻译待补充",
        explanation: "Definition or usage of sli Anan ae",
        imageUrl: unit6_supp_sli_anan_ae_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-20-ex1', en: 'sli Anan ae', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-21',
        type: 'sentence',
        category: 'supplementary',
        english: "the power to shape the life of people",
        translation: "翻译待补充",
        explanation: "Definition or usage of the power to shape the life of people",
        imageUrl: unit6_supp_the_power_to_shape_t_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-21-ex1', en: 'the power to shape the life of people', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-22',
        type: 'sentence',
        category: 'supplementary',
        english: "the rich history of London",
        translation: "翻译待补充",
        explanation: "Definition or usage of the rich history of London",
        imageUrl: unit6_supp_the_rich_history_of__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-22-ex1', en: 'the rich history of London', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-23',
        type: 'word',
        category: 'supplementary',
        english: "wm SEY",
        translation: "翻译待补充",
        explanation: "Definition or usage of wm SEY",
        imageUrl: unit6_supp_wm_sey_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-23-ex1', en: 'wm SEY', zh: '翻译待补充' } 
        ],
        extensions: []
      }
    ]
  }

  ,{
    id: 'u6-supplementary',
    title: '5. 补充内容 (Supplementary)',
    items: [
      {
        id: 'u6-supp-1',
        type: 'word',
        category: 'supplementary',
        english: "A Unit",
        translation: "翻译待补充",
        explanation: "Definition or usage of A Unit",
        imageUrl: unit6_supp_a_unit_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-1-ex1', en: 'A Unit', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-2',
        type: 'word',
        category: 'supplementary',
        english: "Ca a",
        translation: "翻译待补充",
        explanation: "Definition or usage of Ca a",
        imageUrl: unit6_supp_ca_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-2-ex1', en: 'Ca a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-3',
        type: 'sentence',
        category: 'supplementary',
        english: "Do remember to wear warm clothes",
        translation: "务必记得穿上暖和的衣服",
        explanation: "Definition or usage of Do remember to wear warm clothes",
        imageUrl: unit6_supp_do_remember_to_wear__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-3-ex1', en: 'Do remember to wear warm clothes', zh: '务必记得穿上暖和的衣服' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-4',
        type: 'sentence',
        category: 'supplementary',
        english: "Hope you will come here one day",
        translation: "希望有一天你能来这里",
        explanation: "Definition or usage of Hope you will come here one day",
        imageUrl: unit6_supp_hope_you_will_come_h_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-4-ex1', en: 'Hope you will come here one day', zh: '希望有一天你能来这里' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-5',
        type: 'sentence',
        category: 'supplementary',
        english: "London and Shanghai aie not alone as riverside cities",
        translation: "翻译待补充",
        explanation: "Definition or usage of London and Shanghai aie not alone as riverside cities",
        imageUrl: unit6_supp_london_and_shanghai__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-5-ex1', en: 'London and Shanghai aie not alone as riverside cities', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-6',
        type: 'word',
        category: 'supplementary',
        english: "Sat",
        translation: "翻译待补充",
        explanation: "Definition or usage of Sat",
        imageUrl: unit6_supp_sat_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-6-ex1', en: 'Sat', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-7',
        type: 'word',
        category: 'supplementary',
        english: "Tarren a",
        translation: "翻译待补充",
        explanation: "Definition or usage of Tarren a",
        imageUrl: unit6_supp_tarren_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-7-ex1', en: 'Tarren a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-8',
        type: 'sentence',
        category: 'supplementary',
        english: "That sounds like it would be fun",
        translation: "听起来会很有趣",
        explanation: "Definition or usage of That sounds like it would be fun",
        imageUrl: unit6_supp_that_sounds_like_it__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-8-ex1', en: 'That sounds like it would be fun', zh: '听起来会很有趣' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-9',
        type: 'sentence',
        category: 'supplementary',
        english: "They flow as quietly as they come",
        translation: "翻译待补充",
        explanation: "Definition or usage of They flow as quietly as they come",
        imageUrl: unit6_supp_they_flow_as_quietly_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-9-ex1', en: 'They flow as quietly as they come', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-10',
        type: 'sentence',
        category: 'supplementary',
        english: "What do they have in common",
        translation: "它们有什么共同之处",
        explanation: "Definition or usage of What do they have in common",
        imageUrl: unit6_supp_what_do_they_have_in_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-10-ex1', en: 'What do they have in common', zh: '它们有什么共同之处' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-11',
        type: 'sentence',
        category: 'supplementary',
        english: "What is the height of the Jungfrau",
        translation: "少女峰的高度是多少",
        explanation: "Definition or usage of What is the height of the Jungfrau",
        imageUrl: unit6_supp_what_is_the_height_o_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-11-ex1', en: 'What is the height of the Jungfrau', zh: '少女峰的高度是多少' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-12',
        type: 'word',
        category: 'supplementary',
        english: "You have my word",
        translation: "向你保证",
        explanation: "Definition or usage of You have my word",
        imageUrl: unit6_supp_you_have_my_word_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-12-ex1', en: 'You have my word', zh: '向你保证' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-13',
        type: 'sentence',
        category: 'supplementary',
        english: "a AGRA cover a large area",
        translation: "翻译待补充",
        explanation: "Definition or usage of a AGRA cover a large area",
        imageUrl: unit6_supp_a_agra_cover_a_large_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-13-ex1', en: 'a AGRA cover a large area', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-14',
        type: 'word',
        category: 'supplementary',
        english: "a a a",
        translation: "翻译待补充",
        explanation: "Definition or usage of a a a",
        imageUrl: unit6_supp_a_a_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-14-ex1', en: 'a a a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-15',
        type: 'word',
        category: 'supplementary',
        english: "a geography quiz about",
        translation: "翻译待补充",
        explanation: "Definition or usage of a geography quiz about",
        imageUrl: unit6_supp_a_geography_quiz_abo_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-15-ex1', en: 'a geography quiz about', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-16',
        type: 'word',
        category: 'supplementary',
        english: "cruise TAREE",
        translation: "翻译待补充",
        explanation: "Definition or usage of cruise TAREE",
        imageUrl: unit6_supp_cruise_taree_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-16-ex1', en: 'cruise TAREE', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-17',
        type: 'word',
        category: 'supplementary',
        english: "eatin fa",
        translation: "翻译待补充",
        explanation: "Definition or usage of eatin fa",
        imageUrl: unit6_supp_eatin_fa_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-17-ex1', en: 'eatin fa', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-18',
        type: 'word',
        category: 'supplementary',
        english: "promise",
        translation: "翻译待补充",
        explanation: "Definition or usage of promise",
        imageUrl: unit6_supp_promise_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-18-ex1', en: 'promise', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-19',
        type: 'sentence',
        category: 'supplementary',
        english: "read an article in a magazine",
        translation: "翻译待补充",
        explanation: "Definition or usage of read an article in a magazine",
        imageUrl: unit6_supp_read_an_article_in_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-19-ex1', en: 'read an article in a magazine', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-20',
        type: 'word',
        category: 'supplementary',
        english: "sli Anan ae",
        translation: "翻译待补充",
        explanation: "Definition or usage of sli Anan ae",
        imageUrl: unit6_supp_sli_anan_ae_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-20-ex1', en: 'sli Anan ae', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-21',
        type: 'sentence',
        category: 'supplementary',
        english: "the power to shape the life of people",
        translation: "翻译待补充",
        explanation: "Definition or usage of the power to shape the life of people",
        imageUrl: unit6_supp_the_power_to_shape_t_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-21-ex1', en: 'the power to shape the life of people', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-22',
        type: 'sentence',
        category: 'supplementary',
        english: "the rich history of London",
        translation: "翻译待补充",
        explanation: "Definition or usage of the rich history of London",
        imageUrl: unit6_supp_the_rich_history_of__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-22-ex1', en: 'the rich history of London', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-23',
        type: 'word',
        category: 'supplementary',
        english: "wm SEY",
        translation: "翻译待补充",
        explanation: "Definition or usage of wm SEY",
        imageUrl: unit6_supp_wm_sey_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-23-ex1', en: 'wm SEY', zh: '翻译待补充' } 
        ],
        extensions: []
      }
    ]
  }

  ,{
    id: 'u6-supplementary',
    title: '5. 补充内容 (Supplementary)',
    items: [
      {
        id: 'u6-supp-1',
        type: 'word',
        category: 'supplementary',
        english: "A Unit",
        translation: "翻译待补充",
        explanation: "Definition or usage of A Unit",
        imageUrl: unit6_supp_a_unit_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-1-ex1', en: 'A Unit', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-2',
        type: 'word',
        category: 'supplementary',
        english: "Ca a",
        translation: "翻译待补充",
        explanation: "Definition or usage of Ca a",
        imageUrl: unit6_supp_ca_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-2-ex1', en: 'Ca a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-3',
        type: 'sentence',
        category: 'supplementary',
        english: "Do remember to wear warm clothes",
        translation: "务必记得穿上暖和的衣服",
        explanation: "Definition or usage of Do remember to wear warm clothes",
        imageUrl: unit6_supp_do_remember_to_wear__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-3-ex1', en: 'Do remember to wear warm clothes', zh: '务必记得穿上暖和的衣服' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-4',
        type: 'sentence',
        category: 'supplementary',
        english: "Hope you will come here one day",
        translation: "希望有一天你能来这里",
        explanation: "Definition or usage of Hope you will come here one day",
        imageUrl: unit6_supp_hope_you_will_come_h_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-4-ex1', en: 'Hope you will come here one day', zh: '希望有一天你能来这里' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-5',
        type: 'sentence',
        category: 'supplementary',
        english: "London and Shanghai aie not alone as riverside cities",
        translation: "翻译待补充",
        explanation: "Definition or usage of London and Shanghai aie not alone as riverside cities",
        imageUrl: unit6_supp_london_and_shanghai__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-5-ex1', en: 'London and Shanghai aie not alone as riverside cities', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-6',
        type: 'word',
        category: 'supplementary',
        english: "Sat",
        translation: "翻译待补充",
        explanation: "Definition or usage of Sat",
        imageUrl: unit6_supp_sat_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-6-ex1', en: 'Sat', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-7',
        type: 'word',
        category: 'supplementary',
        english: "Tarren a",
        translation: "翻译待补充",
        explanation: "Definition or usage of Tarren a",
        imageUrl: unit6_supp_tarren_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-7-ex1', en: 'Tarren a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-8',
        type: 'sentence',
        category: 'supplementary',
        english: "That sounds like it would be fun",
        translation: "听起来会很有趣",
        explanation: "Definition or usage of That sounds like it would be fun",
        imageUrl: unit6_supp_that_sounds_like_it__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-8-ex1', en: 'That sounds like it would be fun', zh: '听起来会很有趣' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-9',
        type: 'sentence',
        category: 'supplementary',
        english: "They flow as quietly as they come",
        translation: "翻译待补充",
        explanation: "Definition or usage of They flow as quietly as they come",
        imageUrl: unit6_supp_they_flow_as_quietly_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-9-ex1', en: 'They flow as quietly as they come', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-10',
        type: 'sentence',
        category: 'supplementary',
        english: "What do they have in common",
        translation: "它们有什么共同之处",
        explanation: "Definition or usage of What do they have in common",
        imageUrl: unit6_supp_what_do_they_have_in_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-10-ex1', en: 'What do they have in common', zh: '它们有什么共同之处' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-11',
        type: 'sentence',
        category: 'supplementary',
        english: "What is the height of the Jungfrau",
        translation: "少女峰的高度是多少",
        explanation: "Definition or usage of What is the height of the Jungfrau",
        imageUrl: unit6_supp_what_is_the_height_o_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-11-ex1', en: 'What is the height of the Jungfrau', zh: '少女峰的高度是多少' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-12',
        type: 'word',
        category: 'supplementary',
        english: "You have my word",
        translation: "向你保证",
        explanation: "Definition or usage of You have my word",
        imageUrl: unit6_supp_you_have_my_word_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-12-ex1', en: 'You have my word', zh: '向你保证' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-13',
        type: 'sentence',
        category: 'supplementary',
        english: "a AGRA cover a large area",
        translation: "翻译待补充",
        explanation: "Definition or usage of a AGRA cover a large area",
        imageUrl: unit6_supp_a_agra_cover_a_large_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-13-ex1', en: 'a AGRA cover a large area', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-14',
        type: 'word',
        category: 'supplementary',
        english: "a a a",
        translation: "翻译待补充",
        explanation: "Definition or usage of a a a",
        imageUrl: unit6_supp_a_a_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-14-ex1', en: 'a a a', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-15',
        type: 'word',
        category: 'supplementary',
        english: "a geography quiz about",
        translation: "翻译待补充",
        explanation: "Definition or usage of a geography quiz about",
        imageUrl: unit6_supp_a_geography_quiz_abo_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-15-ex1', en: 'a geography quiz about', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-16',
        type: 'word',
        category: 'supplementary',
        english: "cruise TAREE",
        translation: "翻译待补充",
        explanation: "Definition or usage of cruise TAREE",
        imageUrl: unit6_supp_cruise_taree_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-16-ex1', en: 'cruise TAREE', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-17',
        type: 'word',
        category: 'supplementary',
        english: "eatin fa",
        translation: "翻译待补充",
        explanation: "Definition or usage of eatin fa",
        imageUrl: unit6_supp_eatin_fa_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-17-ex1', en: 'eatin fa', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-18',
        type: 'word',
        category: 'supplementary',
        english: "promise",
        translation: "翻译待补充",
        explanation: "Definition or usage of promise",
        imageUrl: unit6_supp_promise_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-18-ex1', en: 'promise', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-19',
        type: 'sentence',
        category: 'supplementary',
        english: "read an article in a magazine",
        translation: "翻译待补充",
        explanation: "Definition or usage of read an article in a magazine",
        imageUrl: unit6_supp_read_an_article_in_a_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-19-ex1', en: 'read an article in a magazine', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-20',
        type: 'word',
        category: 'supplementary',
        english: "sli Anan ae",
        translation: "翻译待补充",
        explanation: "Definition or usage of sli Anan ae",
        imageUrl: unit6_supp_sli_anan_ae_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-20-ex1', en: 'sli Anan ae', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-21',
        type: 'sentence',
        category: 'supplementary',
        english: "the power to shape the life of people",
        translation: "翻译待补充",
        explanation: "Definition or usage of the power to shape the life of people",
        imageUrl: unit6_supp_the_power_to_shape_t_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-21-ex1', en: 'the power to shape the life of people', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-22',
        type: 'sentence',
        category: 'supplementary',
        english: "the rich history of London",
        translation: "翻译待补充",
        explanation: "Definition or usage of the rich history of London",
        imageUrl: unit6_supp_the_rich_history_of__img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-22-ex1', en: 'the rich history of London', zh: '翻译待补充' } 
        ],
        extensions: []
      },
      {
        id: 'u6-supp-23',
        type: 'word',
        category: 'supplementary',
        english: "wm SEY",
        translation: "翻译待补充",
        explanation: "Definition or usage of wm SEY",
        imageUrl: unit6_supp_wm_sey_img, // Will be fixed in image task
        examples: [
             { id: 'u6-supp-23-ex1', en: 'wm SEY', zh: '翻译待补充' } 
        ],
        extensions: []
      }
    ]
  }
];
