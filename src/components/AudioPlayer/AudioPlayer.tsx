import './AudioPlayer.scss';
import { useRef } from 'react';

interface AudioPlayerProps {
  audio?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio }) => {
  const audioRef = useRef(null);
  const handlePlay = () => {
    if (audioRef.current) {
      (audioRef.current as HTMLAudioElement).play();
    }
  };

  return (
    <button className="audio" onClick={handlePlay}>
      <audio src={audio} ref={audioRef}></audio>
    </button>
  );
};
