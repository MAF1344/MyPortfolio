import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsList from '@/components/ProjectsList';
import MiniProjectsGrid from '@/components/MiniProjectsGrid';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certificates from '../components/Certificates';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsList />
        <MiniProjectsGrid />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
