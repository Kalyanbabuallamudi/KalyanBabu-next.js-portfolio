'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { projects } from '@/data/scripts'; // Use the imported `projects` array here
import '../../styles/globals.css';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string; // className is optional
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className }) => {
  const [styles, api] = useSpring(() => ({
    transform: 'scale(1)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }));

  return (
    <animated.div
      className={`card ${className}`}
      style={styles}
      onMouseEnter={() =>
        api.start({ transform: 'scale(1.05)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' })
      }
      onMouseLeave={() =>
        api.start({ transform: 'scale(1)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' })
      }
    >
      {children}
    </animated.div>
  );
};

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const handleVideoClick = (index: number) => {
    setActiveProjectIndex(index);
  };

  return (
    <section id={id} className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-center text-primary mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <Image
                  src={project.technologies[0]}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-neutral mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <button
                    onClick={() => handleVideoClick(index)}
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors duration-300"
                  >
                    View Demo
                  </button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
