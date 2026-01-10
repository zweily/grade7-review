import type { Section } from '../types';
import u5_w1_img from '@/assets/images/u5-film.jpeg';
import u5_w2_img from '@/assets/images/u5-cinema.jpg';
import u5_w3_img from '@/assets/images/u5-ticket.jpg';
import u5_w10_img from '@/assets/images/u5-funny.jpeg';
import u5_w11_img from '@/assets/images/u5-scary.jpg';
import u5_w12_img from '@/assets/images/u5-exciting.jpg';
import u5_w13_img from '@/assets/images/u5-boring.jpeg';
import u5_w14_img from '@/assets/images/u5-action.jpeg';
import u5_ew1_img from '@/assets/images/u5-cartoon.jpeg';
import u5_ew2_img from '@/assets/images/u5-funny.jpeg';
import u5_p1_img from '@/assets/images/u5-enjoy.jpg';
import u5_p2_img from '@/assets/images/u5-look-for.jpg';
import u5_s1_img from '@/assets/images/u5-cinema.jpg';
import u5_s2_img from '@/assets/images/u5-action.jpeg';

export const unit5Data: Section[] = [
  {
    id: 'u5-core-words',
    title: '1. 核心单词 (Core Words)',
    items: [
      { id: 'u5-w1', type: 'word', category: 'core-word', english: 'film', translation: '电影', imageUrl: u5_w1_img, explanation: 'Movie.', examples: [], extensions: [] },
      { id: 'u5-w2', type: 'word', category: 'core-word', english: 'cinema', translation: '电影院', imageUrl: u5_w2_img, explanation: 'Theatre.', examples: [], extensions: [] },
      { id: 'u5-w3', type: 'word', category: 'core-word', english: 'ticket', translation: '票', imageUrl: u5_w3_img, explanation: 'Admission paper.', examples: [], extensions: [] },
      { id: 'u5-w10', type: 'word', category: 'core-word', english: 'funny', translation: '有趣的', imageUrl: u5_w10_img, explanation: 'Humorous.', examples: [], extensions: [] },
      { id: 'u5-w11', type: 'word', category: 'core-word', english: 'scary', translation: '吓人的', imageUrl: u5_w11_img, explanation: 'Frightening.', examples: [], extensions: [] },
      { id: 'u5-w12', type: 'word', category: 'core-word', english: 'exciting', translation: '刺激的', imageUrl: u5_w12_img, explanation: 'Enthusiastic.', examples: [], extensions: [] },
      { id: 'u5-w13', type: 'word', category: 'core-word', english: 'boring', translation: '无聊的', imageUrl: u5_w13_img, explanation: 'Not interesting.', examples: [], extensions: [] },
      { id: 'u5-w14', type: 'word', category: 'core-word', english: 'action', translation: '动作', imageUrl: u5_w14_img, explanation: 'Doing something.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u5-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { id: 'u5-ew1', type: 'word', category: 'extended-word', english: 'cartoon', translation: '动画片', imageUrl: u5_ew1_img, explanation: 'Animation.', examples: [], extensions: [] },
      { id: 'u5-ew2', type: 'word', category: 'extended-word', english: 'comedy', translation: '喜剧', imageUrl: u5_ew2_img, explanation: 'Funny movie.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u5-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { id: 'u5-p1', type: 'phrase', category: 'core-phrase', english: 'enjoy oneself', translation: '玩得开心', imageUrl: u5_p1_img, explanation: 'Have fun.', examples: [], extensions: [] },
      { id: 'u5-p2', type: 'phrase', category: 'core-phrase', english: 'look for', translation: '寻找', imageUrl: u5_p2_img, explanation: 'Search.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u5-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { id: 'u5-s1', type: 'sentence', category: 'key-sentence', english: 'Would you like to go to the cinema?', translation: '你想去电影院吗？', imageUrl: u5_s1_img, explanation: 'Invitation.', examples: [], extensions: [] },
      { id: 'u5-s2', type: 'sentence', category: 'key-sentence', english: 'I like action films because they are exciting.', translation: '我喜欢动作片，因为很刺激。', imageUrl: u5_s2_img, explanation: 'Reasoning.', examples: [], extensions: [] }
    ]
  }
];
