import React, { useEffect } from 'react';

const MusicPlayer = () => {
  useEffect(() => {
    const audio = new Audio('/your-music-file.mp3');
    audio.loop = true;
    audio.play();
  }, []);

  return null;
};

export default MusicPlayer;
