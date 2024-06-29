import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Word } from '../types/Word';

interface WordContextType {
  word: Word | null;
  setWord: Dispatch<SetStateAction<Word | null>>;
  wordNotFound: boolean;
  setWordNotFound: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const WordContext = createContext<WordContextType | null>(null);

export const WordProvider = ({ children }: { children: React.ReactNode }) => {
  const [word, setWord] = useState<Word | null>(null);
  const [wordNotFound, setWordNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
        wordNotFound,
        setWordNotFound,
        loading,
        setLoading,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
