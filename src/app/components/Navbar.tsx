// Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        {/* Add your hamburger icon here */}
        <span className="hamburger-icon">&#9776;</span> {/* Example icon */}
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/internships">Internships</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/education">Education</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
