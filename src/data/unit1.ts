import type { Section } from '../types';
import w1_img from '@/assets/images/brave.jpg';
import w2_img from '@/assets/images/test.jpg';
import w3_img from '@/assets/images/curious.jpg';
import w4_img from '@/assets/images/traffic.jpg';
import w5_img from '@/assets/images/u1-machine.jpg';
import w6_img from '@/assets/images/magazine.jpg';
import w7_img from '@/assets/images/challenge.jpg';
import w8_img from '@/assets/images/curious.jpg';
import w9_img from '@/assets/images/grow.jpg';
import w10_img from '@/assets/images/print.jpg';
import w11_img from '@/assets/images/u1-camp.jpeg';
import w12_img from '@/assets/images/grow.jpg';
import w13_img from '@/assets/images/discuss.jpg';
import w14_img from '@/assets/images/traffic.jpg';
import w15_img from '@/assets/images/fail.jpg';
import w16_img from '@/assets/images/pizza.jpg';
import w17_img from '@/assets/images/fail.jpg';
import w18_img from '@/assets/images/burn.jpg';
import w19_img from '@/assets/images/u1-separate.jpg';
import w20_img from '@/assets/images/u1-succeed.jpeg';
import w21_img from '@/assets/images/u1-away.jpg';
import w22_img from '@/assets/images/stick.jpg';
import w23_img from '@/assets/images/creative.jpg';
import w24_img from '@/assets/images/proud.jpg';
import w25_img from '@/assets/images/u1-power.jpeg';
import w26_img from '@/assets/images/board.jpg';
import ew1_img from '@/assets/images/windsurf.jpg';
import ew4_img from '@/assets/images/u1-countless.jpeg';
import ew7_img from '@/assets/images/u1-sticker.webp';
import ew11_img from '@/assets/images/u1-renewable.jpeg';
import ew17_img from '@/assets/images/solar_panel.jpg';
import p23_img from '@/assets/images/challenge.jpg';
import p36_img from '@/assets/images/u1-collect.jpeg';
import p43_img from '@/assets/images/fail.jpg';
import p52_img from '@/assets/images/u1-succeed.jpeg';
import p54_img from '@/assets/images/curious.jpg';
import p60_img from '@/assets/images/proud.jpg';
import p67_img from '@/assets/images/grow.jpg';
import s1_img from '@/assets/images/brave.jpg';
import s4_img from '@/assets/images/discuss.jpg';
import s7_img from '@/assets/images/curious.jpg';
import s12_img from '@/assets/images/fail.jpg';
import s13_img from '@/assets/images/u1-succeed.jpeg';

