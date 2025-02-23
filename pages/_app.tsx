// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../src/styles/globals.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

function MyApp({ Component, pageProps }: AppProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioInstance = new Audio('/Portfolio-Kalyan Babu.mp3');
    audioInstance.loop = true;
    audioInstance.volume = 0.1; // Set initial volume
    setAudio(audioInstance);
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
    <>
      {/* Icons at the top */}
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
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;