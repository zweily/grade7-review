import { unit1Data } from './unit1';
import { unit2Data } from './unit2';
import { unit3Data } from './unit3';
import { unit4Data } from './unit4';
import { unit5Data } from './unit5';
import { unit6Data } from './unit6';
import type { Section } from '../types';

export interface Unit {
  id: string;
  title: string;
  description: string;
  data: Section[];
}

export const units: Unit[] = [
  {
    id: 'u1',
    title: 'Unit 1: Trying new things',
    description: 'Words and expressions about trying new activities.',
    data: unit1Data
  },
  {
    id: 'u2',
    title: 'Unit 2: Strong mind',
    description: 'Vocabulary related to personality and mental strength.',
    data: unit2Data
  },
  {
    id: 'u3',
    title: 'Unit 3: Friends from other countries',
    description: 'Countries, capitals, and cultural exchanges.',
    data: unit3Data
  },
  {
    id: 'u4',
    title: 'Unit 4: School life',
    description: 'Subjects, schedules, and daily school routines.',
    data: unit4Data
  },
  {
    id: 'u5',
    title: 'Unit 5: Films',
    description: 'Movie genres, cinemas, and entertainment.',
    data: unit5Data
  },
  {
    id: 'u6',
    title: 'Unit 6: Mountains and rivers',
    description: 'Geography, natural scenery, and travel experiences.',
    data: unit6Data
  }
];
