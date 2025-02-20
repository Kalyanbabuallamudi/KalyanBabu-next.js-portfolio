import React, { useEffect, useState } from 'react';

const MusicPlayer = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const audioInstance = new Audio('/Portfolio-Kalyan Babu.mp3');
      audioInstance.loop = true;
      setAudio(audioInstance);

      audioInstance.play(); // Automatically start playing the audio

      return () => {
        audioInstance.pause();
        audioInstance.currentTime = 0; // Reset audio on component unmount
      };
    }
  }, []);

  // Only render on the client to avoid hydration errors
  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-lg font-bold">Music Player</div>
      <div>Now playing: Portfolio-Kalyan Babu.mp3</div>
    </div>
  );
};

export default MusicPlayer;
