'use client';
import Image from 'next/image';
import { educationData } from '@/data/scripts'; // Adjust the path as necessary

const Education = () => {
  return (
    <section id="education" className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="shadow-lg rounded-lg p-6 flex flex-col items-start">
              <div className="flex items-center mb-4">
                <Image 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`} 
                  width={100} 
                  height={100} 
                  className="mr-4" 
                />
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{edu.degree}</h3>
                  <p className="text-gray-700 mb-1">{edu.institution}</p>
                  <p className="text-gray-500 mb-2">{edu.duration}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
