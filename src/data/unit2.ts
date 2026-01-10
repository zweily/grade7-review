import type { Section } from '../types';
import u2_w1_img from '@/assets/images/u2-smart.jpg';
import u2_w2_img from '@/assets/images/u2-care.jpg';
import u2_w3_img from '@/assets/images/u2-voice.jpg';
import u2_w11_img from '@/assets/images/u2-lucky.jpeg';
import u2_w19_img from '@/assets/images/u2-enter.jpeg';
import u2_ew3_img from '@/assets/images/u2-teenager.jpg';
import u2_ew6_img from '@/assets/images/u2-respond.jpg';
import u2_p1_img from '@/assets/images/u2-used-to-do.jpeg';
import u2_p2_img from '@/assets/images/proud.jpg';
import u2_s1_img from '@/assets/images/u2-afraid.jpeg';
import u2_s2_img from '@/assets/images/u2-belief.jpeg';

export const unit2Data: Section[] = [
  {
    id: 'u2-core-words',
    title: '1. 核心单词 (Core Words)',
    items: [
      { id: 'u2-w1', type: 'word', category: 'core-word', english: 'smart', translation: '聪明的', imageUrl: u2_w1_img, explanation: 'Intelligent.', examples: [], extensions: [] },
      { id: 'u2-w2', type: 'word', category: 'core-word', english: 'care', translation: '关心', imageUrl: u2_w2_img, explanation: 'To think something is important.', examples: [], extensions: [] },
      { id: 'u2-w3', type: 'word', category: 'core-word', english: 'voice', translation: '声音', imageUrl: u2_w3_img, explanation: 'Sound produced by speaking.', examples: [], extensions: [] },
      { id: 'u2-w11', type: 'word', category: 'core-word', english: 'lucky', translation: '幸运的', imageUrl: u2_w11_img, explanation: 'Having good luck.', examples: [], extensions: [] },
      { id: 'u2-w19', type: 'word', category: 'core-word', english: 'enter', translation: '进入', imageUrl: u2_w19_img, explanation: 'To go into.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u2-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { id: 'u2-ew3', type: 'word', category: 'extended-word', english: 'teenager', translation: '青少年', imageUrl: u2_ew3_img, explanation: 'A young person.', examples: [], extensions: [] },
      { id: 'u2-ew6', type: 'word', category: 'extended-word', english: 'respond', translation: '回应', imageUrl: u2_ew6_img, explanation: 'To answer.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u2-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { id: 'u2-p1', type: 'phrase', category: 'core-phrase', english: 'used to do', translation: '过去常常做', imageUrl: u2_p1_img, explanation: 'Done in the past but not now.', examples: [], extensions: [] },
      { id: 'u2-p2', type: 'phrase', category: 'core-phrase', english: 'be proud of', translation: '为...感到自豪', imageUrl: u2_p2_img, explanation: 'Feeling pleasure from achievements.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u2-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { id: 'u2-s1', type: 'sentence', category: 'key-sentence', english: 'Feifei used to be afraid of speaking.', translation: '菲菲以前害怕说话。', imageUrl: u2_s1_img, explanation: 'Past habit.', examples: [], extensions: [] },
      { id: 'u2-s2', type: 'sentence', category: 'key-sentence', english: 'He has a strong belief in himself.', translation: '他对自己有坚定的信念。', imageUrl: u2_s2_img, explanation: 'Confidence.', examples: [], extensions: [] }
    ]
  }
];
