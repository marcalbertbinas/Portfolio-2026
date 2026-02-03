// src/data/TechData.js

// --- FRONTEND ---
import htmlLogo from '../assets/aboutimgs/html.png';
import cssLogo from '../assets/aboutimgs/css-3.png';
import jsLogo from '../assets/aboutimgs/js.png';
import reactLogo from '../assets/aboutimgs/atom.png';
import tailwindLogo from '../assets/aboutimgs/tailwind.png';
import viteLogo from '../assets/aboutimgs/vite.png';

// --- BACKEND --- (Check if these have spaces in the actual filenames!)
import expressLogo from '../assets/aboutimgs/express.png'; 
import supabaseLogo from '../assets/aboutimgs/supabase.png';
import nodeLogo from '../assets/aboutimgs/node.png';

// --- DESIGN ---
import psLogo from '../assets/aboutimgs/ps.png';
import aiLogo from '../assets/aboutimgs/illustrator.png';
import mayaLogo from '../assets/aboutimgs/maya.png';

// --- DEV TOOLS ---
import gitLogo from '../assets/aboutimgs/git.png';
import githubLogo from '../assets/aboutimgs/github.png';
import vscodeLogo from '../assets/aboutimgs/vscode.png';

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