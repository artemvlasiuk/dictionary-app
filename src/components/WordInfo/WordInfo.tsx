import './WordInfo.scss';
import { AudioPlayer } from '../AudioPlayer';
import { WordMeaning } from '../WordMeaning';
import { useContext } from 'react';
import { WordContext } from '../context/WordContext';

export const WordInfo: React.FC = () => {
  const context = useContext(WordContext);
  const word = context ? context.word : null;
  const wordToShow = word?.[0];
  const audioObject = wordToShow?.phonetics.find(
    phonetic => phonetic.audio !== '',
  );

  return (
    <div className="word">
      <div className="word__main">
        <div className="word__main-text">
          <div className="word__main-word">{wordToShow?.word}</div>
          <div className="word__main-phonetic">{wordToShow?.phonetic}</div>
        </div>
        <AudioPlayer audio={audioObject?.audio} />
      </div>

      {wordToShow?.meanings.map(meaning => (
        <WordMeaning key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <div className="word__divider"></div>
      <div className="word__source">
        Source
        <a href={wordToShow?.sourceUrls[0]} target="_blank" rel="noreferrer">
          {wordToShow?.sourceUrls[0]}
        </a>
      </div>
    </div>
  );
};
