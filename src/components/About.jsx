import React from 'react'

function About() {
  return (
    <div>
        {/* Changed bg-white to bg-transparent and removed text-black */}
        {/* Added dark:text-gray-300 to ensure readability on dark backgrounds */}
        <section className="bg-transparent text-gray-700 dark:text-gray-300 py-10 px-6 max-w-3xl mx-auto font-sans transition-colors duration-300">
            
            {/* Paragraph 1: The Why */}
            <p className="text-[14px] mb-8 leading-relaxed">
                I am driven by the belief that technology is the ultimate tool for solving community challenges. My entry into programming wasn’t just about writing code; it was born from seeing real-world problems in Albay and realizing that digital solutions could bridge those gaps. My core mission is to build software that serves a purpose and provides genuine value to the people around me.
            </p>

            {/* Paragraph 2: The Stack & Projects */}
            <p className="text-[14px] mb-8 leading-relaxed">
                Currently, I am mastering a modern development stack featuring React, Vite, and Tailwind CSS, paired with Express.js and Supabase for backend logic and data management. I’ve already put this mindset into practice by developing a solution for local utility outages—a project that, while challenged by real-time data access, solidified my ability to identify problems and architect technical responses.
            </p>

            {/* Paragraph 3: The Person */}
            <p className="text-[14px] leading-relaxed">
                Beyond the editor, I am deeply curious about the rapidly evolving landscape of modern software. I find myself constantly analyzing the latest applications—not just as a user, but by deconstructing the logic and system architecture that make them seamless. This drive to understand the "how" behind current tech trends keeps me pushing to GitHub, always looking for the next challenge to solve and ways to optimize the digital experiences I build.
            </p>
        </section>
    </div>
  )
}

export default About