'use client'; // Ensure this file is treated as a client component in Next.js

import React from 'react';
import '../../styles/globals.css';

const Contact = () => {
  return (
    <section id="contact">
      <h1>Email Me</h1>
      <div className="contact-container">
        <p>
          If you have any queries, let me know, mail me at{' '}
          <a
            href="mailto:allamudikalyanbabu56@gmail.com"
          >
            allamudikalyanbabu56@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
