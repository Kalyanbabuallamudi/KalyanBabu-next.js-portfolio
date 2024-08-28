'use client';
import Link from 'next/link';
import Image from 'next/image';
import { internships } from '@/data/scripts';
import '../../styles/globals.css';


const Internships = () => {
  return (
    <section id="internships" className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Internships</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore some of my internships and their associated certificates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <div key={index} className="relative border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={internship.certificate}
                alt={`${internship.company} Certificate`}
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{internship.role}</h2>
              <p className="text-gray-500 mb-4">{internship.company}</p>
              <div className="absolute bottom-4 right-4">
                <a href={internship.certificate} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
