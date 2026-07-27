import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsList from "@/components/ProjectsList";
import MiniProjectsGrid from "@/components/MiniProjectsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsList />
        <MiniProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
