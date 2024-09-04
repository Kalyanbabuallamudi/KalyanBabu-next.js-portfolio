"use client";

import { useState } from 'react';
import Link from 'next/link';
import '../styles/navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <button onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#resume" onClick={toggleMenu}>Resume</Link></li>
            <li><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link href="#internships" onClick={toggleMenu}>Internships</Link></li>
            <li><Link href="#certifications" onClick={toggleMenu}>Certifications</Link></li>
            <li><Link href="#skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link href="#education" onClick={toggleMenu}>Education</Link></li>
            <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
