import React from 'react'
import {projects} from '../Data/ProjectsData'
import {Link} from 'react-router-dom'

function Projects() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#080808] py-12 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        <Link to="/" className="group relative w-fit text-[10px] font-bold text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white mb-10 transition-colors uppercase tracking-widest pb-1 inline-block">
          ← Back to Overview
          <span className="absolute bottom-0 right-0 h-[1.5px] w-0 bg-black dark:bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
        </Link>

        <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white mb-8">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Link 
              to={project.link} 
              key={index} 
              className="group flex flex-col justify-between p-6 rounded-xl border border-gray-100 dark:border-white/5 bg-white dark:bg-[#111111] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold uppercase">
                    {project.Status}
                  </span>
                </div>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-snug line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects