import {motion} from 'framer-motion';
import {div} from 'framer-motion/client';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'This is my portfolio website. It is built with React.js and TailwindCss.',
    link: '#',
  },
  {
    title: 'E-commerce Website',
    description: 'This is an e-commerce website. It is built with React.js and Node.js.',
    link: '#',
  },
  {
    title: 'Blog Website',
    description: 'This is a blog website. It is built with React.js and MongoDB.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <motion.div className="p-8 max-w-4xl mx-auto" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((projects, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-5 border border-gray-200">
            <h3 className="text-xl font-semibold">{projects.title}</h3>
            <p className="mt-2 text-gray-600">{projects.description}</p>
            <a href={projects.link} className="inline-block mt-3 text-blue-500 hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
