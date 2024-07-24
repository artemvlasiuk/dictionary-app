import { useContext } from 'react';
import './App.scss';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput/SearchInput';
import { WordInfo } from './components/WordInfo';
import { WordContext } from './context/WordContext';
import { NotFound } from './components/NotFound';
import { Loader } from './components/Loader';

export const App = () => {
  const { word, wordNotFound, loading } = useContext(WordContext);

  return (
    <Container>
      <Header />
      <SearchInput />
      {word && <WordInfo />}
      {wordNotFound && !word && <NotFound />}
      {loading && <Loader />}
    </Container>
  );
};