export const unit1Data: Section[] = [
  {
    id: 'core-words',
    title: '1. 核心单词 (Core Words)',
    items: [
      {
        id: 'w1',
        type: 'word',
        category: 'core-word',
        english: 'brave',
        translation: '勇敢的',
        imageUrl: w1_img,
        explanation: 'Describing someone who is willing to do things that are dangerous, difficult, or painful.',
        examples: [
          { id: 'w1-ex1', en: 'You have to be brave to be a firefighter.', zh: '要当消防员，你必须很勇敢。' },
          { id: 'w1-ex2', en: 'It was brave of him to speak out.', zh: '他敢于把话说出来，真是勇敢。' }
        ],
        extensions: [
          { label: '名词', data: { id: 'w1-ext1', english: 'bravery', translation: '勇敢；勇气', examples: [{ id: 'w1-ext1-ex1', en: 'He showed great bravery.', zh: '他表现出了极大的勇气。' }] } },
          { label: '副词', data: { id: 'w1-ext2', english: 'bravely', translation: '勇敢地', examples: [{ id: 'w1-ext2-ex1', en: 'They fought bravely.', zh: '他们勇敢地战斗。' }] } }
        ]
      },
      {
        id: 'w5',
        type: 'word',
        category: 'core-word',
        english: 'machine',
        translation: '机器',
        imageUrl: w5_img,
        explanation: 'A piece of equipment with many parts that work together to do a particular task.',
        examples: [
          { id: 'w5-ex1', en: 'This washing machine is new.', zh: '这台洗衣机是新的。' },
          { id: 'w5-ex2', en: 'Do you know how to use this machine?', zh: '你知道怎么用这台机器吗？' }
        ],
        extensions: [
          { label: '复数', data: { id: 'w5-ext1', english: 'machines', translation: '机器（复数）' } }
        ]
      },
      {
        id: 'w11',
        type: 'word',
        category: 'core-word',
        english: 'camp',
        translation: '营地；露营',
        imageUrl: w11_img,
        explanation: 'A place where people stay in tents or other temporary structures.',
        examples: [
          { id: 'w11-ex1', en: 'We will camp in the forest.', zh: '我们将在森林里露营。' },
          { id: 'w11-ex2', en: 'Summer camp is fun.', zh: '夏令营很有趣。' }
        ],
        extensions: [
          { label: '名词', data: { id: 'w11-ext1', english: 'camping', translation: '露营活动', examples: [{ id: 'w11-ext1-ex1', en: 'Let\'s go camping.', zh: '我们去露营吧。' }] } }
        ]
      },
      {
        id: 'w20',
        type: 'word',
        category: 'core-word',
        english: 'succeed',
        translation: '成功',
        imageUrl: w20_img,
        explanation: 'To achieve something that you have been aiming for.',
        examples: [
          { id: 'w20-ex1', en: 'He succeeded in the end.', zh: '他最后成功了。' },
          { id: 'w20-ex2', en: 'If you work hard, you will succeed.', zh: '如果你努力，你会成功的。' }
        ],
        extensions: [
          { label: '名词', data: { id: 'w20-ext1', english: 'success', translation: '成功', examples: [{ id: 'w20-ext1-ex1', en: 'Success belongs to the hard-working.', zh: '成功属于勤奋的人。' }] } },
          { label: '形容词', data: { id: 'w20-ext2', english: 'successful', translation: '成功的', examples: [{ id: 'w20-ext2-ex1', en: 'She is a successful writer.', zh: '她是一位成功的作家。' }] } }
        ]
      }
    ]
  },
  {
    id: 'extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      {
        id: 'ew4',
        type: 'word',
        category: 'extended-word',
        english: 'countless',
        translation: '无数的',
        imageUrl: ew4_img,
        explanation: 'Very many; too many to be counted.',
        examples: [
          { id: 'ew4-ex1', en: 'There are countless stars in the sky.', zh: '天上有无数的星星。' }
        ],
        extensions: [
          { label: '动词', data: { id: 'ew4-ext1', english: 'count', translation: '数数' } }
        ]
      },
      {
        id: 'ew7',
        type: 'word',
        category: 'extended-word',
        english: 'sticker',
        translation: '贴纸',
        imageUrl: ew7_img,
        explanation: 'A small piece of paper with glue on one side.',
        examples: [
          { id: 'ew7-ex1', en: 'I put a sticker on my book.', zh: '我在书上贴了一张贴纸。' }
        ],
        extensions: [
          { label: '动词', data: { id: 'ew7-ext1', english: 'stick', translation: '粘贴' } }
        ]
      },
      {
        id: 'ew11',
        type: 'word',
        category: 'extended-word',
        english: 'renewable',
        translation: '可再生的',
        imageUrl: ew11_img,
        explanation: 'Energy that replaces itself naturally.',
        examples: [
          { id: 'ew11-ex1', en: 'Wind is a renewable energy source.', zh: '风是一种可再生能源。' }
        ],
        extensions: [
          { label: '动词', data: { id: 'ew11-ext1', english: 'renew', translation: '更新' } }
        ]
      }
    ]
  },
  {
    id: 'core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
        {
            id: 'p36',
            type: 'phrase',
            category: 'core-phrase',
            english: 'collect solar energy',
            translation: '收集太阳能',
            imageUrl: p36_img,
            explanation: 'Gathering power from the sun.',
            examples: [
                { id: 'p36-ex1', en: 'Solar panels are used to collect solar energy.', zh: '太阳能电池板用于收集太阳能。' }
            ],
            extensions: []
        },
        {
            id: 'p52',
            type: 'phrase',
            category: 'core-phrase',
            english: 'succeeded in doing',
            translation: '成功地做某事',
            imageUrl: p52_img,
            explanation: 'To accomplish what was planned.',
            examples: [
                { id: 'p52-ex1', en: 'They succeeded in climbing the mountain.', zh: '他们成功爬上了山。' }
            ],
            extensions: [
                { label: '同义', data: { id: 'p52-ext1', english: 'manage to do', translation: '设法做成' } }
            ]
        }
    ]
  },
  {
    id: 'key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
        {
            id: 's13',
            type: 'sentence',
            category: 'key-sentence',
            english: 'After countless tries, they succeeded!',
            translation: '经过无数次尝试，他们成功了！',
            imageUrl: s13_img,
            explanation: 'Success comes after persistence.',
            examples: [
                { id: 's13-ex1', en: 'Never give up. After countless tries, you will succeed.', zh: '永不放弃。经过无数次尝试，你会成功的。' }
            ],
            extensions: []
        }
    ]
  }
];
