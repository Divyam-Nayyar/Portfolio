import React from 'react';
import { Code2, Database, Cloud, Brain } from 'lucide-react';

const skills = [
  {
    category: "Languages & Tools",
    items: ["Python", "AWS", "MySQL", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "AI/ML Domains",
    items: ["NLP", "Computer Vision", "Deep Learning", "Data Analytics"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker"]
  },
  {
    category: "Web & Visualization",
    items: ["Gradio", "Flask", "Streamlit"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              As a Computer Science & Engineering student at VIT Bhopal, I've developed a deep passion 
              for artificial intelligence and machine learning. My journey in tech has been driven by 
              the desire to create innovative solutions that make a real impact in industries like 
              manufacturing and fintech.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Code2 size={20} className="text-blue-600" />
                <span className="text-blue-900">AWS Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                <Brain size={20} className="text-green-600" />
                <span className="text-green-900">Top 5%ile in Round 1 Adobe Gensolve Hackthon</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;