'use client';
import '../../styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Resume</h1>
        <p className="text-lg text-gray-600 mb-8">
          Interested in learning more about my experience? Download my resume using the link below.
        </p>
        <a
          href="/resume.pdf"
          download="Resume.pdf"  // This attribute triggers the download
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={faDownload} /> {/* Download icon */}
          Click to download my Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
