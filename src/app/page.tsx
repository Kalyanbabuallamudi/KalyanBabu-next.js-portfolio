"use client";

import Link from 'next/link';
import ThreeBackground from './components/ThreeBackground';
import Home from './components/Home';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './Navbar';


const Footer = () => (
  <footer className="footer">
    <p className="footer-heading">© 2024 Kalyan Babu made with ❤️</p>
  </footer>
);


export default function Page() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <Home />
      <Resume />
      <Projects />
      <Internships />
      <Certifications />
      <Skills />
      <Education />
      <Contact />
      <Footer />

    </>
  );
}
