"use client";

import { useState } from 'react';
import Link from 'next/link';
import ThreeBackground from './components/ThreeBackground';
import Home from './components/Home'; // Correct the import path if necessary
import Projects from './components/Projects';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Education from './components/Education';

import Contact from './components/Contact';


// Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(0, 100, 0, 0.8)', zIndex: 1000 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', alignItems: 'center' }}>
        <button onClick={toggleMenu} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
        </button>
        <div style={{ display: isOpen ? 'block' : 'none', position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '1rem', textAlign: 'center' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#internships" onClick={toggleMenu}>Internships</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#skills" onClick={toggleMenu}>Skills</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#education" onClick={toggleMenu}>Education</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};




// Footer component
const Footer = () => (
  <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#ffffff', color: '#333333' }}>
    <p>© 2024 Kalyan Babu made with ❤️</p>
  </footer>
);




// Main Page component
export default function Page() {
  return (
    <>
    <ThreeBackground />
      <Navbar />
      <Home />
      <Projects />
      <Internships />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
