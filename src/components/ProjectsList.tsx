import Link from 'next/link';
import {projects} from '@/lib/data';
import Reveal from '@/components/Reveal';

export default function ProjectsList() {
  return (
    <section id="projects" className="px-6 py-24">
      <Reveal>
        <div className="mx-auto w-full max-w-3xl">
          <span className="font-mono text-xs tracking-widest text-teal">[ PROJECTS ]</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">Apa yang pernah aku kerjakan</h2>

          <ul className="mt-8 flex flex-col gap-3">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="glass-panel group flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-colors hover:bg-white/8">
                  <div>
                    <p className="font-display text-lg font-medium text-ink">{project.title}</p>
                    <p className="mt-1 font-mono text-xs text-ink-muted">{project.tag}</p>
                  </div>
                  <span className="font-body text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-ink">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
