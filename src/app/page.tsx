import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsList from '@/components/ProjectsList';
import MiniProjectsGrid from '@/components/MiniProjectsGrid';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsList />
        <MiniProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
