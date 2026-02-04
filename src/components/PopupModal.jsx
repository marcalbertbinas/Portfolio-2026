import React from 'react'
import closeBTN from '../assets/projectimgs/closeBTN.png'

function PopupModal({ project, onClose }) {
  // 1. Guard Clause: If no project is selected, don't render anything.
  // This stops the "cannot read title of null" error.
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-[#111111] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative">
        
        {/* Close Button - Added onClick and styling */}
        {/* Close Button */}
<button 
  onClick={onClose}
  /* Style the button container for the background logic */
  className="absolute top-4 right-4 p-.5 rounded-full transition-all duration-300 
             bg-black dark:bg-white cursor-pointer
             shadow-lg z-10 group"
>
  <img 
    src={closeBTN} 
    alt="close button" 
    /* Style the icon itself */
    className="h-4.5 w-4.5 transition-all duration-300
               invert dark:invert-0 
               opacity-80 group-hover:opacity-100" 
  />
</button>

        <div className='flex flex-col md:flex-row p-6 gap-6'>
          
          {/* Project Image in Modal */}
          <div className="w-full md:w-1/2 shrink-0">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-48 md:h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tighter text-black dark:text-white">
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mt-2">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, index) => (
                <div 
                  key={index}
                  className="px-3 py-1 bg-[#fafafa] dark:bg-[#161616] border border-gray-100 dark:border-white/5 rounded-lg text-[11px] font-medium text-gray-600 dark:text-gray-300"
                >
                  {t}
                </div>
              ))}
            </div>

            {/* View Project Link */}
            {project.link && (
            <div className='flex gap-1'>
              <p className="mt-2 text-[12px] font-bold text-black dark:text-white">
                Visit Live Project →
              </p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className='mt-2 text-[12px] font-base hover:underline dark:text-blue-600'
              >
                {project.link}
              </a>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupModal