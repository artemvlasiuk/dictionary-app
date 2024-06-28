import { FormEvent, useState } from 'react';
import './SearchInput.scss';
import { fetchWord } from '../../app/api';
import { Word } from '../../types/Word';

interface SearchInputProps {
  setWord: (word: Word | null) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ setWord }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError(true);
    }

    if (trimmedQuery) {
      setQuery(trimmedQuery);

      fetchWord(trimmedQuery).then(setWord);

      setError(false);
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search for any word…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="search__icon"></div>
      </form>
      {error && <div className="search__error">Whoops, can’t be empty…</div>}
    </>
  );
};
