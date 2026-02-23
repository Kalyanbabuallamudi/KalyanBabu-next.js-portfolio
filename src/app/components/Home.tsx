import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../../styles/globals.css';
import { texts } from '@/data/scripts';


const HomeSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseDuration = 1500;

    const typeText = () => {
      let charIndex = 0;
      setDisplayedText('');

      typingRef.current = setInterval(() => {
        setDisplayedText((prev) => {
          const text = texts[currentTextIndex];
          if (charIndex < text.length) {
            charIndex += 1;
            return text.slice(0, charIndex);
          } else {
            clearInterval(typingRef.current as NodeJS.Timeout);
            typingRef.current = setTimeout(() => {
              setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
              typeText();
            }, pauseDuration);
            return text;
          }
        });
      }, typingSpeed);
    };

    typeText();

    return () => clearInterval(typingRef.current as NodeJS.Timeout);
  }, [currentTextIndex]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
        <motion.img
          src="/myphoto.jpg"
          alt="Kalyan Babu"
          className="w-40 h-40 rounded-full shadow-lg mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-heading text-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </motion.h1>
        <p className="text-lg md:text-xl text-neutral max-w-2xl">
          Welcome to my portfolio! I am a Java Full Stack Developer passionate about building scalable and robust applications.
        </p>
        <div className="flex mt-6 space-x-4">
          <a
            href="https://github.com/Kalyanbabuallamudi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent"
            title="GitHub Profile"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/kalyan-babu-a4b574199"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
