import { useEffect, useRef, useState } from 'react';

type AudioPlayerProps = {
  src: string;
  isAutoPlay: boolean;
};

function AudioPlayer(props: AudioPlayerProps) {
  const {src, isAutoPlay} = props;

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(isAutoPlay);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let isAudioPlayerMounted = true;

    if (audioRef.current === null) {
      return;
    }

    audioRef.current.addEventListener('loadeddata', () => {
      if (isAudioPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (isPlaying) {
      audioRef.current.play();
      return;
    }

    audioRef.current.pause();

    return () => {
      isAudioPlayerMounted = false;
    };
  }, [isPlaying]);

  return (
    <>
      <button
        className="track__button track__button--play"
        type="button"
        disabled={isLoading}
        onClick={() => setIsPlaying(!isPlaying)}
      />

      <div className="track__status">
        <audio src={src} ref={audioRef}></audio>
      </div>
    </>
  );
}

export default AudioPlayer;
