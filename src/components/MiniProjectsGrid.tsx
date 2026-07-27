import Link from 'next/link';
import {miniProjects} from '@/lib/data';

export default function MiniProjectsGrid() {
  return (
    <section id="mini-projects" className="px-6 py-24">
      <div className="mx-auto w-full max-w-3xl">
        <span className="font-mono text-xs tracking-widest text-amber">[ MINI-PROJECTS ]</span>
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">Bisa langsung dicoba</h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {miniProjects.map((mp) => (
            <Link key={mp.slug} href={`/mini-projects/${mp.slug}`} className="glass-panel group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl transition-transform hover:scale-[1.04]">
              <span className="text-3xl" aria-hidden="true">
                {mp.icon}
              </span>
              <span className="font-body text-sm font-medium text-ink-muted transition-colors group-hover:text-ink">{mp.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
