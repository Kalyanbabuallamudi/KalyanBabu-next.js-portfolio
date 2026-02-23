'use client';
import { skills } from '@/data/scripts';

const Skills = () => {
  // Add Java Full Stack as a featured skill
  const allSkills = [
    { name: 'Java Full Stack' },
    ...skills
  ];
  return (
    <section id="skills">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6">Skills</h1>
        <p className="text-lg mb-8">
          Explore some of the skills and technologies I’m proficient in.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl shadow-lg p-6 flex items-center justify-center text-lg font-bold transition-transform transform hover:scale-105 hover:shadow-2xl min-h-[80px] cursor-pointer border-2 border-transparent hover:border-white"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;