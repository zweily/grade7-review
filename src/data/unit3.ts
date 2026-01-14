import unit3_supp_a_unit_img from '@/assets/images/background.jpg';
import unit3_supp_being_a_cook_is_like_img from '@/assets/images/pizza.jpg';
import unit3_supp_et_es_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_i_set_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_i_spent_the_whole_af_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_let_ae_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_lin_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_lis_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_poles_seh_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_pa_ae_a_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_teachers_give_lively_img from '@/assets/images/u4-lesson.jpg';
import unit3_supp_test_for_unit_img from '@/assets/images/background.jpg';
import unit3_supp_thanks_to_them_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_we_work_hard_to_serv_img from '@/assets/images/brave.jpg';
import unit3_supp_a_school_radio_host_img from '@/assets/images/u2-voice.jpeg';
import unit3_supp_aerial_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_ci_ta_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_dictionary_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_es_tetra_ee_ee_ane_a_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_every_detail_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_exactly_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_feb_es_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_guidance_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_hi_we_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_i_above_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_kaastamafd_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_mer_eee_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_my_opinion_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_nea_e_years_of_speci_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_oe_satin_img from '@/assets/images/u4-good-at.jpeg';
import unit3_supp_se_er_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_se_in_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_se_mi_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_teacher_img from '@/assets/images/u4-lesson.jpg';
import unit3_supp_wip_nr_img from '@/assets/images/u4-textbook.jpg';
import unit3_supp_yours_img from '@/assets/images/u4-textbook.jpg';
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
      { id: 'u3-w1', type: 'word', category: 'core-word', english: 'country', translation: '国家', imageUrl: u3_w1_img, explanation: 'Nation.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-w1-syn', 
              english: "commonwealth", 
              translation: "近义词", 
              explanation: "the official name of some states in the United States (Massachusetts and Pennsylvania and Virginia and Kentucky) and associated territories (Puerto Rico)", 
              imageUrl: u3_w1_img,
              examples: [{ id: 'u3-w1-syn-ex', en: 'The commonwealth is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-w1-use', 
              english: "country", 
              translation: "用法", 
              explanation: "Practice using country.", 
              imageUrl: u3_w1_img,
              examples: [{ id: 'u3-w1-use-ex', en: 'Do you know country?', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u3-w2', type: 'word', category: 'core-word', english: 'world', translation: '世界', imageUrl: u3_w2_img, explanation: 'Earth.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-w2-syn', 
              english: "Earth", 
              translation: "近义词", 
              explanation: "the 3rd planet from the sun; the planet we live on", 
              imageUrl: u3_w2_img,
              examples: [{ id: 'u3-w2-syn-ex', en: 'The Earth is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-w2-use', 
              english: "world", 
              translation: "用法", 
              explanation: "Practice using world.", 
              imageUrl: u3_w2_img,
              examples: [{ id: 'u3-w2-use-ex', en: 'I like world.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u3-w3', type: 'word', category: 'core-word', english: 'different', translation: '不同的', imageUrl: u3_w3_img, explanation: 'Not the same.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-w3-syn', 
              english: "dissimilar", 
              translation: "近义词", 
              explanation: "not similar", 
              imageUrl: u3_w3_img,
              examples: [{ id: 'u3-w3-syn-ex', en: 'The dissimilar is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-w3-use', 
              english: "different", 
              translation: "用法", 
              explanation: "Practice using different.", 
              imageUrl: u3_w3_img,
              examples: [{ id: 'u3-w3-use-ex', en: 'This is a different.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u3-w14', type: 'word', category: 'core-word', english: 'capital', translation: '首都', imageUrl: u3_w14_img, explanation: 'Main city.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-w14-syn', 
              english: "chapiter", 
              translation: "近义词", 
              explanation: "the upper part of a column that supports the entablature", 
              imageUrl: u3_w14_img,
              examples: [{ id: 'u3-w14-syn-ex', en: 'This is a chapiter.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-w14-use', 
              english: "capital", 
              translation: "用法", 
              explanation: "Practice using capital.", 
              imageUrl: u3_w14_img,
              examples: [{ id: 'u3-w14-use-ex', en: 'Do you know capital?', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u3-w16', type: 'word', category: 'core-word', english: 'map', translation: '地图', imageUrl: u3_w16_img, explanation: 'Drawing of earth.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-w16-syn', 
              english: "mathematical function", 
              translation: "近义词", 
              explanation: "Meaning of mathematical function", 
              imageUrl: u3_w16_img,
              examples: [{ id: 'u3-w16-syn-ex', en: 'This is a mathematical function.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-w16-use', 
              english: "map", 
              translation: "用法", 
              explanation: "Practice using map.", 
              imageUrl: u3_w16_img,
              examples: [{ id: 'u3-w16-use-ex', en: 'I like map.', zh: 'Translation' }]
            } 
          }
] }
    ]
  },
  {
    id: 'u3-extended-words',
    title: '2. 拓展词汇 (Extended Vocabulary)',
    items: [
      { id: 'u3-ew1', type: 'word', category: 'extended-word', english: 'flag', translation: '国旗', imageUrl: u3_ew1_img, explanation: 'Symbol of country.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-ew1-syn', 
              english: "swag", 
              translation: "近义词", 
              explanation: "valuable goods", 
              imageUrl: u3_ew1_img,
              examples: [{ id: 'u3-ew1-syn-ex', en: 'This is a swag.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-ew1-use', 
              english: "flag", 
              translation: "用法", 
              explanation: "Practice using flag.", 
              imageUrl: u3_ew1_img,
              examples: [{ id: 'u3-ew1-use-ex', en: 'The flag is interesting.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u3-ew2', type: 'word', category: 'extended-word', english: 'language', translation: '语言', imageUrl: u3_ew2_img, explanation: 'Communication system.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-ew2-syn', 
              english: "linguistic communication", 
              translation: "近义词", 
              explanation: "Meaning of linguistic communication", 
              imageUrl: u3_ew2_img,
              examples: [{ id: 'u3-ew2-syn-ex', en: 'The linguistic communication is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-ew2-use', 
              english: "language", 
              translation: "用法", 
              explanation: "Practice using language.", 
              imageUrl: u3_ew2_img,
              examples: [{ id: 'u3-ew2-use-ex', en: 'The language is interesting.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u3-ew3', type: 'word', category: 'extended-word', english: 'famous', translation: '著名的', imageUrl: u3_ew3_img, explanation: 'Well known.', examples: [], extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-ew3-syn', 
              english: "far-famed", 
              translation: "近义词", 
              explanation: "widely known and esteemed", 
              imageUrl: u3_ew3_img,
              examples: [{ id: 'u3-ew3-syn-ex', en: 'The far-famed is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-ew3-use', 
              english: "famous", 
              translation: "用法", 
              explanation: "Practice using famous.", 
              imageUrl: u3_ew3_img,
              examples: [{ id: 'u3-ew3-use-ex', en: 'I like famous.', zh: 'Translation' }]
            } 
          }
] }
    ]
  },
  {
    id: 'u3-core-phrases',
    title: '3. 核心词组 (Core Phrases)',
    items: [
      { id: 'u3-p1', type: 'phrase', category: 'core-phrase', english: 'be from', translation: '来自', imageUrl: u3_p1_img, explanation: 'Origin.', examples: [], extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-p1-use', 
              english: "be from", 
              translation: "用法", 
              explanation: "Practice using be from.", 
              imageUrl: u3_p1_img,
              examples: [{ id: 'u3-p1-use-ex', en: 'I like be from.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u3-p2', type: 'phrase', category: 'core-phrase', english: 'in the north of', translation: '在...北部', imageUrl: u3_p2_img, explanation: 'Direction.', examples: [], extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-p2-use', 
              english: "in the north of", 
              translation: "用法", 
              explanation: "Practice using in the north of.", 
              imageUrl: u3_p2_img,
              examples: [{ id: 'u3-p2-use-ex', en: 'Do you know in the north of?', zh: 'Translation' }]
            } 
          }
] }
    ]
  },
  {
    id: 'u3-key-sentences',
    title: '4. 重点句子 (Key Sentences)',
    items: [
      { id: 'u3-s1', type: 'sentence', category: 'key-sentence', english: 'Where are you from?', translation: '你来自哪里？', imageUrl: u3_s1_img, explanation: 'Asking origin.', examples: [], extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-s1-use', 
              english: "Where are you from?", 
              translation: "用法", 
              explanation: "Practice using Where are you from?.", 
              imageUrl: u3_s1_img,
              examples: [{ id: 'u3-s1-use-ex', en: 'This is a Where are you from?.', zh: 'Translation' }]
            } 
          }
] },
      { id: 'u3-s2', type: 'sentence', category: 'key-sentence', english: 'Beijing is the capital of China.', translation: '北京是中国的首都。', imageUrl: u3_s2_img, explanation: 'Fact.', examples: [], extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-s2-use', 
              english: "Beijing is the capital of China.", 
              translation: "用法", 
              explanation: "Practice using Beijing is the capital of China..", 
              imageUrl: u3_s2_img,
              examples: [{ id: 'u3-s2-use-ex', en: 'I like Beijing is the capital of China..', zh: 'Translation' }]
            } 
          }
] }
    ]
  }

  ,{
    id: 'u3-supplementary',
    title: '5. 补充内容 (Supplementary)',
    items: [
      {
        id: 'u3-supp-1',
        type: 'word',
        category: 'supplementary',
        english: "A Unit",
        translation: "翻译待补充",
        explanation: "Definition or usage of A Unit",
        imageUrl: unit3_supp_a_unit_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-1-ex1', en: 'A Unit', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-1-ex1-use', 
              english: "A Unit", 
              translation: "用法", 
              explanation: "Practice using A Unit.", 
              imageUrl: unit3_supp_a_unit_img,
              examples: [{ id: 'u3-supp-1-ex1-use-ex', en: 'This is a A Unit.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-2',
        type: 'sentence',
        category: 'supplementary',
        english: "Being a cook is like being a scientist in some way",
        translation: "翻译待补充",
        explanation: "Definition or usage of Being a cook is like being a scientist in some way",
        imageUrl: unit3_supp_being_a_cook_is_like_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-2-ex1', en: 'Being a cook is like being a scientist in some way', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-2-ex1-use', 
              english: "Being a cook is like being a scientist in some way", 
              translation: "用法", 
              explanation: "Practice using Being a cook is like being a scientist in some way.", 
              imageUrl: unit3_supp_being_a_cook_is_like_img,
              examples: [{ id: 'u3-supp-2-ex1-use-ex', en: 'This is a Being a cook is like being a scientist in some way.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-3',
        type: 'word',
        category: 'supplementary',
        english: "ET es",
        translation: "翻译待补充",
        explanation: "Definition or usage of ET es",
        imageUrl: unit3_supp_et_es_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-3-ex1', en: 'ET es', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-3-ex1-use', 
              english: "ET es", 
              translation: "用法", 
              explanation: "Practice using ET es.", 
              imageUrl: unit3_supp_et_es_img,
              examples: [{ id: 'u3-supp-3-ex1-use-ex', en: 'The ET es is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-4',
        type: 'word',
        category: 'supplementary',
        english: "I set",
        translation: "摄影场指定的",
        explanation: "Definition or usage of I set",
        imageUrl: unit3_supp_i_set_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-4-ex1', en: 'I set', zh: '摄影场指定的' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-4-ex1-use', 
              english: "I set", 
              translation: "用法", 
              explanation: "Practice using I set.", 
              imageUrl: unit3_supp_i_set_img,
              examples: [{ id: 'u3-supp-4-ex1-use-ex', en: 'I like I set.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-5',
        type: 'sentence',
        category: 'supplementary',
        english: "I spent the whole afterncon remembering the new lines",
        translation: "我花了一整个下午的时间记新台词并为",
        explanation: "Definition or usage of I spent the whole afterncon remembering the new lines",
        imageUrl: unit3_supp_i_spent_the_whole_af_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-5-ex1', en: 'I spent the whole afterncon remembering the new lines', zh: '我花了一整个下午的时间记新台词并为' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-5-ex1-use', 
              english: "I spent the whole afterncon remembering the new lines", 
              translation: "用法", 
              explanation: "Practice using I spent the whole afterncon remembering the new lines.", 
              imageUrl: unit3_supp_i_spent_the_whole_af_img,
              examples: [{ id: 'u3-supp-5-ex1-use-ex', en: 'Do you know I spent the whole afterncon remembering the new lines?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-6',
        type: 'word',
        category: 'supplementary',
        english: "Let ae",
        translation: "翻译待补充",
        explanation: "Definition or usage of Let ae",
        imageUrl: unit3_supp_let_ae_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-6-ex1', en: 'Let ae', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-6-ex1-use', 
              english: "Let ae", 
              translation: "用法", 
              explanation: "Practice using Let ae.", 
              imageUrl: unit3_supp_let_ae_img,
              examples: [{ id: 'u3-supp-6-ex1-use-ex', en: 'I like Let ae.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-7',
        type: 'word',
        category: 'supplementary',
        english: "Lin",
        translation: "翻译待补充",
        explanation: "Definition or usage of Lin",
        imageUrl: unit3_supp_lin_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-7-ex1', en: 'Lin', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-supp-7-ex1-syn', 
              english: "Maya Lin", 
              translation: "近义词", 
              explanation: "Meaning of Maya Lin", 
              imageUrl: unit3_supp_lin_img,
              examples: [{ id: 'u3-supp-7-ex1-syn-ex', en: 'Do you know Maya Lin?', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-7-ex1-use', 
              english: "Lin", 
              translation: "用法", 
              explanation: "Practice using Lin.", 
              imageUrl: unit3_supp_lin_img,
              examples: [{ id: 'u3-supp-7-ex1-use-ex', en: 'Do you know Lin?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-8',
        type: 'word',
        category: 'supplementary',
        english: "Lis",
        translation: "翻译待补充",
        explanation: "Definition or usage of Lis",
        imageUrl: unit3_supp_lis_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-8-ex1', en: 'Lis', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-supp-8-ex1-syn', 
              english: "Li", 
              translation: "近义词", 
              explanation: "a soft silver-white univalent element of the alkali metal group; the lightest metal known; occurs in several minerals", 
              imageUrl: unit3_supp_lis_img,
              examples: [{ id: 'u3-supp-8-ex1-syn-ex', en: 'I like Li.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-8-ex1-use', 
              english: "Lis", 
              translation: "用法", 
              explanation: "Practice using Lis.", 
              imageUrl: unit3_supp_lis_img,
              examples: [{ id: 'u3-supp-8-ex1-use-ex', en: 'This is a Lis.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-9',
        type: 'word',
        category: 'supplementary',
        english: "POLES seh",
        translation: "翻译待补充",
        explanation: "Definition or usage of POLES seh",
        imageUrl: unit3_supp_poles_seh_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-9-ex1', en: 'POLES seh', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-9-ex1-use', 
              english: "POLES seh", 
              translation: "用法", 
              explanation: "Practice using POLES seh.", 
              imageUrl: unit3_supp_poles_seh_img,
              examples: [{ id: 'u3-supp-9-ex1-use-ex', en: 'Do you know POLES seh?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-10',
        type: 'word',
        category: 'supplementary',
        english: "Pa ae a",
        translation: "翻译待补充",
        explanation: "Definition or usage of Pa ae a",
        imageUrl: unit3_supp_pa_ae_a_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-10-ex1', en: 'Pa ae a', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-10-ex1-use', 
              english: "Pa ae a", 
              translation: "用法", 
              explanation: "Practice using Pa ae a.", 
              imageUrl: unit3_supp_pa_ae_a_img,
              examples: [{ id: 'u3-supp-10-ex1-use-ex', en: 'Do you know Pa ae a?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-11',
        type: 'sentence',
        category: 'supplementary',
        english: "Teachers give lively and interesting lessons and help us",
        translation: "老师上课生动有趣还会帮助我们解决",
        explanation: "Definition or usage of Teachers give lively and interesting lessons and help us",
        imageUrl: unit3_supp_teachers_give_lively_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-11-ex1', en: 'Teachers give lively and interesting lessons and help us', zh: '老师上课生动有趣还会帮助我们解决' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-11-ex1-use', 
              english: "Teachers give lively and interesting lessons and help us", 
              translation: "用法", 
              explanation: "Practice using Teachers give lively and interesting lessons and help us.", 
              imageUrl: unit3_supp_teachers_give_lively_img,
              examples: [{ id: 'u3-supp-11-ex1-use-ex', en: 'Do you know Teachers give lively and interesting lessons and help us?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-12',
        type: 'word',
        category: 'supplementary',
        english: "Test for Unit",
        translation: "翻译待补充",
        explanation: "Definition or usage of Test for Unit",
        imageUrl: unit3_supp_test_for_unit_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-12-ex1', en: 'Test for Unit', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-12-ex1-use', 
              english: "Test for Unit", 
              translation: "用法", 
              explanation: "Practice using Test for Unit.", 
              imageUrl: unit3_supp_test_for_unit_img,
              examples: [{ id: 'u3-supp-12-ex1-use-ex', en: 'The Test for Unit is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-13',
        type: 'word',
        category: 'supplementary',
        english: "Thanks to them",
        translation: "翻译待补充",
        explanation: "Definition or usage of Thanks to them",
        imageUrl: unit3_supp_thanks_to_them_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-13-ex1', en: 'Thanks to them', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-13-ex1-use', 
              english: "Thanks to them", 
              translation: "用法", 
              explanation: "Practice using Thanks to them.", 
              imageUrl: unit3_supp_thanks_to_them_img,
              examples: [{ id: 'u3-supp-13-ex1-use-ex', en: 'The Thanks to them is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-14',
        type: 'sentence',
        category: 'supplementary',
        english: "We work hard to serve people and get back their trust",
        translation: "我们努力服务他人然后获得他们的信",
        explanation: "Definition or usage of We work hard to serve people and get back their trust",
        imageUrl: unit3_supp_we_work_hard_to_serv_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-14-ex1', en: 'We work hard to serve people and get back their trust', zh: '我们努力服务他人然后获得他们的信' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-14-ex1-use', 
              english: "We work hard to serve people and get back their trust", 
              translation: "用法", 
              explanation: "Practice using We work hard to serve people and get back their trust.", 
              imageUrl: unit3_supp_we_work_hard_to_serv_img,
              examples: [{ id: 'u3-supp-14-ex1-use-ex', en: 'The We work hard to serve people and get back their trust is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-15',
        type: 'word',
        category: 'supplementary',
        english: "a school radio host",
        translation: "露天影院",
        explanation: "Definition or usage of a school radio host",
        imageUrl: unit3_supp_a_school_radio_host_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-15-ex1', en: 'a school radio host', zh: '露天影院' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-15-ex1-use', 
              english: "a school radio host", 
              translation: "用法", 
              explanation: "Practice using a school radio host.", 
              imageUrl: unit3_supp_a_school_radio_host_img,
              examples: [{ id: 'u3-supp-15-ex1-use-ex', en: 'This is a a school radio host.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-16',
        type: 'word',
        category: 'supplementary',
        english: "aerial",
        translation: "发送消息",
        explanation: "Definition or usage of aerial",
        imageUrl: unit3_supp_aerial_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-16-ex1', en: 'aerial', zh: '发送消息' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-supp-16-ex1-syn', 
              english: "transmitting aerial", 
              translation: "近义词", 
              explanation: "Meaning of transmitting aerial", 
              imageUrl: unit3_supp_aerial_img,
              examples: [{ id: 'u3-supp-16-ex1-syn-ex', en: 'The transmitting aerial is interesting.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-16-ex1-use', 
              english: "aerial", 
              translation: "用法", 
              explanation: "Practice using aerial.", 
              imageUrl: unit3_supp_aerial_img,
              examples: [{ id: 'u3-supp-16-ex1-use-ex', en: 'I like aerial.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-17',
        type: 'word',
        category: 'supplementary',
        english: "at\'Tomnita",
        translation: "翻译待补充",
        explanation: "Definition or usage of at\'Tomnita",
        imageUrl: undefined, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-17-ex1', en: 'at\'Tomnita', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-17-ex1-use', 
              english: "at", 
              translation: "用法", 
              explanation: "Practice using at.", 
              imageUrl: undefined,
              examples: [{ id: 'u3-supp-17-ex1-use-ex', en: 'Do you know at?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-18',
        type: 'word',
        category: 'supplementary',
        english: "ci Ta",
        translation: "翻译待补充",
        explanation: "Definition or usage of ci Ta",
        imageUrl: unit3_supp_ci_ta_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-18-ex1', en: 'ci Ta', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-18-ex1-use', 
              english: "ci Ta", 
              translation: "用法", 
              explanation: "Practice using ci Ta.", 
              imageUrl: unit3_supp_ci_ta_img,
              examples: [{ id: 'u3-supp-18-ex1-use-ex', en: 'The ci Ta is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-19',
        type: 'word',
        category: 'supplementary',
        english: "dictionary",
        translation: "词典字典",
        explanation: "Definition or usage of dictionary",
        imageUrl: unit3_supp_dictionary_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-19-ex1', en: 'dictionary', zh: '词典字典' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-supp-19-ex1-syn', 
              english: "lexicon", 
              translation: "近义词", 
              explanation: "a language user\'s knowledge of words", 
              imageUrl: unit3_supp_dictionary_img,
              examples: [{ id: 'u3-supp-19-ex1-syn-ex', en: 'I like lexicon.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-19-ex1-use', 
              english: "dictionary", 
              translation: "用法", 
              explanation: "Practice using dictionary.", 
              imageUrl: unit3_supp_dictionary_img,
              examples: [{ id: 'u3-supp-19-ex1-use-ex', en: 'Do you know dictionary?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-20',
        type: 'sentence',
        category: 'supplementary',
        english: "es tetra ee ee ane a re",
        translation: "翻译待补充",
        explanation: "Definition or usage of es tetra ee ee ane a re",
        imageUrl: unit3_supp_es_tetra_ee_ee_ane_a_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-20-ex1', en: 'es tetra ee ee ane a re', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-20-ex1-use', 
              english: "es tetra ee ee ane a re", 
              translation: "用法", 
              explanation: "Practice using es tetra ee ee ane a re.", 
              imageUrl: unit3_supp_es_tetra_ee_ee_ane_a_img,
              examples: [{ id: 'u3-supp-20-ex1-use-ex', en: 'The es tetra ee ee ane a re is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-21',
        type: 'word',
        category: 'supplementary',
        english: "every detail",
        translation: "翻译待补充",
        explanation: "Definition or usage of every detail",
        imageUrl: unit3_supp_every_detail_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-21-ex1', en: 'every detail', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-21-ex1-use', 
              english: "every detail", 
              translation: "用法", 
              explanation: "Practice using every detail.", 
              imageUrl: unit3_supp_every_detail_img,
              examples: [{ id: 'u3-supp-21-ex1-use-ex', en: 'I like every detail.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-22',
        type: 'word',
        category: 'supplementary',
        english: "exactly",
        translation: "翻译待补充",
        explanation: "Definition or usage of exactly",
        imageUrl: unit3_supp_exactly_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-22-ex1', en: 'exactly', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-supp-22-ex1-syn', 
              english: "precisely", 
              translation: "近义词", 
              explanation: "indicating exactness or preciseness", 
              imageUrl: unit3_supp_exactly_img,
              examples: [{ id: 'u3-supp-22-ex1-syn-ex', en: 'Do you know precisely?', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-22-ex1-use', 
              english: "exactly", 
              translation: "用法", 
              explanation: "Practice using exactly.", 
              imageUrl: unit3_supp_exactly_img,
              examples: [{ id: 'u3-supp-22-ex1-use-ex', en: 'This is a exactly.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-23',
        type: 'word',
        category: 'supplementary',
        english: "feb es",
        translation: "翻译待补充",
        explanation: "Definition or usage of feb es",
        imageUrl: unit3_supp_feb_es_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-23-ex1', en: 'feb es', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-23-ex1-use', 
              english: "feb es", 
              translation: "用法", 
              explanation: "Practice using feb es.", 
              imageUrl: unit3_supp_feb_es_img,
              examples: [{ id: 'u3-supp-23-ex1-use-ex', en: 'The feb es is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-24',
        type: 'word',
        category: 'supplementary',
        english: "guidance",
        translation: "指导",
        explanation: "Definition or usage of guidance",
        imageUrl: unit3_supp_guidance_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-24-ex1', en: 'guidance', zh: '指导' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-supp-24-ex1-syn', 
              english: "counsel", 
              translation: "近义词", 
              explanation: "a lawyer who pleads cases in court", 
              imageUrl: unit3_supp_guidance_img,
              examples: [{ id: 'u3-supp-24-ex1-syn-ex', en: 'I like counsel.', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-24-ex1-use', 
              english: "guidance", 
              translation: "用法", 
              explanation: "Practice using guidance.", 
              imageUrl: unit3_supp_guidance_img,
              examples: [{ id: 'u3-supp-24-ex1-use-ex', en: 'This is a guidance.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-25',
        type: 'word',
        category: 'supplementary',
        english: "hi We",
        translation: "翻译待补充",
        explanation: "Definition or usage of hi We",
        imageUrl: unit3_supp_hi_we_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-25-ex1', en: 'hi We', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-25-ex1-use', 
              english: "hi We", 
              translation: "用法", 
              explanation: "Practice using hi We.", 
              imageUrl: unit3_supp_hi_we_img,
              examples: [{ id: 'u3-supp-25-ex1-use-ex', en: 'I like hi We.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-26',
        type: 'word',
        category: 'supplementary',
        english: "i above",
        translation: "翻译待补充",
        explanation: "Definition or usage of i above",
        imageUrl: unit3_supp_i_above_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-26-ex1', en: 'i above', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-26-ex1-use', 
              english: "i above", 
              translation: "用法", 
              explanation: "Practice using i above.", 
              imageUrl: unit3_supp_i_above_img,
              examples: [{ id: 'u3-supp-26-ex1-use-ex', en: 'I like i above.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-27',
        type: 'word',
        category: 'supplementary',
        english: "kaAstamafD",
        translation: "翻译待补充",
        explanation: "Definition or usage of kaAstamafD",
        imageUrl: unit3_supp_kaastamafd_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-27-ex1', en: 'kaAstamafD', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-27-ex1-use', 
              english: "kaAstamafD", 
              translation: "用法", 
              explanation: "Practice using kaAstamafD.", 
              imageUrl: unit3_supp_kaastamafd_img,
              examples: [{ id: 'u3-supp-27-ex1-use-ex', en: 'I like kaAstamafD.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-28',
        type: 'word',
        category: 'supplementary',
        english: "mer eee",
        translation: "翻译待补充",
        explanation: "Definition or usage of mer eee",
        imageUrl: unit3_supp_mer_eee_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-28-ex1', en: 'mer eee', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-28-ex1-use', 
              english: "mer eee", 
              translation: "用法", 
              explanation: "Practice using mer eee.", 
              imageUrl: unit3_supp_mer_eee_img,
              examples: [{ id: 'u3-supp-28-ex1-use-ex', en: 'Do you know mer eee?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-29',
        type: 'word',
        category: 'supplementary',
        english: "my opinion",
        translation: "翻译待补充",
        explanation: "Definition or usage of my opinion",
        imageUrl: unit3_supp_my_opinion_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-29-ex1', en: 'my opinion', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-29-ex1-use', 
              english: "my opinion", 
              translation: "用法", 
              explanation: "Practice using my opinion.", 
              imageUrl: unit3_supp_my_opinion_img,
              examples: [{ id: 'u3-supp-29-ex1-use-ex', en: 'This is a my opinion.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-30',
        type: 'sentence',
        category: 'supplementary',
        english: "nea e years of special training",
        translation: "挨家挨户",
        explanation: "Definition or usage of nea e years of special training",
        imageUrl: unit3_supp_nea_e_years_of_speci_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-30-ex1', en: 'nea e years of special training', zh: '挨家挨户' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-30-ex1-use', 
              english: "nea e years of special training", 
              translation: "用法", 
              explanation: "Practice using nea e years of special training.", 
              imageUrl: unit3_supp_nea_e_years_of_speci_img,
              examples: [{ id: 'u3-supp-30-ex1-use-ex', en: 'The nea e years of special training is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-31',
        type: 'word',
        category: 'supplementary',
        english: "oe satin",
        translation: "翻译待补充",
        explanation: "Definition or usage of oe satin",
        imageUrl: unit3_supp_oe_satin_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-31-ex1', en: 'oe satin', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-31-ex1-use', 
              english: "oe satin", 
              translation: "用法", 
              explanation: "Practice using oe satin.", 
              imageUrl: unit3_supp_oe_satin_img,
              examples: [{ id: 'u3-supp-31-ex1-use-ex', en: 'I like oe satin.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-32',
        type: 'word',
        category: 'supplementary',
        english: "se ER",
        translation: "人",
        explanation: "Definition or usage of se ER",
        imageUrl: unit3_supp_se_er_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-32-ex1', en: 'se ER', zh: '人' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-32-ex1-use', 
              english: "se ER", 
              translation: "用法", 
              explanation: "Practice using se ER.", 
              imageUrl: unit3_supp_se_er_img,
              examples: [{ id: 'u3-supp-32-ex1-use-ex', en: 'Do you know se ER?', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-33',
        type: 'word',
        category: 'supplementary',
        english: "se IN",
        translation: "翻译待补充",
        explanation: "Definition or usage of se IN",
        imageUrl: unit3_supp_se_in_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-33-ex1', en: 'se IN', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-33-ex1-use', 
              english: "se IN", 
              translation: "用法", 
              explanation: "Practice using se IN.", 
              imageUrl: unit3_supp_se_in_img,
              examples: [{ id: 'u3-supp-33-ex1-use-ex', en: 'The se IN is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-34',
        type: 'word',
        category: 'supplementary',
        english: "se mi",
        translation: "翻译待补充",
        explanation: "Definition or usage of se mi",
        imageUrl: unit3_supp_se_mi_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-34-ex1', en: 'se mi', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-34-ex1-use', 
              english: "se mi", 
              translation: "用法", 
              explanation: "Practice using se mi.", 
              imageUrl: unit3_supp_se_mi_img,
              examples: [{ id: 'u3-supp-34-ex1-use-ex', en: 'The se mi is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-35',
        type: 'word',
        category: 'supplementary',
        english: "teacher",
        translation: "翻译待补充",
        explanation: "Definition or usage of teacher",
        imageUrl: unit3_supp_teacher_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-35-ex1', en: 'teacher', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Synonym', 
            data: { 
              id: 'u3-supp-35-ex1-syn', 
              english: "instructor", 
              translation: "近义词", 
              explanation: "a person whose occupation is teaching", 
              imageUrl: unit3_supp_teacher_img,
              examples: [{ id: 'u3-supp-35-ex1-syn-ex', en: 'Do you know instructor?', zh: 'Translation' }]
            } 
          },
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-35-ex1-use', 
              english: "teacher", 
              translation: "用法", 
              explanation: "Practice using teacher.", 
              imageUrl: unit3_supp_teacher_img,
              examples: [{ id: 'u3-supp-35-ex1-use-ex', en: 'I like teacher.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-36',
        type: 'word',
        category: 'supplementary',
        english: "wip NR",
        translation: "翻译待补充",
        explanation: "Definition or usage of wip NR",
        imageUrl: unit3_supp_wip_nr_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-36-ex1', en: 'wip NR', zh: '翻译待补充' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-36-ex1-use', 
              english: "wip NR", 
              translation: "用法", 
              explanation: "Practice using wip NR.", 
              imageUrl: unit3_supp_wip_nr_img,
              examples: [{ id: 'u3-supp-36-ex1-use-ex', en: 'The wip NR is interesting.', zh: 'Translation' }]
            } 
          }
]
      },
      {
        id: 'u3-supp-37',
        type: 'word',
        category: 'supplementary',
        english: "yours",
        translation: "您的你的你们的",
        explanation: "Definition or usage of yours",
        imageUrl: unit3_supp_yours_img, // Will be fixed in image task
        examples: [
             { id: 'u3-supp-37-ex1', en: 'yours', zh: '您的你的你们的' } 
        ],
        extensions: [
{ 
            label: 'Usage', 
            data: { 
              id: 'u3-supp-37-ex1-use', 
              english: "yours", 
              translation: "用法", 
              explanation: "Practice using yours.", 
              imageUrl: unit3_supp_yours_img,
              examples: [{ id: 'u3-supp-37-ex1-use-ex', en: 'The yours is interesting.', zh: 'Translation' }]
            } 
          }
]
      }
    ]
  }
];
