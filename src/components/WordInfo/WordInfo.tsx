import './WordInfo.scss';
import { Word } from '../../types/Word';
import { AudioPlayer } from '../AudioPlayer';
import { WordMeaning } from '../WordMeaning';

interface WordInfoProps {
  word: Word | null;
}

export const WordInfo: React.FC<WordInfoProps> = ({ word }) => {
  const wordToShow = word?.[0];

  return (
    <div className="word">
      <div className="word__main">
        <div className="word__main-text">
          <div className="word__main-word">{wordToShow?.word}</div>
          <div className="word__main-phonetic">{wordToShow?.phonetic}</div>
        </div>
        <AudioPlayer audio={wordToShow?.phonetics[0]?.audio} />
      </div>

      {wordToShow?.meanings.map(meaning => (
        <WordMeaning key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <div className="word__divider"></div>
      <div className="word__source">
        Source
        <a>{wordToShow?.sourceUrls[0]}</a>
      </div>
    </div>
  );
};
