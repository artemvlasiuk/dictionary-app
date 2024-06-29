import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import './SearchInput.scss';
import { fetchWord } from '../../app/api';
import cn from 'classnames';
import { WordContext } from '../context/WordContext';

export const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const context = useContext(WordContext);
  const setWord = context ? context.setWord : () => {};

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError(true);

      return;
    } else {
      setQuery(trimmedQuery);

      fetchWord(trimmedQuery).then(setWord);

      setError(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <>
      <form
        className={cn('search', { 'search--error': error })}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          placeholder="Search for any word…"
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="search__icon"></div>
      </form>
      {error && <div className="search__error">Whoops, can’t be empty…</div>}
    </>
  );
};
