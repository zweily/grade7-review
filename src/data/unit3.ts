import type { Section } from '../types';
import u3_w1_img from '@/assets/images/u3-country.jpg';
import u3_w2_img from '@/assets/images/u3-map.jpg';
import u3_w3_img from '@/assets/images/u3-different.jpg';
import u3_w14_img from '@/assets/images/u3-capital.jpg';
import u3_w16_img from '@/assets/images/u3-map.jpg';
import u3_ew1_img from '@/assets/images/u3-flag.jpg';
import u3_ew2_img from '@/assets/images/discuss.jpg';
import u3_ew3_img from '@/assets/images/u3-famous.jpeg';
import u3_p1_img from '@/assets/images/u3-be-from.jpg';
import u3_p2_img from '@/assets/images/u3-north.jpg';
import u3_s1_img from '@/assets/images/u3-country.jpg';
import u3_s2_img from '@/assets/images/u3-beijing.jpeg';

export const unit3Data: Section[] = [
  {
    id: 'u3-core-words',
    title: '1. 核心单词 (Core Words)',
    items: [
      { id: 'u3-w1', type: 'word', category: 'core-word', english: 'country', translation: '国家', imageUrl: u3_w1_img, explanation: 'Nation.', examples: [], extensions: [] },
      { id: 'u3-w2', type: 'word', category: 'core-word', english: 'world', translation: '世界', imageUrl: u3_w2_img, explanation: 'Earth.', examples: [], extensions: [] },
      { id: 'u3-w3', type: 'word', category: 'core-word', english: 'different', translation: '不同的', imageUrl: u3_w3_img, explanation: 'Not the same.', examples: [], extensions: [] },
      { id: 'u3-w14', type: 'word', category: 'core-word', english: 'capital', translation: '首都', imageUrl: u3_w14_img, explanation: 'Main city.', examples: [], extensions: [] },
      { id: 'u3-w16', type: 'word', category: 'core-word', english: 'map', translation: '地图', imageUrl: u3_w16_img, explanation: 'Drawing of earth.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u3-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { id: 'u3-ew1', type: 'word', category: 'extended-word', english: 'flag', translation: '国旗', imageUrl: u3_ew1_img, explanation: 'Symbol of country.', examples: [], extensions: [] },
      { id: 'u3-ew2', type: 'word', category: 'extended-word', english: 'language', translation: '语言', imageUrl: u3_ew2_img, explanation: 'Communication system.', examples: [], extensions: [] },
      { id: 'u3-ew3', type: 'word', category: 'extended-word', english: 'famous', translation: '著名的', imageUrl: u3_ew3_img, explanation: 'Well known.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u3-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { id: 'u3-p1', type: 'phrase', category: 'core-phrase', english: 'be from', translation: '来自', imageUrl: u3_p1_img, explanation: 'Origin.', examples: [], extensions: [] },
      { id: 'u3-p2', type: 'phrase', category: 'core-phrase', english: 'in the north of', translation: '在...北部', imageUrl: u3_p2_img, explanation: 'Direction.', examples: [], extensions: [] }
    ]
  },
  {
    id: 'u3-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { id: 'u3-s1', type: 'sentence', category: 'key-sentence', english: 'Where are you from?', translation: '你来自哪里？', imageUrl: u3_s1_img, explanation: 'Asking origin.', examples: [], extensions: [] },
      { id: 'u3-s2', type: 'sentence', category: 'key-sentence', english: 'Beijing is the capital of China.', translation: '北京是中国的首都。', imageUrl: u3_s2_img, explanation: 'Fact.', examples: [], extensions: [] }
    ]
  }
];
