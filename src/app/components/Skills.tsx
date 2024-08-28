'use client';
import Image from 'next/image';
import { skills } from '@/data/scripts';

const Skills = () => {
  return (
    <section id="skills">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6">Skills</h1>
        <p className="text-lg mb-8">
          Explore some of the skills and technologies I’m proficient in.
        </p>
        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={120}
                height={120}
              />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
