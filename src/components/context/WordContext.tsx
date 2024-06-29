import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Word } from '../../types/Word';

interface WordContextType {
  word: Word | null;
  setWord: Dispatch<SetStateAction<Word | null>>;
}

export const WordContext = createContext<WordContextType | null>(null);

export const WordProvider = ({ children }: { children: React.ReactNode }) => {
  const [word, setWord] = useState<Word | null>(null);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};
