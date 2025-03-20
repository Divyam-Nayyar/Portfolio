import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Work Experience</h2>
        
        <div className="relative border-l-2 border-gray-200 pl-8 ml-4">
          <div className="mb-12">
            <div className="absolute w-8 h-8 bg-blue-500 rounded-full -left-4 flex items-center justify-center">
              <Briefcase size={16} className="text-white" />
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">ML Intern</h3>
                <span className="text-gray-600">Internship Studio (Remote)</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Improved video ad view forecasting accuracy by optimizing ML pipelines</li>
                <li>Worked on data preprocessing, feature engineering, and model training</li>
                <li>Used Scikit-learn, Pandas, NumPy, and AWS tools for deployment</li>
                <li>Collaborated with cross-functional teams to implement ML solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;