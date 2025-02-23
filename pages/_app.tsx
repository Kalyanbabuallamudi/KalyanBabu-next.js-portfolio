// pages/_app.tsx
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../src/styles/globals.css';
import Button from '../src/app/components/ui/button';
import React, { useState, useEffect } from 'react';

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
      {/* Buttons at the top */}
      <div className="button-container">
        <Button onClick={handlePlay} variant="primary" disabled={isPlaying}>
          Play
        </Button>
        <Button onClick={handlePause} variant="destructive" disabled={!isPlaying}>
          Stop
        </Button>
      </div>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;