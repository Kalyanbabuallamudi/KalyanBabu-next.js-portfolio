import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import '../../styles/globals.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { texts, aboutMeSentences } from '@/data/scripts';

const HomeSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [aboutMeText, setAboutMeText] = useState('');
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const aboutMeTypingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseDuration = 1200;

    const typeText = () => {
      let charIndex = 0;
      setDisplayedText('');

      typingRef.current = setInterval(() => {
        setDisplayedText(prev => {
          const text = texts[currentTextIndex];
          if (charIndex < text.length) {
            charIndex += 1;
            return text.slice(0, charIndex);
          } else {
            clearInterval(typingRef.current as NodeJS.Timeout);
            typingRef.current = setTimeout(() => {
              setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
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

  useEffect(() => {
    const aboutMeTypingSpeed = 70;
    const aboutMePauseDuration = 2000;

    const typeAboutMeSentence = () => {
      let charIndex = 0;
      setAboutMeText('');

      aboutMeTypingRef.current = setInterval(() => {
        setAboutMeText(prev => {
          const sentence = aboutMeSentences[currentSentenceIndex];
          if (charIndex < sentence.length) {
            charIndex += 1;
            return sentence.slice(0, charIndex);
          } else {
            clearInterval(aboutMeTypingRef.current as NodeJS.Timeout);
            aboutMeTypingRef.current = setTimeout(() => {
              setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % aboutMeSentences.length);
              typeAboutMeSentence();
            }, aboutMePauseDuration);
            return sentence;
          }
        });
      }, aboutMeTypingSpeed);
    };

    typeAboutMeSentence();

    return () => clearInterval(aboutMeTypingRef.current as NodeJS.Timeout);
  }, [currentSentenceIndex]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section id="home" className="relative h-screen flex items-center justify-center mt-16">
        <div className="relative z-10 flex flex-col items-center text-center p-6">
          <motion.img 
            src="/myphoto.jpg" 
            alt="Your Photo" 
            className="w-52 h-52 rounded-full shadow-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.p 
            className="text-2xl mb-2 live-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ lineHeight: '1.5' }}
          >
            {displayedText}
          </motion.p>
          <div className="flex space-x-4 mt-4">
            <motion.a 
              href="https://github.com/Kalyanbabuallamudi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 transition duration-300 hover:text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/kalyan-babu-a4b574199" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 transition duration-300 hover:text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/kalyanbabu__?igsh=MXNuaGV6bG84Z2N2OQ=="
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 transition duration-300 hover:text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/profile.php?id=61557758402598&mibextid=ZbWKwL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 transition duration-300 hover:text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              <FaFacebook size={24} />
            </motion.a>
          </div>

          <motion.div 
            className="mt-10 p-6 bg-orange-200 rounded-lg shadow-lg text-left max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-gray-700 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {aboutMeText}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
