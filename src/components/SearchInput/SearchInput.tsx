import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import './SearchInput.scss';
import { fetchWord } from '../../app/api';
import cn from 'classnames';
import { WordContext } from '../../context/WordContext';

export const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const { setWord, setWordNotFound, setLoading } = useContext(WordContext);

  /* const setWord = context ? context.setWord : () => {};

  const setWordNotFound = context ? context.setWordNotFound : () => {};

  const setLoading = context ? context.setLoading : () => {}; */

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setError(true);

      return;
    } else {
      setQuery(trimmedQuery);

      fetchWord(trimmedQuery)
        .then(data => {
          setLoading(true);

          if (data.length > 0) {
            setWord(data);
          } else {
            setWord(null);
            setWordNotFound(true);
          }
        })
        .finally(() => setLoading(false));

      setError(false);
    }
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);

    if (error) {
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
          onChange={handleInputChange}
        />
        <button type="submit" className="search__icon"></button>
      </form>
      {error && <div className="search__error">Whoops, can’t be empty…</div>}
    </>
  );
};
