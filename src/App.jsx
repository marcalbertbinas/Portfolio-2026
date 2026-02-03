import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Projects from './Pages/Projects'
import About from './components/About';
import TechStack from './Pages/TechStack';
import { frontend,design, backend, devTools } from './Data/TechStackData';
import {projects} from './Data/ProjectsData'
import info from './assets/aboutImgs/info.png';

function App() {
  // Added dark:bg-[#111111] and dark:border-white/5
  const cardStyle = "bg-white dark:bg-[#111111] p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100/50 dark:border-white/5 transition-colors duration-300";
  
  return (
    // Added dark:bg-[#080808] and dark:text-gray-100
    <div className="bg-[#fcfcfc] dark:bg-[#080808] min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-100 transition-colors duration-300">
      
      <Routes>
        <Route path="/" element={
          <>
            <Header /> 
            <main className="max-w-7xl mx-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* LEFT COLUMN */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div className={cardStyle}>
                    <div className="flex items-center gap-2 mb-2 ml-4">
                      {/* Added dark:invert to make the info icon white */}
                      <img src={info} className='w-5 h-5 dark:invert' alt="info" /> 
                      <h2 className="text-lg font-bold tracking-tighter text-black dark:text-white">About</h2>
                    </div>
                    <div className="text-xs leading-tight text-gray-500 dark:text-gray-400 font-base">
                      <About /> 
                    </div>
                  </div>

                  <div className={cardStyle}>
                    <div className='flex justify-between mb-1 '>
                      <h2 className="text-lg font-bold mb-6 tracking-tighter text-black dark:text-white">Projects</h2>
                        <Link 
                              to="/projects" 
                              className="group relative w-fit text-[10px] font-bold text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white mb-10 transition-colors uppercase tracking-widest pb-1 inline-block"
                            >
                              View All
                              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black dark:bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
                        </Link>
                    </div>
  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projects.map((project, index) => (
                        <Link 
                          to={project.link} 
                          key={index} 
                          className="group flex flex-col p-5 rounded-xl border border-gray-100 dark:border-white/5 bg-[#fafafa] dark:bg-[#161616] hover:bg-white dark:hover:bg-[#1c1c1c] hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex flex-col gap-1 h-full">
                            <div className="flex justify-between items-start gap-2">
                              <h1 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors line-clamp-1">
                                {project.title}
                              </h1>
                              <span className="shrink-0 text-[9px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
                                {project.Status}
                              </span>
                            </div>
                            <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className={cardStyle}>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-bold tracking-tighter text-black dark:text-white">Tech Stack</h2>
                      <Link 
                        to="/full-stack" 
                        className="group relative w-fit text-[10px] font-bold text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest pb-1"
                      >
                        View All
                        <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black dark:bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
                      </Link>
                    </div>

                    <div className="space-y-6">
                      {[
                        { title: "Frontend", data: frontend },
                        { title: "Backend", data: backend },
                        { title: "develper Tools", data: devTools},
                        { title: 'Graphic Designing Tools', data: design}
                      ].map((section) => (
                        <div key={section.title}>
                          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                            {section.title}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {section.data.slice(0, 3).map((skill, index) => (
                              <div 
                                key={index} 
                                className="flex items-center gap-2 px-3 py-1.5 bg-[#fafafa] dark:bg-[#161616] border border-gray-100 dark:border-white/5 rounded-lg hover:bg-white dark:hover:bg-[#1c1c1c] hover:shadow-sm transition-all duration-300"
                              >
                                {skill.img && <img src={skill.img} alt="" className="w-3.5 h-3.5 object-contain" />}
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={cardStyle}>
                    <h2 className="text-lg font-bold mb-6 tracking-tighter text-black dark:text-white">Education & Activity</h2>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="w-1 bg-blue-500 rounded-full" />
                        <div>
                          <p className="font-bold text-xs uppercase tracking-tight text-gray-900 dark:text-gray-100">Polytechnic Institute of Tabaco</p>
                          <p className="text-[12px] text-gray-500 dark:text-gray-400 font-medium">3rd Year — BS Information Technology</p>
                          <p className="text-[12px] text-gray-400 dark:text-gray-500">2023 — Present</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-1 bg-gray-100 dark:bg-gray-800 rounded-full" />
                        <div>
                          <p className="font-bold text-xs uppercase tracking-tight text-gray-900 dark:text-gray-100">Independent Developer</p>
                          <p className="text-[12px] text-gray-500 dark:text-gray-400">Building Full-Stack Web Applications</p>
                          <p className="text-[12px] text-gray-400 dark:text-gray-500">Portfolio & Personal Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
        } />
        <Route path="/full-stack" element={<TechStack/>} />
        <Route path='/projects' element = {<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;