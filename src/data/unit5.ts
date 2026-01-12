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
      { 
        id: 'u5-w1', 
        type: 'word', 
        category: 'core-word', 
        english: 'film', 
        translation: '电影', 
        imageUrl: u5_w1_img, 
        explanation: 'A series of moving pictures.', 
        examples: [
          { id: 'u5-w1-ex1', en: 'Do you like watching films?', zh: '你喜欢看电影吗？' }
        ], 
        extensions: [
          { label: '同义', data: { id: 'u5-w1-ext1', english: 'movie', translation: '电影', examples: [{ id: 'u5-w1-ext1-ex1', en: 'Let\'s see a movie.', zh: '我们去看电影吧。' }] } }
        ] 
      },
      { 
        id: 'u5-w2', 
        type: 'word', 
        category: 'core-word', 
        english: 'cinema', 
        translation: '电影院', 
        imageUrl: u5_w2_img, 
        explanation: 'A theatre where people pay to watch films.', 
        examples: [
          { id: 'u5-w2-ex1', en: 'Let\'s go to the cinema.', zh: '我们去电影院吧。' }
        ], 
        extensions: [
          { label: '短语', data: { id: 'u5-w2-ext1', english: 'go to the cinema', translation: '去看电影', examples: [{ id: 'u5-w2-ext1-ex1', en: 'I often go to the cinema on weekends.', zh: '我经常周末去看电影。' }] } }
        ] 
      },
      { 
        id: 'u5-w3', 
        type: 'word', 
        category: 'core-word', 
        english: 'ticket', 
        translation: '票', 
        imageUrl: u5_w3_img, 
        explanation: 'A piece of paper showing you have paid.', 
        examples: [
          { id: 'u5-w3-ex1', en: 'I have two tickets.', zh: '我有两张票。' }
        ], 
        extensions: [
          { label: '短语', data: { id: 'u5-w3-ext1', english: 'a ticket to...', translation: '一张...的票', examples: [{ id: 'u5-w3-ext1-ex1', en: 'A ticket to the zoo.', zh: '一张动物园的门票。' }] } }
        ] 
      },
      { 
        id: 'u5-w10', 
        type: 'word', 
        category: 'core-word', 
        english: 'funny', 
        translation: '有趣的；滑稽的', 
        imageUrl: u5_w10_img, 
        explanation: 'Causing laughter.', 
        examples: [
          { id: 'u5-w10-ex1', en: 'The film is very funny.', zh: '这部电影很滑稽。' }
        ], 
        extensions: [
          { label: '名词', data: { id: 'u5-w10-ext1', english: 'fun', translation: '乐趣', examples: [{ id: 'u5-w10-ext1-ex1', en: 'Have fun!', zh: '玩得开心！' }] } }
        ] 
      },
      { 
        id: 'u5-w11', 
        type: 'word', 
        category: 'core-word', 
        english: 'scary', 
        translation: '吓人的', 
        imageUrl: u5_w11_img, 
        explanation: 'Frightening.', 
        examples: [
          { id: 'u5-w11-ex1', en: 'I don\'t like scary films.', zh: '我不喜欢恐怖片。' }
        ], 
        extensions: [
          { label: '动词', data: { id: 'u5-w11-ext1', english: 'scare', translation: '惊吓', examples: [{ id: 'u5-w11-ext1-ex1', en: 'You scared me.', zh: '你吓到我了。' }] } }
        ] 
      },
      { 
        id: 'u5-w12', 
        type: 'word', 
        category: 'core-word', 
        english: 'exciting', 
        translation: '令人兴奋的', 
        imageUrl: u5_w12_img, 
        explanation: 'Causing great enthusiasm.', 
        examples: [
          { id: 'u5-w12-ex1', en: 'It was an exciting game.', zh: '那是一场令人兴奋的比赛。' }
        ], 
        extensions: [
          { label: '形容词', data: { id: 'u5-w12-ext1', english: 'excited', translation: '感到兴奋的', examples: [{ id: 'u5-w12-ext1-ex1', en: 'I am excited about the trip.', zh: '我对这次旅行感到兴奋。' }] } }
        ] 
      },
      { 
        id: 'u5-w13', 
        type: 'word', 
        category: 'core-word', 
        english: 'boring', 
        translation: '无聊的', 
        imageUrl: u5_w13_img, 
        explanation: 'Not interesting.', 
        examples: [
          { id: 'u5-w13-ex1', en: 'The book is boring.', zh: '这本书很无聊。' }
        ], 
        extensions: [
          { label: '形容词', data: { id: 'u5-w13-ext1', english: 'bored', translation: '感到无聊的', examples: [{ id: 'u5-w13-ext1-ex1', en: 'I am bored with this game.', zh: '我对这个游戏感到厌烦。' }] } }
        ] 
      },
      { 
        id: 'u5-w14', 
        type: 'word', 
        category: 'core-word', 
        english: 'action', 
        translation: '动作', 
        imageUrl: u5_w14_img, 
        explanation: 'The process of doing something.', 
        examples: [
          { id: 'u5-w14-ex1', en: 'I like action movies.', zh: '我喜欢动作片。' }
        ], 
        extensions: [
          { label: '动词', data: { id: 'u5-w14-ext1', english: 'act', translation: '行动；表演', examples: [{ id: 'u5-w14-ext1-ex1', en: 'He acts well.', zh: '他演得很好。' }] } }
        ] 
      }
    ]
  },
  {
    id: 'u5-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { 
        id: 'u5-ew1', 
        type: 'word', 
        category: 'extended-word', 
        english: 'cartoon', 
        translation: '动画片', 
        imageUrl: u5_ew1_img, 
        explanation: 'A film using animation.', 
        examples: [
          { id: 'u5-ew1-ex1', en: 'Children love cartoons.', zh: '孩子们喜欢动画片。' }
        ], 
        extensions: [
          { label: '相关', data: { id: 'u5-ew1-ext1', english: 'animation', translation: '动画', examples: [{ id: 'u5-ew1-ext1-ex1', en: 'Animation technology is advanced.', zh: '动画技术很先进。' }] } }
        ] 
      },
      { 
        id: 'u5-ew2', 
        type: 'word', 
        category: 'extended-word', 
        english: 'comedy', 
        translation: '喜剧', 
        imageUrl: u5_ew2_img, 
        explanation: 'A funny movie or play.', 
        examples: [
          { id: 'u5-ew2-ex1', en: 'Comedies make people laugh.', zh: '喜剧让人发笑。' }
        ], 
        extensions: [
          { label: '形容词', data: { id: 'u5-ew2-ext1', english: 'comedic', translation: '喜剧的', examples: [] } }
        ] 
      }
    ]
  },
  {
    id: 'u5-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { 
        id: 'u5-p1', 
        type: 'phrase', 
        category: 'core-phrase', 
        english: 'enjoy oneself', 
        translation: '玩得开心', 
        imageUrl: u5_p1_img, 
        explanation: 'To have a pleasant time.', 
        examples: [
          { id: 'u5-p1-ex1', en: 'Did you enjoy yourself?', zh: '你玩得开心吗？' }
        ], 
        extensions: [
          { label: '同义', data: { id: 'u5-p1-ext1', english: 'have fun', translation: '玩得开心', examples: [{ id: 'u5-p1-ext1-ex1', en: 'Let\'s have fun.', zh: '我们去玩吧。' }] } }
        ] 
      },
      { 
        id: 'u5-p2', 
        type: 'phrase', 
        category: 'core-phrase', 
        english: 'look for', 
        translation: '寻找', 
        imageUrl: u5_p2_img, 
        explanation: 'To try to find something.', 
        examples: [
          { id: 'u5-p2-ex1', en: 'What are you looking for?', zh: '你在找什么？' }
        ], 
        extensions: [
          { label: '同义', data: { id: 'u5-p2-ext1', english: 'search', translation: '搜寻', examples: [{ id: 'u5-p2-ext1-ex1', en: 'I searched everywhere.', zh: '我到处搜寻。' }] } }
        ] 
      }
    ]
  },
  {
    id: 'u5-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { 
        id: 'u5-s1', 
        type: 'sentence', 
        category: 'key-sentence', 
        english: 'Would you like to go to the cinema?', 
        translation: '你想去电影院吗？', 
        imageUrl: u5_s1_img, 
        explanation: 'Inviting someone.', 
        examples: [
          { id: 'u5-s1-ex1', en: 'Would you like to come?', zh: '你想来吗？' }
        ], 
        extensions: [
          { label: '句型', data: { id: 'u5-s1-ext1', english: 'Would you like to do...', translation: '你想做...吗？', examples: [{ id: 'u5-s1-ext1-ex1', en: 'Would you like to dance?', zh: '你想跳舞吗？' }] } }
        ] 
      },
      { 
        id: 'u5-s2', 
        type: 'sentence', 
        category: 'key-sentence', 
        english: 'I like action films because they are exciting.', 
        translation: '我喜欢动作片，因为它们很刺激。', 
        imageUrl: u5_s2_img, 
        explanation: 'Reasoning.', 
        examples: [], 
        extensions: [] 
      }
    ]
  }
];
