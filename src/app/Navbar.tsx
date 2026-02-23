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
    <nav className="bg-primary text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-heading">Kalyan Babu Allamudi Portfolio</div>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-accent"
          title="Toggle Navigation Menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            {([
              { href: "#home", label: "Home" },
              { href: "#resume", label: "Resume" },
              { href: "#projects", label: "Projects" },
              { href: "#internships", label: "Internships" },
              { href: "#certifications", label: "Certifications" },
              { href: "#skills", label: "Skills" },
              { href: "#education", label: "Education" },
              { href: "#contact", label: "Contact" },
            ]).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-accent transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;