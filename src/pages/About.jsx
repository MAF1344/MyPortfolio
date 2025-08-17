import {motion} from 'framer-motion';

export default function About() {
  return (
    <motion.div className="p-8 max-w-2xl mx-auto" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-2 text-gray-700 leading-relaxed">
        I am a passionate Web Developer with a love for building modern, responsive, and interactive websites. I enjoy learning new technologies and constantly improving my skills to deliver high-quality projects.
      </p>

      <h3 className="mt-6 text-2xl font-semibold">Skills</h3>
      <ul className="grid grid-cols-2 gap-3 mt-3 text-gray-600">
        <li>HTML5 & CSS3</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>TailwindCss</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
    </motion.div>
  );
}
