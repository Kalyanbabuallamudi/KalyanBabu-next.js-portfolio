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

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const handleVideoClick = (index: number) => {
    setActiveProjectIndex(index);
  };

  const handleCloseVideo = () => {
    setActiveProjectIndex(null);
  };

  return (
    <section id="projects">
      <div className="container">
        <h1>Projects</h1>
        <p>Discover some of my projects and the technologies I've used.</p>
        <div className="grid">
          {projects.map((project, index) => (
            <AnimatedCard key={index} className={project.className}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <Image
                    key={idx}
                    src={tech}
                    alt="Technology"
                    width={60}
                    height={60}
                    className="technologyImage"
                  />
                ))}
              </div>
              <div className="githubLink">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/github.png" // Replace with your GitHub icon path
                    alt="GitHub"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              <div className="videoWrapper" onClick={() => handleVideoClick(index)}>
                <p>Watch Video</p>
              </div>
              {activeProjectIndex === index && (
                <div className="videoOverlay" onClick={handleCloseVideo}>
                  <video controls className="videoPlayer" onClick={(e) => e.stopPropagation()}>
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
