export interface Example {
  id: string;
  en: string;
  zh: string;
}

export interface Extension {
  label: string;
  data: {
    id: string;
    english: string;
    translation: string;
    explanation?: string;
    imageUrl?: string;
    examples?: Example[];
  };
}

export interface KnowledgePoint {
  id: string;
  type: 'word' | 'phrase' | 'sentence';
  category: 'core-word' | 'extended-word' | 'core-phrase' | 'key-sentence';
  english: string;
  phonetic?: string;
  translation: string;
  partOfSpeech?: string;
  explanation: string;
  imageUrl?: string;
  examples: Example[];
  extensions: Extension[];
}

export interface Section {
  id: string;
  title: string;
  items: KnowledgePoint[];
}
