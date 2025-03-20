import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "PDF Buddy (Chat-with-PDFs-using-LLMs)",
    description: "Developed an AI-powered PDF processing system using LLMs for automated document analysis and intelligent summarization.",
    tools: ["TensorFlow", "LLM APIs", "HuggingFace", "Streamlit"],
    image: "./public/cwp.webp",
    github: "https://github.com/Divyam-Nayyar/Chatting_with_Multiple_PDFs",
    demo: "https://pdf-buddy-v3.streamlit.app/"
  },
  {
    title: "Music Recommendation System",
    description: "Used feature correlation, clustering, and dimensionality reduction for personalized music recommendations.",
    tools: ["Python", "Pandas", "Scikit-learn", "PCA", "K-Means"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    github: "https://github.com/Divyam-Nayyar/Music-Recommendation-System",
    demo: "https://github.com/Divyam-Nayyar/Music-Recommendation-System"
  },
  {
    title: "Pose Recognition Game",
    description: "Developed an AI-based pose detection game using MediaPipe & OpenCV for interactive fitness experiences.",
    tools: ["Python", "OpenCV", "MediaPipe", "Streamlit", "PyGame"],
    image: "./public/pm.webp",
    github: "https://github.com/Divyam-Nayyar/Pose-Master",
    demo: "https://github.com/Divyam-Nayyar/Pose-Master"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
