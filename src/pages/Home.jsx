import {motion} from 'framer-motion';

export default function Home() {
  return (
    <motion.div className="p-8" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
      <h1 className="text-4xl font-bold">
        Hi, I'am <span className="text-blue-500">Muhammad Al Fatih</span>
      </h1>
      <p className="mt-3 text-lg text-gray-600">Web Developer | Tech Enthusiast | Problem Solver</p>

      <div className="mt-6">
        <a href="/projects" className="bg-blue-500 text-white px-6 py-3 rouded-lg hover:bg-blue-600 transition">
          View My Work
        </a>
      </div>
    </motion.div>
  );
}
