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

const initialValue: WordContextType = {
  word: null,
  setWord: () => {},
  wordNotFound: false,
  setWordNotFound: () => {},
  loading: false,
  setLoading: () => {},
};

export const WordContext = createContext<WordContextType>(initialValue);

export const WordProvider = ({ children }: { children: React.ReactNode }) => {
  const [word, setWord] = useState<Word | null>(null);
  const [wordNotFound, setWordNotFound] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
