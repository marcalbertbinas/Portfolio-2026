import React from 'react';
import Profilee from '../assets/Profilee.jpg';
import { Github, Facebook, Mail } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

function Header() {
  return (
    // Changed 'flex' to 'flex flex-col md:flex-row' to allow stacking on mobile
    <div className='flex flex-col md:flex-row w-[90%] min-h-fit py-10 shadow-sm mx-auto bg-white dark:bg-[#111111] border border-transparent dark:border-white/5 rounded-xl mt-10 px-6 md:px-10 transition-colors duration-300 gap-8 md:gap-0'>
      <header className='flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-0'>
        
        {/* LEFT SIDE: Identity & Avatar */}
        <div className='flex flex-col md:flex-row items-center gap-7'>
          <div className="relative">
            <img 
              className='h-32 w-32 rounded-full object-cover border-4 border-gray-50 dark:border-[#1a1a1a] shadow-sm shrink-0' 
              src={Profilee} 
              alt="Marc Albert B. Biñas" 
            />
          </div>

          <div className="flex flex-col gap-1 text-center md:text-left">
            {/* Status Badge */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-600/80 dark:text-green-400/80">
                Available for Projects
              </span>
            </div>

            <h1 className="font-extrabold text-4xl tracking-tight text-black dark:text-white sm:text-5xl">
              Marc Albert B. Biñas
            </h1>
            
            <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-300 tracking-tight">
                Full Stack Developer
              </p>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <p className="text-sm text-gray-400 dark:text-gray-500 font-normal">
                Albay, Philippines
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Socials & Call to Action */}
        <div className='flex flex-col items-center md:items-end gap-4'>
          <ThemeToggle/>
          <div className='flex gap-3'>
            <a 
              href="https://github.com/marcalbertbinas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-black dark:hover:bg-white transition-all duration-300"
              title="GitHub"
            >
              <Github size={20} className="text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
            </a>

            <a 
              href="https://www.facebook.com/share/1834HrGPUD/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-[#1877F2] transition-all duration-300"
              title="Facebook"
            >
              <Facebook size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>

            <a 
              href="mailto:marcalbertbinas@email.com" 
              className="group p-3 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-[#EA4335] transition-all duration-300"
            >
              <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
          
          <button 
            onClick={() => window.location.href = 'mailto:marcalbertbinas@email.com'}
            className="px-6 py-2.5 bg-white dark:bg-transparent border border-gray-200 dark:border-white/10 text-black dark:text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm"
          >
            Hire Me
          </button>
        </div>

      </header>
    </div>
  );
}

export default Header;