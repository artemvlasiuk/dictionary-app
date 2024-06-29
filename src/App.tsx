import { useContext } from 'react';
import './App.scss';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { WordInfo } from './components/WordInfo';
import { WordContext } from './components/context/WordContext';

export const App = () => {
  const context = useContext(WordContext);
  const word = context ? context.word : null;

  return (
    <Container>
      <Header />
      <SearchInput />
      {word && <WordInfo />}
    </Container>
  );
};
