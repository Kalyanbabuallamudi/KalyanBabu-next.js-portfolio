import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../../styles/globals.css';
import { texts, aboutMeSentences } from '@/data/scripts';


const HomeSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [aboutMeText, setAboutMeText] = useState('');
  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const aboutMeTypingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typingSpeed = 80;
    const pauseDuration = 1000;

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

  useEffect(() => {
    const aboutMeTypingSpeed = 60;
    const aboutMePauseDuration = 1800;

    const typeAboutMeSentence = () => {
      let charIndex = 0;
      setAboutMeText('');

      aboutMeTypingRef.current = setInterval(() => {
        setAboutMeText((prev) => {
          const sentence = aboutMeSentences[currentSentenceIndex];
          if (charIndex < sentence.length) {
            charIndex += 1;
            return sentence.slice(0, charIndex);
          } else {
            clearInterval(aboutMeTypingRef.current as NodeJS.Timeout);
            aboutMeTypingRef.current = setTimeout(() => {
              setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % aboutMeSentences.length);
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
      <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-500 to-purple-600 pt-20">
        {/* Added padding-top to ensure content doesn't overlap with the navbar */}
        {/* Left Side: Profile and About Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-white">
          <motion.img
            src="/myphoto.jpg"
            height="100%"
            alt="Your Profile Photo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg transition-transform duration-500 hover:scale-110"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.p
            className="mt-6 text-lg md:text-2xl font-bold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {displayedText}
          </motion.p>

          <div className="flex mt-4 space-x-4">
            {[{
              href: 'https://github.com/Kalyanbabuallamudi',
              icon: <FaGithub size={24} />
            }, {
              href: 'https://www.linkedin.com/in/kalyan-babu-a4b574199',
              icon: <FaLinkedin size={24} />
            }, {
              href: 'https://www.instagram.com/kalyanbabu__?igsh=MXNuaGV6bG84Z2N2OQ==',
              icon: <FaInstagram size={24} />
            }, {
              href: 'https://www.facebook.com/profile.php?id=61557758402598&mibextid=ZbWKwL',
              icon: <FaFacebook size={24} />
            }].map(({ href, icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="max-w-md p-6 mt-10 bg-white rounded-lg shadow-lg backdrop-blur-md bg-opacity-20 transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="mb-4 text-xl md:text-2xl font-bold text-center">About Me</h2>
            <p className="text-base md:text-lg text-gray-200">{aboutMeText}</p>
          </motion.div>
        </div>

        {/* Right Side: Stats Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <motion.div
            className="flex flex-col items-center space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* GitHub Streak 🔥 */}
            <div className="github-streak-container">
              <h2 className="text-white text-2xl md:text-3xl font-bold">GitHub Streak 🔥</h2>
              <p className="text-white text-base md:text-lg">
                Consistent contributions are a testament to my dedication and passion for coding.
                Check out my GitHub streak, showcasing my commitment and relentless drive to improve
                my skills every day.
              </p>
              <div className="streak-image-wrapper" title="Click to view my GitHub profile!">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com?user=Kalyanbabuallamudi&theme=dark"
                  alt="GitHub Streak"
                  className="rounded-lg shadow-lg streak-image transition-transform duration-500 hover:scale-110"
                />
              </div>
              <a
                href="https://github.com/Kalyanbabuallamudi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-profile-button mt-6">
                  View My GitHub Profile
                </button>
              </a>
            </div>

            <style jsx>{`
              .github-streak-container {
                text-align: center;
                padding: 20px;
                background-color: #2d3748;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              }
              .streak-image-wrapper {
                position: relative;
                display: inline-block;
              }
              .streak-image {
                cursor: pointer;
                transition: transform 0.3s;
              }
              .streak-image:hover {
                transform: scale(1.05);
              }
              .view-profile-button {
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s;
              }
              .view-profile-button:hover {
                background-color: #45a049;
              }
            `}</style>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
