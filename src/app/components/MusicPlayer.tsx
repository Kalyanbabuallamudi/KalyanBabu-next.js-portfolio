import React, { useEffect, useState } from 'react';
import '../../styles/globals.css'; // Ensure the CSS file is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audioInstance = new Audio('/Portfolio-Kalyan Babu.mp3');
      audioInstance.loop = true;
      audioInstance.volume = 0.9; // Set initial volume
      setAudio(audioInstance);

      // Auto-play on component mount
      audioInstance
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Error playing audio: ", error);
          setIsPlaying(false);
        });

      // Cleanup on unmount
      return () => {
        audioInstance.pause();
        audioInstance.currentTime = 0;
      };
    }
  }, []);

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error("Error playing audio: ", error);
          });
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* Single button for toggling play/stop */}
      <div
        className="button-container flex space-x-4 cursor-pointer"
        onClick={togglePlayPause}
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className={`text-3xl ${
            isPlaying ? 'text-green-500' : 'text-blue-500'
          }`}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
