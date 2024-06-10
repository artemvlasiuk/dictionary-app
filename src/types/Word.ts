interface Phonetic {
  text: string;
  audio?: string; // аудіо не завжди є, тому воно опціональне
}

interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

interface WordEntry {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
  sourceUrls: string[];
}

// Тип для масиву WordEntry
export type Word = WordEntry[];
