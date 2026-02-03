import React from 'react';
import { Link } from 'react-router-dom';
import { frontend, backend, devTools, design } from '../Data/TechStackData';

function TechStack() {
  const allSections = [
    { title: "Frontend", data: frontend },
    { title: "Backend", data: backend },
    { title: "Tools", data: devTools },
    { title: "Design", data: design }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#080808] py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        <Link 
          to="/" 
          className="group relative w-fit text-[10px] font-bold text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white mb-10 transition-colors uppercase tracking-widest pb-1 inline-block"
        >
          ← Back to Overview
          <span className="absolute bottom-0 right-0 h-[1.5px] w-0 bg-black dark:bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
        </Link>
        
        <h1 className="text-3xl font-bold tracking-tighter text-black dark:text-white mb-16">Technical Stack</h1>

        <div className="flex flex-col gap-14">
          {allSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                {section.title}
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {section.data.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center cursor-pointer gap-3 px-4 py-2.5 bg-[#fafafa] dark:bg-[#111111] border border-gray-100 dark:border-white/5 rounded-xl hover:bg-white dark:hover:bg-[#1c1c1c] hover:shadow-md dark:hover:border-white/10 transition-all duration-300"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {skill.img && <img src={skill.img} className="w-full h-full object-contain" alt="" />}
                    </div>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;