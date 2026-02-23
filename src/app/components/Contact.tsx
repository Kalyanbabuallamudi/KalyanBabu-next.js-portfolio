'use client'; // Ensure this file is treated as a client component in Next.js

import React from 'react';

const Contact = () => {
  const email = 'allamudikalyanbabu56@gmail.com';
  const subject = 'Professional Inquiry';
  const body = "Hello Kalyan,\n\nI came across your portfolio and would like to connect regarding professional opportunities.\n\nBest regards,\n[Your Name]";

  return (
    <section id="contact" className="bg-background py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-primary mb-8">Contact Me</h2>
        <p className="text-lg text-neutral mb-4">Feel free to reach out for professional opportunities or collaborations.</p>
        <a
          className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors duration-300"
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        >
          📧 Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
