'use client';
import Image from 'next/image';
import '../../styles/globals.css';
import { certifications } from '@/data/scripts';

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Certifications</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore some of my certifications and achievements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <div key={index} className="relative border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={certification.image}
                alt={`${certification.title} Certificate`}
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{certification.title}</h2>
              <p className="text-gray-500 mb-4">{certification.issuer}</p>
              <div className="absolute bottom-4 right-4">
                <a href={certification.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
