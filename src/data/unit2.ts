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
      { 
        id: 'u2-w1', 
        type: 'word', 
        category: 'core-word', 
        english: 'smart', 
        translation: '聪明的', 
        imageUrl: u2_w1_img, 
        explanation: 'Intelligent, or able to think quickly.', 
        examples: [
          { id: 'u2-w1-ex1', en: 'She is a smart student.', zh: '她是个聪明的学生。' }
        ], 
        extensions: [
          { label: '同义词', data: { id: 'u2-w1-ext1', english: 'clever', translation: '聪明的', examples: [{ id: 'u2-w1-ext1-ex1', en: 'He is a clever boy.', zh: '他是个聪明的男孩。' }] } }
        ] 
      },
      { 
        id: 'u2-w2', 
        type: 'word', 
        category: 'core-word', 
        english: 'care', 
        translation: '关心', 
        imageUrl: u2_w2_img, 
        explanation: 'To feel interested in something or upset about it.', 
        examples: [
          { id: 'u2-w2-ex1', en: 'I don\'t care what they say.', zh: '我不在乎他们说什么。' }
        ], 
        extensions: [
          { label: '短语', data: { id: 'u2-w2-ext1', english: 'care for', translation: '照顾', examples: [{ id: 'u2-w2-ext1-ex1', en: 'She cares for her sick mother.', zh: '她照顾生病的母亲。' }] } }
        ] 
      },
      { 
        id: 'u2-w3', 
        type: 'word', 
        category: 'core-word', 
        english: 'voice', 
        translation: '声音', 
        imageUrl: u2_w3_img, 
        explanation: 'The sound produced when you speak or sing.', 
        examples: [
          { id: 'u2-w3-ex1', en: 'She has a sweet voice.', zh: '她的声音很甜美。' }
        ], 
        extensions: [] 
      },
      { 
        id: 'u2-w11', 
        type: 'word', 
        category: 'core-word', 
        english: 'lucky', 
        translation: '幸运的', 
        imageUrl: u2_w11_img, 
        explanation: 'Having good luck.', 
        examples: [
          { id: 'u2-w11-ex1', en: 'You are a lucky dog.', zh: '你真是个幸运儿。' }
        ], 
        extensions: [
          { label: '名词', data: { id: 'u2-w11-ext1', english: 'luck', translation: '运气', examples: [{ id: 'u2-w11-ext1-ex1', en: 'Good luck!', zh: '祝你好运！' }] } }
        ] 
      },
      { 
        id: 'u2-w19', 
        type: 'word', 
        category: 'core-word', 
        english: 'enter', 
        translation: '进入', 
        imageUrl: u2_w19_img, 
        explanation: 'To come or go into a place.', 
        examples: [
          { id: 'u2-w19-ex1', en: 'Please enter the room.', zh: '请进入房间。' }
        ], 
        extensions: [
          { label: '名词', data: { id: 'u2-w19-ext1', english: 'entrance', translation: '入口', examples: [{ id: 'u2-w19-ext1-ex1', en: 'Where is the entrance?', zh: '入口在哪里？' }] } }
        ] 
      }
    ]
  },
  {
    id: 'u2-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { 
        id: 'u2-ew3', 
        type: 'word', 
        category: 'extended-word', 
        english: 'teenager', 
        translation: '青少年', 
        imageUrl: u2_ew3_img, 
        explanation: 'A young person between 13 and 19 years old.', 
        examples: [
          { id: 'u2-ew3-ex1', en: 'Many teenagers like pop music.', zh: '很多青少年喜欢流行音乐。' }
        ], 
        extensions: [] 
      },
      { 
        id: 'u2-ew6', 
        type: 'word', 
        category: 'extended-word', 
        english: 'respond', 
        translation: '回应', 
        imageUrl: u2_ew6_img, 
        explanation: 'To say or do something as a reaction.', 
        examples: [
          { id: 'u2-ew6-ex1', en: 'Please respond to my email.', zh: '请回复我的邮件。' }
        ], 
        extensions: [
          { label: '名词', data: { id: 'u2-ew6-ext1', english: 'response', translation: '反应', examples: [{ id: 'u2-ew6-ext1-ex1', en: 'I got no response.', zh: '我没有收到回复。' }] } }
        ] 
      }
    ]
  },
  {
    id: 'u2-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { 
        id: 'u2-p1', 
        type: 'phrase', 
        category: 'core-phrase', 
        english: 'used to do', 
        translation: '过去常常做', 
        imageUrl: u2_p1_img, 
        explanation: 'Something happened in the past but not now.', 
        examples: [
          { id: 'u2-p1-ex1', en: 'I used to play football.', zh: '我以前经常踢足球。' }
        ], 
        extensions: [] 
      },
      { 
        id: 'u2-p2', 
        type: 'phrase', 
        category: 'core-phrase', 
        english: 'be proud of', 
        translation: '为...感到自豪', 
        imageUrl: u2_p2_img, 
        explanation: 'Feeling pleasure and satisfaction.', 
        examples: [
          { id: 'u2-p2-ex1', en: 'I am proud of my son.', zh: '我为我的儿子感到骄傲。' }
        ], 
        extensions: [] 
      }
    ]
  },
  {
    id: 'u2-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { 
        id: 'u2-s1', 
        type: 'sentence', 
        category: 'key-sentence', 
        english: 'Feifei used to be afraid of speaking.', 
        translation: '菲菲以前害怕说话。', 
        imageUrl: u2_s1_img, 
        explanation: 'Describing a past habit.', 
        examples: [
          { id: 'u2-s1-ex1', en: 'She used to be shy.', zh: '她以前很害羞。' }
        ], 
        extensions: [
          { label: '短语', data: { id: 'u2-s1-ext1', english: 'be afraid of', translation: '害怕', examples: [{ id: 'u2-s1-ext1-ex1', en: 'Don\'t be afraid of mistakes.', zh: '不要害怕犯错。' }] } }
        ] 
      },
      { 
        id: 'u2-s2', 
        type: 'sentence', 
        category: 'key-sentence', 
        english: 'He has a strong belief in himself.', 
        translation: '他对自己有坚定的信念。', 
        imageUrl: u2_s2_img, 
        explanation: 'Expressing confidence.', 
        examples: [], 
        extensions: [
          { label: '动词', data: { id: 'u2-s2-ext1', english: 'believe', translation: '相信', examples: [{ id: 'u2-s2-ext1-ex1', en: 'I believe in you.', zh: '我相信你。' }] } }
        ] 
      }
    ]
  }
];
