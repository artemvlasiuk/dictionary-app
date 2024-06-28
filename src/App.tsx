import { useState } from 'react';
import './App.scss';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { WordInfo } from './components/WordInfo';
import { Word } from './types/Word';

export const App = () => {
  const [word, setWord] = useState<Word | null>(null);

  return (
    <Container>
      <Header />
      <SearchInput setWord={setWord} />
      {word && <WordInfo word={word} setWord={setWord} />}
    </Container>
  );
};
