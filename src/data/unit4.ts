import type { Section } from '../types';
import u4_w1_img from '@/assets/images/u4-life.jpg';
import u4_w2_img from '@/assets/images/u4-subject.jpg';
import u4_w11_img from '@/assets/images/u4-lesson.jpg';
import u4_w12_img from '@/assets/images/u4-start.jpeg';
import u4_w13_img from '@/assets/images/u4-finish.jpeg';
import u4_w17_img from '@/assets/images/u4-favourite.jpeg';
import u4_w18_img from '@/assets/images/u4-useful.jpg';
import u4_w19_img from '@/assets/images/u4-difficult.jpg';
import u4_ew1_img from '@/assets/images/u4-biology.jpeg';
import u4_ew2_img from '@/assets/images/u4-it.jpg';
import u4_p1_img from '@/assets/images/u4-good-at.jpeg';
import u4_p2_img from '@/assets/images/u4-work-hard.jpg';
import u4_s1_img from '@/assets/images/u4-school-time.jpeg';
import u4_s2_img from '@/assets/images/u4-english.jpeg';

export const unit4Data: Section[] = [
  {
    id: 'u4-core-words',
    title: '1. 核心单词 (Core Words)',
    items: [
      { id: 'u4-w1', type: 'word', category: 'core-word', english: 'life', translation: '生活', imageUrl: u4_w1_img, explanation: 'Being alive.', examples: [], extensions: [] },
      { id: 'u4-w2', type: 'word', category: 'core-word', english: 'subject', translation: '科目', imageUrl: u4_w2_img, explanation: 'Area of study.', examples: [], extensions: [] },
      { id: 'u4-w11', type: 'word', category: 'core-word', english: 'lesson', translation: '课', imageUrl: u4_w11_img, explanation: 'Class period.', examples: [], extensions: [] },
      { id: 'u4-w12', type: 'word', category: 'core-word', english: 'start', translation: '开始', imageUrl: u4_w12_img, explanation: 'Begin.', examples: [], extensions: [] },
      { id: 'u4-w13', type: 'word', category: 'core-word', english: 'finish', translation: '结束', imageUrl: u4_w13_img, explanation: 'End.', examples: [], extensions: [] },
      { id: 'u4-w17', type: 'word', category: 'core-word', english: 'favourite', translation: '最喜欢的', imageUrl: u4_w17_img, explanation: 'Best liked.', examples: [], extensions: [] },
      { id: 'u4-w18', type: 'word', category: 'core-word', english: 'useful', translation: '有用的', imageUrl: u4_w18_img, explanation: 'Helpful.', examples: [], extensions: [] },
      { id: 'u4-w19', type: 'word', category: 'core-word', english: 'difficult', translation: '困难的', imageUrl: u4_w19_img, explanation: 'Hard.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u4-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { id: 'u4-ew1', type: 'word', category: 'extended-word', english: 'biology', translation: '生物', imageUrl: u4_ew1_img, explanation: 'Study of life.', examples: [], extensions: [] },
      { id: 'u4-ew2', type: 'word', category: 'extended-word', english: 'IT', translation: '信息技术', imageUrl: u4_ew2_img, explanation: 'Information Technology.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u4-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { id: 'u4-p1', type: 'phrase', category: 'core-phrase', english: 'be good at', translation: '擅长', imageUrl: u4_p1_img, explanation: 'Do well.', examples: [], extensions: [] },
      { id: 'u4-p2', type: 'phrase', category: 'core-phrase', english: 'work hard', translation: '努力学习', imageUrl: u4_p2_img, explanation: 'Effort.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u4-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { id: 'u4-s1', type: 'sentence', category: 'key-sentence', english: 'What time does school start?', translation: '学校几点开始？', imageUrl: u4_s1_img, explanation: 'Schedule.', examples: [], extensions: [] },
      { id: 'u4-s2', type: 'sentence', category: 'key-sentence', english: 'My favourite subject is English.', translation: '我最喜欢英语。', imageUrl: u4_s2_img, explanation: 'Preference.', examples: [], extensions: [] }
    ]
  }
];
