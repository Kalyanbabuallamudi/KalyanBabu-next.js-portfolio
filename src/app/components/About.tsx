'use client';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="text-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg leading-relaxed text-center max-w-3xl mx-auto text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-600 font-semibold">Kalyan Babu</span>!
          I'm a web developer specializing in <span className="text-blue-600 font-semibold">Next.js</span> and <span className="text-blue-600 font-semibold">React</span>, dedicated to crafting engaging and user-friendly web applications. My passion lies in delivering high-quality, innovative solutions that make a difference.
          <br /><br />
          I love exploring new technologies, contributing to open-source projects, and staying ahead of the curve in web development. I'm always eager to learn, grow, and collaborate on exciting projects.
          <br /><br />
          Let's connect and create something amazing together!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
