import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="AI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          AI & ML Engineer
          <br />
          <span className="text-blue-400">Data Enthusiast & Cloud Practitioner</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mb-8">
          I am a Computer Science & Engineering student specializing in AI & ML with experience in NLP, 
          Data Analysis, and Cloud Computing. Passionate about leveraging AI to solve real-world problems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            View Projects
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="https://drive.google.com/file/d/1pBXpRLJdqCJM5X0pJPgP8BcgrZCQWozq/view?usp=sharing"
            className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;