// src/data/TechData.js
// --- FRONTEND ---
import htmlLogo from '../assets/AboutImgs/html.png';
import cssLogo from '../assets/AboutImgs/css-3.png';
import jsLogo from '../assets/AboutImgs/js.png';
import reactLogo from '../assets/AboutImgs/atom.png';
import tailwindLogo from '../assets/AboutImgs/tailwind.png';
import viteLogo from '../assets/AboutImgs/vite.png';

// --- BACKEND ---
import expressLogo from '../assets/AboutImgs/Express Js.png';
import supabaseLogo from '../assets/AboutImgs/Supabase Icon.png';
import nodeLogo from '../assets/AboutImgs/node.png';

// --- DESIGN ---
import psLogo from '../assets/AboutImgs/ps.png';
import aiLogo from '../assets/AboutImgs/illustrator.png';
import mayaLogo from '../assets/AboutImgs/Autodesk Maya.png';

// --- DEV TOOLS ---
import gitLogo from '../assets/AboutImgs/Git.png';
import githubLogo from '../assets/AboutImgs/github.png';
import vscodeLogo from '../assets/AboutImgs/Visual Studio Code.png';

export const frontend = [
  { name: 'HTML5', img: htmlLogo, desc: 'Semantic web structures.' },
  { name: 'CSS3', img: cssLogo, desc: 'Responsive styling and layouts.' },
  { name: 'JavaScript', img: jsLogo, desc: 'Logic and dynamic interactivity.' },
  { name: 'React', img: reactLogo, desc: 'Component-based UI development.' },
  { name: 'Tailwind CSS', img: tailwindLogo, desc: 'Utility-first styling.' },
  { name: 'Vite', img: viteLogo, desc: 'Fast modern build tooling.' },
];

export const backend = [
  { name: 'Express.js', img: expressLogo, desc: 'REST API development.' },
  { name: 'Supabase', img: supabaseLogo, desc: 'Auth and Real-time Database.' },
  { name: 'Node.js', img: nodeLogo, desc: 'Server-side execution.' },
];

export const design = [
  { name: 'Photoshop', img: psLogo, desc: 'Image editing and manipulation.' },
  { name: 'Illustrator', img: aiLogo, desc: 'Vector graphics and branding.' },
  { name: 'Autodesk Maya', img: mayaLogo, desc: '3D modeling and animation.' },
];

export const devTools = [
  { name: 'Git', img: gitLogo, desc: 'Local version control.' },
  { name: 'GitHub', img: githubLogo, desc: 'Repository hosting and collaboration.' },
  { name: 'VS Code', img: vscodeLogo, desc: 'Primary development environment.' },
];