import React, { useEffect, useState } from 'react';
import '../../styles/globals.css'; // Ensure the CSS file is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioInstance = new Audio('/Portfolio-Kalyan Babu.mp3');
    audioInstance.loop = true;
    audioInstance.volume = 0.1; // Set initial volume
    setAudio(audioInstance);

    // Start playing the audio directly
    audioInstance.play().then(() => setIsPlaying(true)).catch((error) => {
      console.error("Error playing audio: ", error);
    });

    // Cleanup on unmount
    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    };
  }, []);

  const handlePlay = () => {
    if (audio) {
      audio.play().then(() => setIsPlaying(true)).catch((error) => {
        console.error("Error playing audio: ", error);
      });
    }
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* Icons for controlling playback */}
      <div className="button-container flex space-x-4">
        <FontAwesomeIcon
          icon={faPlay}
          className={`text-blue-500 text-3xl cursor-pointer ${isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePlay}
        />
        <FontAwesomeIcon
          icon={faPause}
          className={`text-red-500 text-3xl cursor-pointer ${!isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePause}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
