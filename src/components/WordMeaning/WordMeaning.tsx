import { useContext } from 'react';
import { fetchWord } from '../../app/api';
import { Meaning } from '../../types/Word';
import './WordMeaning.scss';
import { WordContext } from '../../context/WordContext';

interface WordMeaningProps {
  meaning: Meaning;
}

export const WordMeaning: React.FC<WordMeaningProps> = ({ meaning }) => {
  const { setWord } = useContext(WordContext);

  const onSynonymClick = (synonym: string) => {
    fetchWord(synonym).then(setWord);
  };

  return (
    <div className="meaning">
      <div className="meaning__part">
        {meaning.partOfSpeech}
        <div className="meaning__divider"></div>
      </div>
      <p className="meaning__title">Meaning</p>
      <ul className="meaning__definitions">
        {meaning.definitions.map(definition => (
          <li className="meaning__definition" key={definition.definition}>
            {definition.definition}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <div className="meaning__synonyms">
          <p className="meaning__title">Synonyms</p>
          <ul className="meaning__synonyms-list">
            {meaning.synonyms.map(synonym => (
              <li
                className="meaning__synonym"
                key={synonym}
                onClick={() => onSynonymClick(synonym)}
              >
                {synonym}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
