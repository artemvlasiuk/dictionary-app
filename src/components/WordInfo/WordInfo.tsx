import './WordInfo.scss';
import { Word } from '../../types/Word';
import { AudioPlayer } from '../AudioPlayer';
import { WordMeaning } from '../WordMeaning';

interface WordInfoProps {
  word: Word | null;
  setWord: (word: Word | null) => void;
}

export const WordInfo: React.FC<WordInfoProps> = ({ word, setWord }) => {
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
        <WordMeaning
          key={meaning.partOfSpeech}
          meaning={meaning}
          setWord={setWord}
        />
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
