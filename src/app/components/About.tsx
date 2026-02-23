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
          I'm an M.Tech Computer Science graduate (CGPA 9.2) actively pursuing PhD opportunities in CSE with a focus on <span className="text-blue-600 font-semibold">AI/ML</span>. I aim to contribute to rigorous research and academic innovation while building practical, scalable intelligent systems.
          <br /><br />
          My work includes an AI-powered Hospital Automation System (JISEM, 2025) using Python, TensorFlow, REST APIs, and databases, and a Pathfinding Visualizer with BFS, A*, and Dijkstra. I also completed AI/ML and software development internships, deploying TensorFlow models on cloud platforms and optimizing real-time systems.
          <br /><br />
          I'm excited to collaborate with research labs, publish impactful work, and advance applied ML and NLP solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default About;