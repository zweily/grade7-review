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
      { 
        id: 'u4-w1', 
        type: 'word', 
        category: 'core-word', 
        english: 'life', 
        translation: '生活', 
        imageUrl: u4_w1_img, 
        explanation: 'The period between birth and death.', 
        examples: [
          { id: 'u4-w1-ex1', en: 'City life is busy.', zh: '城市生活很忙碌。' },
          { id: 'u4-w1-ex2', en: 'Art is part of my life.', zh: '艺术是我生活的一部分。' }
        ], 
        extensions: [
          { label: '复数', data: { id: 'u4-w1-ext1', english: 'lives', translation: '生命（复数）', examples: [{ id: 'u4-w1-ext1-ex1', en: 'Cats have nine lives.', zh: '猫有九条命。' }] } }
        ] 
      },
      { 
        id: 'u4-w2', 
        type: 'word', 
        category: 'core-word', 
        english: 'subject', 
        translation: '科目', 
        imageUrl: u4_w2_img, 
        explanation: 'Something that you study at school.', 
        examples: [
          { id: 'u4-w2-ex1', en: 'Maths is my favourite subject.', zh: '数学是我最喜欢的科目。' }
        ], 
        extensions: [
          { label: '同义', data: { id: 'u4-w2-ext1', english: 'course', translation: '课程', examples: [{ id: 'u4-w2-ext1-ex1', en: 'I take a course in art.', zh: '我选修了一门艺术课。' }] } }
        ] 
      },
      { 
        id: 'u4-w11', 
        type: 'word', 
        category: 'core-word', 
        english: 'lesson', 
        translation: '课', 
        imageUrl: u4_w11_img, 
        explanation: 'A period of time for teaching and learning.', 
        examples: [
          { id: 'u4-w11-ex1', en: 'We have four lessons in the morning.', zh: '我们上午有四节课。' }
        ], 
        extensions: [
          { label: '短语', data: { id: 'u4-w11-ext1', english: 'have lessons', translation: '上课', examples: [{ id: 'u4-w11-ext1-ex1', en: 'We are having lessons.', zh: '我们正在上课。' }] } }
        ] 
      },
      { 
        id: 'u4-w12', 
        type: 'word', 
        category: 'core-word', 
        english: 'start', 
        translation: '开始', 
        imageUrl: u4_w12_img, 
        explanation: 'To begin doing something.', 
        examples: [
          { id: 'u4-w12-ex1', en: 'School starts at 8 a.m.', zh: '学校早上8点开始上课。' }
        ], 
        extensions: [
          { label: '反义', data: { id: 'u4-w12-ext1', english: 'finish', translation: '结束', examples: [{ id: 'u4-w12-ext1-ex1', en: 'When do you finish?', zh: '你什么时候结束？' }] } }
        ] 
      },
      { 
        id: 'u4-w13', 
        type: 'word', 
        category: 'core-word', 
        english: 'finish', 
        translation: '结束；完成', 
        imageUrl: u4_w13_img, 
        explanation: 'To stop doing something because it is complete.', 
        examples: [
          { id: 'u4-w13-ex1', en: 'I finished my homework.', zh: '我完成了作业。' }
        ], 
        extensions: [
          { label: '同义', data: { id: 'u4-w13-ext1', english: 'end', translation: '结束', examples: [{ id: 'u4-w13-ext1-ex1', en: 'The story ended happily.', zh: '故事圆满结束。' }] } }
        ] 
      },
      { 
        id: 'u4-w17', 
        type: 'word', 
        category: 'core-word', 
        english: 'favourite', 
        translation: '最喜欢的', 
        imageUrl: u4_w17_img, 
        explanation: 'Best liked or most enjoyed.', 
        examples: [
          { id: 'u4-w17-ex1', en: 'What is your favourite food?', zh: '你最喜欢的食物是什么？' }
        ], 
        extensions: [
          { label: '同义', data: { id: 'u4-w17-ext1', english: 'like best', translation: '最喜欢', examples: [{ id: 'u4-w17-ext1-ex1', en: 'I like apples best.', zh: '我最喜欢苹果。' }] } }
        ] 
      },
      { 
        id: 'u4-w18', 
        type: 'word', 
        category: 'core-word', 
        english: 'useful', 
        translation: '有用的', 
        imageUrl: u4_w18_img, 
        explanation: 'Helping you to do or achieve something.', 
        examples: [
          { id: 'u4-w18-ex1', en: 'This book is very useful.', zh: '这本书很有用。' }
        ], 
        extensions: [
          { label: '反义', data: { id: 'u4-w18-ext1', english: 'useless', translation: '无用的', examples: [{ id: 'u4-w18-ext1-ex1', en: 'It is useless to cry.', zh: '哭是没有用的。' }] } }
        ] 
      },
      { 
        id: 'u4-w19', 
        type: 'word', 
        category: 'core-word', 
        english: 'difficult', 
        translation: '困难的', 
        imageUrl: u4_w19_img, 
        explanation: 'Hard to do or understand.', 
        examples: [
          { id: 'u4-w19-ex1', en: 'The question is difficult.', zh: '这个问题很难。' }
        ], 
        extensions: [
          { label: '反义', data: { id: 'u4-w19-ext1', english: 'easy', translation: '容易的', examples: [{ id: 'u4-w19-ext1-ex1', en: 'It is easy to learn.', zh: '这很容易学。' }] } },
          { label: '同义', data: { id: 'u4-w19-ext2', english: 'hard', translation: '困难的', examples: [{ id: 'u4-w19-ext2-ex1', en: 'Working hard is important.', zh: '努力工作很重要。' }] } }
        ] 
      }
    ]
  },
  {
    id: 'u4-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { 
        id: 'u4-ew1', 
        type: 'word', 
        category: 'extended-word', 
        english: 'biology', 
        translation: '生物', 
        imageUrl: u4_ew1_img, 
        explanation: 'The study of living things.', 
        examples: [
          { id: 'u4-ew1-ex1', en: 'Biology is interesting.', zh: '生物很有趣。' }
        ], 
        extensions: [
          { label: '学家', data: { id: 'u4-ew1-ext1', english: 'biologist', translation: '生物学家', examples: [{ id: 'u4-ew1-ext1-ex1', en: 'He wants to be a biologist.', zh: '他想成为一名生物学家。' }] } }
        ] 
      },
      { 
        id: 'u4-ew2', 
        type: 'word', 
        category: 'extended-word', 
        english: 'IT', 
        translation: '信息技术', 
        imageUrl: u4_ew2_img, 
        explanation: 'Information Technology.', 
        examples: [
          { id: 'u4-ew2-ex1', en: 'We learn computer skills in IT class.', zh: '我们在信息技术课学习电脑技能。' }
        ], 
        extensions: [
          { label: '全称', data: { id: 'u4-ew2-ext1', english: 'Information Technology', translation: '信息技术', examples: [] } }
        ] 
      }
    ]
  },
  {
    id: 'u4-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { 
        id: 'u4-p1', 
        type: 'phrase', 
        category: 'core-phrase', 
        english: 'be good at', 
        translation: '擅长', 
        imageUrl: u4_p1_img, 
        explanation: 'To do something well.', 
        examples: [
          { id: 'u4-p1-ex1', en: 'She is good at dancing.', zh: '她擅长跳舞。' }
        ], 
        extensions: [
          { label: '同义', data: { id: 'u4-p1-ext1', english: 'do well in', translation: '在...做得好', examples: [{ id: 'u4-p1-ext1-ex1', en: 'He does well in math.', zh: '他数学学得好。' }] } }
        ] 
      },
      { 
        id: 'u4-p2', 
        type: 'phrase', 
        category: 'core-phrase', 
        english: 'work hard', 
        translation: '努力工作/学习', 
        imageUrl: u4_p2_img, 
        explanation: 'To put a lot of effort into a task.', 
        examples: [
          { id: 'u4-p2-ex1', en: 'Students should work hard.', zh: '学生应该努力学习。' }
        ], 
        extensions: [
          { label: '形容词', data: { id: 'u4-p2-ext1', english: 'hard-working', translation: '勤奋的', examples: [{ id: 'u4-p2-ext1-ex1', en: 'He is a hard-working boy.', zh: '他是个勤奋的男孩。' }] } }
        ] 
      }
    ]
  },
  {
    id: 'u4-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { 
        id: 'u4-s1', 
        type: 'sentence', 
        category: 'key-sentence', 
        english: 'What time does school start?', 
        translation: '学校几点开始上课？', 
        imageUrl: u4_s1_img, 
        explanation: 'Asking about the schedule.', 
        examples: [
          { id: 'u4-s1-ex1', en: 'It starts at 8 o\'clock.', zh: '8点开始。' }
        ], 
        extensions: [
          { label: '句型', data: { id: 'u4-s1-ext1', english: 'What time...', translation: '几点...', examples: [{ id: 'u4-s1-ext1-ex1', en: 'What time is it?', zh: '几点了？' }] } }
        ] 
      },
      { 
        id: 'u4-s2', 
        type: 'sentence', 
        category: 'key-sentence', 
        english: 'My favourite subject is English.', 
        translation: '我最喜欢的科目是英语。', 
        imageUrl: u4_s2_img, 
        explanation: 'Expressing preference.', 
        examples: [], 
        extensions: [] 
      }
    ]
  }
];
