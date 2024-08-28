"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      backgroundColor: 'rgba(0, 110, 0, 0.8)', 
      zIndex: 1000, 
      marginBottom: '20px' // Add margin to the bottom
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '1rem', 
        alignItems: 'center' 
      }}>
        <button 
          onClick={toggleMenu} 
          style={{ 
            backgroundColor: 'transparent', 
            border: 'none', 
            cursor: 'pointer' 
          }}
        >
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0' }}></div>
        </button>
        <div style={{ 
          display: isOpen ? 'block' : 'none', 
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          right: 0, 
          backgroundColor: 'rgba(34, 139, 34, 0.9)', 
          padding: '1px', 
          textAlign: 'center' 
        }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#internships" onClick={toggleMenu}>Internships</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#skills" onClick={toggleMenu}>Skills</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#education" onClick={toggleMenu}>Education</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#about" onClick={toggleMenu}>About</Link></li>
            <li style={{ margin: '10px 0' }}><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
