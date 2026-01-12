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
      { 
        id: 'u3-w1', 
        type: 'word', 
        category: 'core-word', 
        english: 'country', 
        translation: '国家', 
        imageUrl: u3_w1_img, 
        explanation: 'An area of land that has its own government.', 
        examples: [
          { id: 'u3-w1-ex1', en: 'China is a big country.', zh: '中国是一个大国。' }
        ], 
        extensions: [
          { label: '复数', data: { id: 'u3-w1-ext1', english: 'countries', translation: '国家（复数）', examples: [{ id: 'u3-w1-ext1-ex1', en: 'He visited many countries.', zh: '他去过很多国家。' }] } }
        ] 
      },
      { 
        id: 'u3-w2', 
        type: 'word', 
        category: 'core-word', 
        english: 'world', 
        translation: '世界', 
        imageUrl: u3_w2_img, 
        explanation: 'The earth and all people and things on it.', 
        examples: [
          { id: 'u3-w2-ex1', en: 'The world is full of wonders.', zh: '世界充满了奇迹。' }
        ], 
        extensions: [
          { label: '短语', data: { id: 'u3-w2-ext1', english: 'all over the world', translation: '全世界', examples: [{ id: 'u3-w2-ext1-ex1', en: 'Friends from all over the world.', zh: '来自全世界的朋友。' }] } }
        ] 
      },
      { 
        id: 'u3-w3', 
        type: 'word', 
        category: 'core-word', 
        english: 'different', 
        translation: '不同的', 
        imageUrl: u3_w3_img, 
        explanation: 'Not the same.', 
        examples: [
          { id: 'u3-w3-ex1', en: 'We have different ideas.', zh: '我们有不同的想法。' }
        ], 
        extensions: [
          { label: '名词', data: { id: 'u3-w3-ext1', english: 'difference', translation: '差异', examples: [{ id: 'u3-w3-ext1-ex1', en: 'What is the difference?', zh: '有什么区别？' }] } },
          { label: '短语', data: { id: 'u3-w3-ext2', english: 'be different from', translation: '与...不同', examples: [{ id: 'u3-w3-ext2-ex1', en: 'A is different from B.', zh: 'A和B不同。' }] } }
        ] 
      },
      { 
        id: 'u3-w14', 
        type: 'word', 
        category: 'core-word', 
        english: 'capital', 
        translation: '首都', 
        imageUrl: u3_w14_img, 
        explanation: 'The most important city in a country.', 
        examples: [
          { id: 'u3-w14-ex1', en: 'London is the capital of the UK.', zh: '伦敦是英国的首都。' }
        ], 
        extensions: [] 
      },
      { 
        id: 'u3-w16', 
        type: 'word', 
        category: 'core-word', 
        english: 'map', 
        translation: '地图', 
        imageUrl: u3_w16_img, 
        explanation: 'A drawing of the earth\'s surface.', 
        examples: [
          { id: 'u3-w16-ex1', en: 'Look at the map on the wall.', zh: '看墙上的地图。' }
        ], 
        extensions: [] 
      }
    ]
  },
  {
    id: 'u3-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { 
        id: 'u3-ew1', 
        type: 'word', 
        category: 'extended-word', 
        english: 'flag', 
        translation: '国旗', 
        imageUrl: u3_ew1_img, 
        explanation: 'A piece of cloth used as a symbol of a country.', 
        examples: [
          { id: 'u3-ew1-ex1', en: 'The national flag of China is red.', zh: '中国的国旗是红色的。' }
        ], 
        extensions: [] 
      },
      { 
        id: 'u3-ew2', 
        type: 'word', 
        category: 'extended-word', 
        english: 'language', 
        translation: '语言', 
        imageUrl: u3_ew2_img, 
        explanation: 'System of communication.', 
        examples: [
          { id: 'u3-ew2-ex1', en: 'English is a useful language.', zh: '英语是一门有用的语言。' }
        ], 
        extensions: [
          { label: '动词', data: { id: 'u3-ew2-ext1', english: 'speak', translation: '讲（语言）', examples: [{ id: 'u3-ew2-ext1-ex1', en: 'Can you speak English?', zh: '你会说英语吗？' }] } }
        ] 
      },
      { 
        id: 'u3-ew3', 
        type: 'word', 
        category: 'extended-word', 
        english: 'famous', 
        translation: '著名的', 
        imageUrl: u3_ew3_img, 
        explanation: 'Known by many people.', 
        examples: [
          { id: 'u3-ew3-ex1', en: 'He is a famous star.', zh: '他是一位著名的明星。' }
        ], 
        extensions: [
          { label: '短语', data: { id: 'u3-ew3-ext1', english: 'be famous for', translation: '因...闻名', examples: [{ id: 'u3-ew3-ext1-ex1', en: 'China is famous for the Great Wall.', zh: '中国因长城而闻名。' }] } }
        ] 
      }
    ]
  },
  {
    id: 'u3-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { 
        id: 'u3-p1', 
        type: 'phrase', 
        category: 'core-phrase', 
        english: 'be from', 
        translation: '来自', 
        imageUrl: u3_p1_img, 
        explanation: 'To originate from.', 
        examples: [
          { id: 'u3-p1-ex1', en: 'I am from Nanjing.', zh: '我来自南京。' }
        ], 
        extensions: [
          { label: '同义', data: { id: 'u3-p1-ext1', english: 'come from', translation: '来自', examples: [{ id: 'u3-p1-ext1-ex1', en: 'Where do you come from?', zh: '你来自哪里？' }] } }
        ] 
      },
      { 
        id: 'u3-p2', 
        type: 'phrase', 
        category: 'core-phrase', 
        english: 'in the north of', 
        translation: '在...北部', 
        imageUrl: u3_p2_img, 
        explanation: 'Located in the northern part.', 
        examples: [
          { id: 'u3-p2-ex1', en: 'Heilongjiang is in the north of China.', zh: '黑龙江在中国的北部。' }
        ], 
        extensions: [
          { label: '方位', data: { id: 'u3-p2-ext1', english: 'south', translation: '南方', examples: [{ id: 'u3-p2-ext1-ex1', en: 'Hainan is in the south.', zh: '海南在南方。' }] } }
        ] 
      }
    ]
  },
  {
    id: 'u3-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { 
        id: 'u3-s1', 
        type: 'sentence', 
        category: 'key-sentence', 
        english: 'Where are you from?', 
        translation: '你来自哪里？', 
        imageUrl: u3_s1_img, 
        explanation: 'Asking about origin.', 
        examples: [
          { id: 'u3-s1-ex1', en: 'I am from China.', zh: '我来自中国。' }
        ], 
        extensions: [] 
      },
      { 
        id: 'u3-s2', 
        type: 'sentence', 
        category: 'key-sentence', 
        english: 'Beijing is the capital of China.', 
        translation: '北京是中国的首都。', 
        imageUrl: u3_s2_img, 
        explanation: 'Stating a fact.', 
        examples: [], 
        extensions: [
          { label: '结构', data: { id: 'u3-s2-ext1', english: 'A is the capital of B', translation: 'A是B的首都', examples: [{ id: 'u3-s2-ext1-ex1', en: 'Paris is the capital of the UK... wait, France.', zh: '巴黎是英国... 等等，法国的首都。' }] } }
        ] 
      }
    ]
  }
];
