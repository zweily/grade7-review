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
        examples: [], extensions: []
      },
      {
        id: 'w5',
        type: 'word',
        category: 'core-word',
        english: 'machine',
        translation: '机器',
        imageUrl: w5_img,
        explanation: 'A piece of equipment with many parts that work together to do a particular task.',
        examples: [], extensions: []
      },
      {
        id: 'w11',
        type: 'word',
        category: 'core-word',
        english: 'camp',
        translation: '营地；露营',
        imageUrl: w11_img,
        explanation: 'A place where people stay in tents.',
        examples: [], extensions: []
      },
      {
        id: 'w20',
        type: 'word',
        category: 'core-word',
        english: 'succeed',
        translation: '成功',
        imageUrl: w20_img,
        explanation: 'To achieve something that you have been aiming for.',
        examples: [], extensions: []
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
        explanation: 'Very many.',
        examples: [], extensions: []
      },
      {
        id: 'ew7',
        type: 'word',
        category: 'extended-word',
        english: 'sticker',
        translation: '贴纸',
        imageUrl: ew7_img,
        explanation: 'A small piece of paper with glue on one side.',
        examples: [], extensions: []
      },
      {
        id: 'ew11',
        type: 'word',
        category: 'extended-word',
        english: 'renewable',
        translation: '可再生的',
        imageUrl: ew11_img,
        explanation: 'Energy that replaces itself naturally.',
        examples: [], extensions: []
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
            examples: [], extensions: []
        },
        {
            id: 'p52',
            type: 'phrase',
            category: 'core-phrase',
            english: 'succeeded in doing',
            translation: '成功地做某事',
            imageUrl: p52_img,
            explanation: 'To accomplish what was planned.',
            examples: [], extensions: []
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
            examples: [], extensions: []
        }
    ]
  }
];
