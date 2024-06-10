import { Word } from '../types/Word';

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const fetchWord = async (word: string): Promise<Word> => {
  const response = await fetch(`${BASE_URL}${word}`);
  const data = await response.json();

  return data;
};
