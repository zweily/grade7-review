import unit5_supp_a_unit_img from '@/assets/images/background.jpg';
import unit5_supp_abr_ab_children_prou_img from '@/assets/images/proud.jpg';
import unit5_supp_apleznt_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_ce_ee_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_ee_ery_an_ocean_for__img from '@/assets/images/u6-ocean.jpg';
import unit5_supp_wafs_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_we_named_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_ykastoamy_custom_ah_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_actor_img from '@/assets/images/u5-film.jpeg';
import unit5_supp_culture_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_dancing_are_also_sho_img from '@/assets/images/u5-film.jpeg';
import unit5_supp_director_img from '@/assets/images/u5-film.jpeg';
import unit5_supp_ee_ae_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_felunont_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_forward_to_doing_img from '@/assets/images/u2-used-to-do.jpeg';
import unit5_supp_friendship_rs_arra_img from '@/assets/images/discuss.jpg';
import unit5_supp_ic_poin_as_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_im_mind_characters_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_imagination_ma_img from '@/assets/images/creative.jpg';
import unit5_supp_impolite_aals_adj_img from '@/assets/images/u4-it.jpg';
import unit5_supp_incorrect_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_laughing_and_crying__img from '@/assets/images/discuss.jpg';
import unit5_supp_make_up_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_making_the_best_use__img from '@/assets/images/u3-different.jpg';
import unit5_supp_posters_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_r_ane_a_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_succeeded_in_doing_img from '@/assets/images/u1-succeed.jpeg';
import unit5_supp_to_see_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_web_es_ee_img from '@/assets/images/u4-textbook.jpg';
import unit5_supp_wrestle_img from '@/assets/images/u4-textbook.jpg';
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
      { id: 'u5-w1', type: 'word', category: 'core-word', english: 'film', translation: '电影', imageUrl: u5_w1_img, explanation: 'Movie.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-w1-syn', 
              english: "plastic film", 
              translation: "近义词", 
              explanation: "Meaning of plastic film", 
              imageUrl: u5_w1_img,
              examples: [{ id: 'u5-w1-syn-ex', en: 'The plastic film is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-w1-use', 
              english: "film", 
              translation: "用法", 
              explanation: "Practice using film.", 
              imageUrl: u5_w1_img,
              examples: [{ id: 'u5-w1-use-ex', en: 'I like film.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-w2', type: 'word', category: 'core-word', english: 'cinema', translation: '电影院', imageUrl: u5_w2_img, explanation: 'Theatre.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-w2-syn', 
              english: "movie theatre", 
              translation: "近义词", 
              explanation: "Meaning of movie theatre", 
              imageUrl: u5_w2_img,
              examples: [{ id: 'u5-w2-syn-ex', en: 'The movie theatre is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-w2-use', 
              english: "cinema", 
              translation: "用法", 
              explanation: "Practice using cinema.", 
              imageUrl: u5_w2_img,
              examples: [{ id: 'u5-w2-use-ex', en: 'I like cinema.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-w3', type: 'word', category: 'core-word', english: 'ticket', translation: '票', imageUrl: u5_w3_img, explanation: 'Admission paper.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-w3-syn', 
              english: "slate", 
              translation: "近义词", 
              explanation: "(formerly) a writing tablet made of slate", 
              imageUrl: u5_w3_img,
              examples: [{ id: 'u5-w3-syn-ex', en: 'Do you know slate?', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-w3-use', 
              english: "ticket", 
              translation: "用法", 
              explanation: "Practice using ticket.", 
              imageUrl: u5_w3_img,
              examples: [{ id: 'u5-w3-use-ex', en: 'I like ticket.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-w10', type: 'word', category: 'core-word', english: 'funny', translation: '有趣的', imageUrl: u5_w10_img, explanation: 'Humorous.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-w10-syn', 
              english: "suspect", 
              translation: "近义词", 
              explanation: "someone who is under suspicion", 
              imageUrl: u5_w10_img,
              examples: [{ id: 'u5-w10-syn-ex', en: 'The suspect is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-w10-use', 
              english: "funny", 
              translation: "用法", 
              explanation: "Practice using funny.", 
              imageUrl: u5_w10_img,
              examples: [{ id: 'u5-w10-use-ex', en: 'This is a funny.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-w11', type: 'word', category: 'core-word', english: 'scary', translation: '吓人的', imageUrl: u5_w11_img, explanation: 'Frightening.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-w11-syn', 
              english: "scarey", 
              translation: "近义词", 
              explanation: "provoking fear terror", 
              imageUrl: u5_w11_img,
              examples: [{ id: 'u5-w11-syn-ex', en: 'The scarey is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-w11-use', 
              english: "scary", 
              translation: "用法", 
              explanation: "Practice using scary.", 
              imageUrl: u5_w11_img,
              examples: [{ id: 'u5-w11-use-ex', en: 'Do you know scary?', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-w12', type: 'word', category: 'core-word', english: 'exciting', translation: '刺激的', imageUrl: u5_w12_img, explanation: 'Enthusiastic.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-w12-syn', 
              english: "excite", 
              translation: "近义词", 
              explanation: "arouse or elicit a feeling", 
              imageUrl: u5_w12_img,
              examples: [{ id: 'u5-w12-syn-ex', en: 'This is a excite.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-w12-use', 
              english: "exciting", 
              translation: "用法", 
              explanation: "Practice using exciting.", 
              imageUrl: u5_w12_img,
              examples: [{ id: 'u5-w12-use-ex', en: 'This is a exciting.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-w13', type: 'word', category: 'core-word', english: 'boring', translation: '无聊的', imageUrl: u5_w13_img, explanation: 'Not interesting.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-w13-syn', 
              english: "tiresome", 
              translation: "近义词", 
              explanation: "so lacking in interest as to cause mental weariness; ; ; ; ; ; - Edmund Burke; ; - Mark Twain", 
              imageUrl: u5_w13_img,
              examples: [{ id: 'u5-w13-syn-ex', en: 'I like tiresome.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-w13-use', 
              english: "boring", 
              translation: "用法", 
              explanation: "Practice using boring.", 
              imageUrl: u5_w13_img,
              examples: [{ id: 'u5-w13-use-ex', en: 'Do you know boring?', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-w14', type: 'word', category: 'core-word', english: 'action', translation: '动作', imageUrl: u5_w14_img, explanation: 'Doing something.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-w14-syn', 
              english: "sue", 
              translation: "近义词", 
              explanation: "French writer whose novels described the sordid side of city life (1804-1857)", 
              imageUrl: u5_w14_img,
              examples: [{ id: 'u5-w14-syn-ex', en: 'I like sue.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-w14-use', 
              english: "action", 
              translation: "用法", 
              explanation: "Practice using action.", 
              imageUrl: u5_w14_img,
              examples: [{ id: 'u5-w14-use-ex', en: 'I like action.', zh: 'Translation' }]
            } 
          }
] }
    ]
  },
  {
    id: 'u5-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { id: 'u5-ew1', type: 'word', category: 'extended-word', english: 'cartoon', translation: '动画片', imageUrl: u5_ew1_img, explanation: 'Animation.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-ew1-syn', 
              english: "animated cartoon", 
              translation: "近义词", 
              explanation: "Meaning of animated cartoon", 
              imageUrl: u5_ew1_img,
              examples: [{ id: 'u5-ew1-syn-ex', en: 'I like animated cartoon.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-ew1-use', 
              english: "cartoon", 
              translation: "用法", 
              explanation: "Practice using cartoon.", 
              imageUrl: u5_ew1_img,
              examples: [{ id: 'u5-ew1-use-ex', en: 'Do you know cartoon?', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-ew2', type: 'word', category: 'extended-word', english: 'comedy', translation: '喜剧', imageUrl: u5_ew2_img, explanation: 'Funny movie.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-ew2-syn', 
              english: "drollery", 
              translation: "近义词", 
              explanation: "a comic incident or series of incidents", 
              imageUrl: u5_ew2_img,
              examples: [{ id: 'u5-ew2-syn-ex', en: 'The drollery is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-ew2-use', 
              english: "comedy", 
              translation: "用法", 
              explanation: "Practice using comedy.", 
              imageUrl: u5_ew2_img,
              examples: [{ id: 'u5-ew2-use-ex', en: 'I like comedy.', zh: 'Translation' }]
            } 
          }
] }
    ]
  },
  {
    id: 'u5-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { id: 'u5-p1', type: 'phrase', category: 'core-phrase', english: 'enjoy oneself', translation: '玩得开心', imageUrl: u5_p1_img, explanation: 'Have fun.', examples: [], extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-p1-use', 
              english: "enjoy oneself", 
              translation: "用法", 
              explanation: "Practice using enjoy oneself.", 
              imageUrl: u5_p1_img,
              examples: [{ id: 'u5-p1-use-ex', en: 'This is a enjoy oneself.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-p2', type: 'phrase', category: 'core-phrase', english: 'look for', translation: '寻找', imageUrl: u5_p2_img, explanation: 'Search.', examples: [], extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-p2-use', 
              english: "look for", 
              translation: "用法", 
              explanation: "Practice using look for.", 
              imageUrl: u5_p2_img,
              examples: [{ id: 'u5-p2-use-ex', en: 'Do you know look for?', zh: 'Translation' }]
            } 
          }
] }
    ]
  },
  {
    id: 'u5-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { id: 'u5-s1', type: 'sentence', category: 'key-sentence', english: 'Would you like to go to the cinema?', translation: '你想去电影院吗？', imageUrl: u5_s1_img, explanation: 'Invitation.', examples: [], extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-s1-use', 
              english: "Would you like to go to the cinema?", 
              translation: "用法", 
              explanation: "Practice using Would you like to go to the cinema?.", 
              imageUrl: u5_s1_img,
              examples: [{ id: 'u5-s1-use-ex', en: 'This is a Would you like to go to the cinema?.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u5-s2', type: 'sentence', category: 'key-sentence', english: 'I like action films because they are exciting.', translation: '我喜欢动作片，因为很刺激。', imageUrl: u5_s2_img, explanation: 'Reasoning.', examples: [], extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-s2-use', 
              english: "I like action films because they are exciting.", 
              translation: "用法", 
              explanation: "Practice using I like action films because they are exciting..", 
              imageUrl: u5_s2_img,
              examples: [{ id: 'u5-s2-use-ex', en: 'Do you know I like action films because they are exciting.?', zh: 'Translation' }]
            } 
          }
] }
    ]
  }

  ,{
    id: 'u5-supplementary',
    title: '5. 补充内容 (Supplementary)',
    items: [
      {
        id: 'u5-supp-1',
        type: 'word',
        category: 'supplementary',
        english: "A Unit",
        translation: "翻译待补充",
        explanation: "Definition or usage of A Unit",
        imageUrl: unit5_supp_a_unit_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-1-ex1', en: 'A Unit', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-1-ex1-use', 
              english: "A Unit", 
              translation: "用法", 
              explanation: "Practice using A Unit.", 
              imageUrl: unit5_supp_a_unit_img,
              examples: [{ id: 'u5-supp-1-ex1-use-ex', en: 'I like A Unit.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-2',
        type: 'sentence',
        category: 'supplementary',
        english: "ABR AB children proud of",
        translation: "翻译待补充",
        explanation: "Definition or usage of ABR AB children proud of",
        imageUrl: unit5_supp_abr_ab_children_prou_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-2-ex1', en: 'ABR AB children proud of', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-2-ex1-use', 
              english: "ABR AB children proud of", 
              translation: "用法", 
              explanation: "Practice using ABR AB children proud of.", 
              imageUrl: unit5_supp_abr_ab_children_prou_img,
              examples: [{ id: 'u5-supp-2-ex1-use-ex', en: 'This is a ABR AB children proud of.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-3',
        type: 'word',
        category: 'supplementary',
        english: "Apleznt",
        translation: "令人和伦快的",
        explanation: "Definition or usage of Apleznt",
        imageUrl: unit5_supp_apleznt_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-3-ex1', en: 'Apleznt', zh: '令人和伦快的' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-3-ex1-use', 
              english: "Apleznt", 
              translation: "用法", 
              explanation: "Practice using Apleznt.", 
              imageUrl: unit5_supp_apleznt_img,
              examples: [{ id: 'u5-supp-3-ex1-use-ex', en: 'I like Apleznt.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-4',
        type: 'word',
        category: 'supplementary',
        english: "Ce ee",
        translation: "翻译待补充",
        explanation: "Definition or usage of Ce ee",
        imageUrl: unit5_supp_ce_ee_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-4-ex1', en: 'Ce ee', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-4-ex1-use', 
              english: "Ce ee", 
              translation: "用法", 
              explanation: "Practice using Ce ee.", 
              imageUrl: unit5_supp_ce_ee_img,
              examples: [{ id: 'u5-supp-4-ex1-use-ex', en: 'The Ce ee is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-5',
        type: 'sentence',
        category: 'supplementary',
        english: "EE ery an ocean for sure",
        translation: "翻译待补充",
        explanation: "Definition or usage of EE ery an ocean for sure",
        imageUrl: unit5_supp_ee_ery_an_ocean_for__img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-5-ex1', en: 'EE ery an ocean for sure', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-5-ex1-use', 
              english: "EE ery an ocean for sure", 
              translation: "用法", 
              explanation: "Practice using EE ery an ocean for sure.", 
              imageUrl: unit5_supp_ee_ery_an_ocean_for__img,
              examples: [{ id: 'u5-supp-5-ex1-use-ex', en: 'This is a EE ery an ocean for sure.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-6',
        type: 'word',
        category: 'supplementary',
        english: "WAFS",
        translation: "个共同的月标",
        explanation: "Definition or usage of WAFS",
        imageUrl: unit5_supp_wafs_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-6-ex1', en: 'WAFS', zh: '个共同的月标' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-6-ex1-use', 
              english: "WAFS", 
              translation: "用法", 
              explanation: "Practice using WAFS.", 
              imageUrl: unit5_supp_wafs_img,
              examples: [{ id: 'u5-supp-6-ex1-use-ex', en: 'This is a WAFS.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-7',
        type: 'word',
        category: 'supplementary',
        english: "We named",
        translation: "翻译待补充",
        explanation: "Definition or usage of We named",
        imageUrl: unit5_supp_we_named_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-7-ex1', en: 'We named', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-7-ex1-use', 
              english: "We named", 
              translation: "用法", 
              explanation: "Practice using We named.", 
              imageUrl: unit5_supp_we_named_img,
              examples: [{ id: 'u5-supp-7-ex1-use-ex', en: 'I like We named.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-8',
        type: 'word',
        category: 'supplementary',
        english: "YkAstoamy custom aH",
        translation: "翻译待补充",
        explanation: "Definition or usage of YkAstoamy custom aH",
        imageUrl: unit5_supp_ykastoamy_custom_ah_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-8-ex1', en: 'YkAstoamy custom aH', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-8-ex1-use', 
              english: "YkAstoamy custom aH", 
              translation: "用法", 
              explanation: "Practice using YkAstoamy custom aH.", 
              imageUrl: unit5_supp_ykastoamy_custom_ah_img,
              examples: [{ id: 'u5-supp-8-ex1-use-ex', en: 'This is a YkAstoamy custom aH.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-9',
        type: 'word',
        category: 'supplementary',
        english: "actor",
        translation: "配音演员",
        explanation: "Definition or usage of actor",
        imageUrl: unit5_supp_actor_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-9-ex1', en: 'actor', zh: '配音演员' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-supp-9-ex1-syn', 
              english: "histrion", 
              translation: "近义词", 
              explanation: "a theatrical performer", 
              imageUrl: unit5_supp_actor_img,
              examples: [{ id: 'u5-supp-9-ex1-syn-ex', en: 'I like histrion.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-9-ex1-use', 
              english: "actor", 
              translation: "用法", 
              explanation: "Practice using actor.", 
              imageUrl: unit5_supp_actor_img,
              examples: [{ id: 'u5-supp-9-ex1-use-ex', en: 'The actor is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-10',
        type: 'word',
        category: 'supplementary',
        english: "culture",
        translation: "翻译待补充",
        explanation: "Definition or usage of culture",
        imageUrl: unit5_supp_culture_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-10-ex1', en: 'culture', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-supp-10-ex1-syn', 
              english: "civilisation", 
              translation: "近义词", 
              explanation: "the social process whereby societies achieve an advanced stage of development and organization", 
              imageUrl: unit5_supp_culture_img,
              examples: [{ id: 'u5-supp-10-ex1-syn-ex', en: 'Do you know civilisation?', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-10-ex1-use', 
              english: "culture", 
              translation: "用法", 
              explanation: "Practice using culture.", 
              imageUrl: unit5_supp_culture_img,
              examples: [{ id: 'u5-supp-10-ex1-use-ex', en: 'This is a culture.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-11',
        type: 'sentence',
        category: 'supplementary',
        english: "dancing are also shown in the film",
        translation: "翻译待补充",
        explanation: "Definition or usage of dancing are also shown in the film",
        imageUrl: unit5_supp_dancing_are_also_sho_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-11-ex1', en: 'dancing are also shown in the film', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-11-ex1-use', 
              english: "dancing are also shown in the film", 
              translation: "用法", 
              explanation: "Practice using dancing are also shown in the film.", 
              imageUrl: unit5_supp_dancing_are_also_sho_img,
              examples: [{ id: 'u5-supp-11-ex1-use-ex', en: 'The dancing are also shown in the film is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-12',
        type: 'word',
        category: 'supplementary',
        english: "director",
        translation: "翻译待补充",
        explanation: "Definition or usage of director",
        imageUrl: unit5_supp_director_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-12-ex1', en: 'director', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-supp-12-ex1-syn', 
              english: "managing director", 
              translation: "近义词", 
              explanation: "Meaning of managing director", 
              imageUrl: unit5_supp_director_img,
              examples: [{ id: 'u5-supp-12-ex1-syn-ex', en: 'I like managing director.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-12-ex1-use', 
              english: "director", 
              translation: "用法", 
              explanation: "Practice using director.", 
              imageUrl: unit5_supp_director_img,
              examples: [{ id: 'u5-supp-12-ex1-use-ex', en: 'The director is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-13',
        type: 'word',
        category: 'supplementary',
        english: "ee ae",
        translation: "翻译待补充",
        explanation: "Definition or usage of ee ae",
        imageUrl: unit5_supp_ee_ae_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-13-ex1', en: 'ee ae', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-13-ex1-use', 
              english: "ee ae", 
              translation: "用法", 
              explanation: "Practice using ee ae.", 
              imageUrl: unit5_supp_ee_ae_img,
              examples: [{ id: 'u5-supp-13-ex1-use-ex', en: 'Do you know ee ae?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-14',
        type: 'word',
        category: 'supplementary',
        english: "felunont",
        translation: "翻译待补充",
        explanation: "Definition or usage of felunont",
        imageUrl: unit5_supp_felunont_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-14-ex1', en: 'felunont', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-14-ex1-use', 
              english: "felunont", 
              translation: "用法", 
              explanation: "Practice using felunont.", 
              imageUrl: unit5_supp_felunont_img,
              examples: [{ id: 'u5-supp-14-ex1-use-ex', en: 'Do you know felunont?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-15',
        type: 'word',
        category: 'supplementary',
        english: "forward to doing",
        translation: "翻译待补充",
        explanation: "Definition or usage of forward to doing",
        imageUrl: unit5_supp_forward_to_doing_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-15-ex1', en: 'forward to doing', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-15-ex1-use', 
              english: "forward to doing", 
              translation: "用法", 
              explanation: "Practice using forward to doing.", 
              imageUrl: unit5_supp_forward_to_doing_img,
              examples: [{ id: 'u5-supp-15-ex1-use-ex', en: 'This is a forward to doing.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-16',
        type: 'word',
        category: 'supplementary',
        english: "friendship Rs ARRA",
        translation: "翻译待补充",
        explanation: "Definition or usage of friendship Rs ARRA",
        imageUrl: unit5_supp_friendship_rs_arra_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-16-ex1', en: 'friendship Rs ARRA', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-16-ex1-use', 
              english: "friendship Rs ARRA", 
              translation: "用法", 
              explanation: "Practice using friendship Rs ARRA.", 
              imageUrl: unit5_supp_friendship_rs_arra_img,
              examples: [{ id: 'u5-supp-16-ex1-use-ex', en: 'Do you know friendship Rs ARRA?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-17',
        type: 'word',
        category: 'supplementary',
        english: "ic Poin as",
        translation: "翻译待补充",
        explanation: "Definition or usage of ic Poin as",
        imageUrl: unit5_supp_ic_poin_as_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-17-ex1', en: 'ic Poin as', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-17-ex1-use', 
              english: "ic Poin as", 
              translation: "用法", 
              explanation: "Practice using ic Poin as.", 
              imageUrl: unit5_supp_ic_poin_as_img,
              examples: [{ id: 'u5-supp-17-ex1-use-ex', en: 'Do you know ic Poin as?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-18',
        type: 'word',
        category: 'supplementary',
        english: "im mind characters",
        translation: "翻译待补充",
        explanation: "Definition or usage of im mind characters",
        imageUrl: unit5_supp_im_mind_characters_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-18-ex1', en: 'im mind characters', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-18-ex1-use', 
              english: "im mind characters", 
              translation: "用法", 
              explanation: "Practice using im mind characters.", 
              imageUrl: unit5_supp_im_mind_characters_img,
              examples: [{ id: 'u5-supp-18-ex1-use-ex', en: 'This is a im mind characters.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-19',
        type: 'word',
        category: 'supplementary',
        english: "imagination MA",
        translation: "想象力",
        explanation: "Definition or usage of imagination MA",
        imageUrl: unit5_supp_imagination_ma_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-19-ex1', en: 'imagination MA', zh: '想象力' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-19-ex1-use', 
              english: "imagination MA", 
              translation: "用法", 
              explanation: "Practice using imagination MA.", 
              imageUrl: unit5_supp_imagination_ma_img,
              examples: [{ id: 'u5-supp-19-ex1-use-ex', en: 'I like imagination MA.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-20',
        type: 'word',
        category: 'supplementary',
        english: "impolite AALS adj",
        translation: "翻译待补充",
        explanation: "Definition or usage of impolite AALS adj",
        imageUrl: unit5_supp_impolite_aals_adj_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-20-ex1', en: 'impolite AALS adj', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-20-ex1-use', 
              english: "impolite AALS adj", 
              translation: "用法", 
              explanation: "Practice using impolite AALS adj.", 
              imageUrl: unit5_supp_impolite_aals_adj_img,
              examples: [{ id: 'u5-supp-20-ex1-use-ex', en: 'The impolite AALS adj is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-21',
        type: 'word',
        category: 'supplementary',
        english: "incorrect",
        translation: "不正确的",
        explanation: "Definition or usage of incorrect",
        imageUrl: unit5_supp_incorrect_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-21-ex1', en: 'incorrect', zh: '不正确的' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-supp-21-ex1-syn', 
              english: "wrong", 
              translation: "近义词", 
              explanation: "that which is contrary to the principles of justice or law", 
              imageUrl: unit5_supp_incorrect_img,
              examples: [{ id: 'u5-supp-21-ex1-syn-ex', en: 'Do you know wrong?', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-21-ex1-use', 
              english: "incorrect", 
              translation: "用法", 
              explanation: "Practice using incorrect.", 
              imageUrl: unit5_supp_incorrect_img,
              examples: [{ id: 'u5-supp-21-ex1-use-ex', en: 'The incorrect is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-22',
        type: 'sentence',
        category: 'supplementary',
        english: "laughing and crying with my friends",
        translation: "翻译待补充",
        explanation: "Definition or usage of laughing and crying with my friends",
        imageUrl: unit5_supp_laughing_and_crying__img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-22-ex1', en: 'laughing and crying with my friends', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-22-ex1-use', 
              english: "laughing and crying with my friends", 
              translation: "用法", 
              explanation: "Practice using laughing and crying with my friends.", 
              imageUrl: unit5_supp_laughing_and_crying__img,
              examples: [{ id: 'u5-supp-22-ex1-use-ex', en: 'This is a laughing and crying with my friends.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-23',
        type: 'word',
        category: 'supplementary',
        english: "make-up",
        translation: "满",
        explanation: "Definition or usage of make-up",
        imageUrl: unit5_supp_make_up_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-23-ex1', en: 'make-up', zh: '满' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-supp-23-ex1-syn', 
              english: "composition", 
              translation: "近义词", 
              explanation: "the spatial property resulting from the arrangement of parts in relation to each other and to the whole", 
              imageUrl: unit5_supp_make_up_img,
              examples: [{ id: 'u5-supp-23-ex1-syn-ex', en: 'This is a composition.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-23-ex1-use', 
              english: "make-up", 
              translation: "用法", 
              explanation: "Practice using make-up.", 
              imageUrl: unit5_supp_make_up_img,
              examples: [{ id: 'u5-supp-23-ex1-use-ex', en: 'The make-up is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-24',
        type: 'sentence',
        category: 'supplementary',
        english: "making the best use of different Chinese art forms",
        translation: "翻译待补充",
        explanation: "Definition or usage of making the best use of different Chinese art forms",
        imageUrl: unit5_supp_making_the_best_use__img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-24-ex1', en: 'making the best use of different Chinese art forms', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-24-ex1-use', 
              english: "making the best use of different Chinese art forms", 
              translation: "用法", 
              explanation: "Practice using making the best use of different Chinese art forms.", 
              imageUrl: unit5_supp_making_the_best_use__img,
              examples: [{ id: 'u5-supp-24-ex1-use-ex', en: 'This is a making the best use of different Chinese art forms.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-25',
        type: 'word',
        category: 'supplementary',
        english: "posters",
        translation: "翻译待补充",
        explanation: "Definition or usage of posters",
        imageUrl: unit5_supp_posters_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-25-ex1', en: 'posters', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-supp-25-ex1-syn', 
              english: "bill", 
              translation: "近义词", 
              explanation: "a statute in draft before it becomes law", 
              imageUrl: unit5_supp_posters_img,
              examples: [{ id: 'u5-supp-25-ex1-syn-ex', en: 'Do you know bill?', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-25-ex1-use', 
              english: "posters", 
              translation: "用法", 
              explanation: "Practice using posters.", 
              imageUrl: unit5_supp_posters_img,
              examples: [{ id: 'u5-supp-25-ex1-use-ex', en: 'I like posters.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-26',
        type: 'word',
        category: 'supplementary',
        english: "r ane a",
        translation: "翻译待补充",
        explanation: "Definition or usage of r ane a",
        imageUrl: unit5_supp_r_ane_a_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-26-ex1', en: 'r ane a', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-26-ex1-use', 
              english: "r ane a", 
              translation: "用法", 
              explanation: "Practice using r ane a.", 
              imageUrl: unit5_supp_r_ane_a_img,
              examples: [{ id: 'u5-supp-26-ex1-use-ex', en: 'I like r ane a.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-27',
        type: 'word',
        category: 'supplementary',
        english: "succeeded in doing",
        translation: "翻译待补充",
        explanation: "Definition or usage of succeeded in doing",
        imageUrl: unit5_supp_succeeded_in_doing_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-27-ex1', en: 'succeeded in doing', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-27-ex1-use', 
              english: "succeeded in doing", 
              translation: "用法", 
              explanation: "Practice using succeeded in doing.", 
              imageUrl: unit5_supp_succeeded_in_doing_img,
              examples: [{ id: 'u5-supp-27-ex1-use-ex', en: 'The succeeded in doing is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-28',
        type: 'word',
        category: 'supplementary',
        english: "tka\'rekt",
        translation: "准确无误的",
        explanation: "Definition or usage of tka\'rekt",
        imageUrl: undefined, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-28-ex1', en: 'tka\'rekt', zh: '准确无误的' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-28-ex1-use', 
              english: "tka", 
              translation: "用法", 
              explanation: "Practice using tka.", 
              imageUrl: undefined,
              examples: [{ id: 'u5-supp-28-ex1-use-ex', en: 'I like tka\.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-29',
        type: 'word',
        category: 'supplementary',
        english: "to see",
        translation: "我迫不及待想去看这部电影了",
        explanation: "Definition or usage of to see",
        imageUrl: unit5_supp_to_see_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-29-ex1', en: 'to see', zh: '我迫不及待想去看这部电影了' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-29-ex1-use', 
              english: "to see", 
              translation: "用法", 
              explanation: "Practice using to see.", 
              imageUrl: unit5_supp_to_see_img,
              examples: [{ id: 'u5-supp-29-ex1-use-ex', en: 'This is a to see.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-30',
        type: 'word',
        category: 'supplementary',
        english: "web es ee",
        translation: "翻译待补充",
        explanation: "Definition or usage of web es ee",
        imageUrl: unit5_supp_web_es_ee_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-30-ex1', en: 'web es ee', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-30-ex1-use', 
              english: "web es ee", 
              translation: "用法", 
              explanation: "Practice using web es ee.", 
              imageUrl: unit5_supp_web_es_ee_img,
              examples: [{ id: 'u5-supp-30-ex1-use-ex', en: 'Do you know web es ee?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u5-supp-31',
        type: 'word',
        category: 'supplementary',
        english: "wrestle",
        translation: "翻译待补充",
        explanation: "Definition or usage of wrestle",
        imageUrl: unit5_supp_wrestle_img, // Will be fixed in image task
        examples: [
             { id: 'u5-supp-31-ex1', en: 'wrestle', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u5-supp-31-ex1-syn', 
              english: "squirm", 
              translation: "近义词", 
              explanation: "the act of wiggling", 
              imageUrl: unit5_supp_wrestle_img,
              examples: [{ id: 'u5-supp-31-ex1-syn-ex', en: 'This is a squirm.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u5-supp-31-ex1-use', 
              english: "wrestle", 
              translation: "用法", 
              explanation: "Practice using wrestle.", 
              imageUrl: unit5_supp_wrestle_img,
              examples: [{ id: 'u5-supp-31-ex1-use-ex', en: 'This is a wrestle.', zh: 'Translation' }]
            } 
          }
]
      }
    ]
  }
];
