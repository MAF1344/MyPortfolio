'use client';

import Link from 'next/link';
import {miniProjects} from '@/lib/data';
import {useState} from 'react';

export default function MiniProjectsGrid() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="mini-projects" className="px-6 py-24">
      <div className="mx-auto w-full max-w-3xl">
        <span className="font-mono text-xs tracking-widest text-amber">[ MINI-PROJECTS ]</span>
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">Bisa langsung dicoba</h2>

        <div className="relative mt-8">
          {/* --- BAGIAN INI DIHAPUS (Tidak perlu overlay) --- */}
          {/* {!showAll && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-paper to-transparent" />
          )} */}

          <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${!showAll ? 'max-h-[480px] overflow-hidden sm:max-h-[320px]' : ''}`}>
            {miniProjects.map((mp, index) => {
              // Logika deteksi preview card (sudah benar di kode Anda)
              const isPreview = !showAll && index >= 3;

              return (
                <Link
                  key={mp.slug}
                  href={`/mini-projects/${mp.slug}`}
                  // Terapkan masking hanya jika isPreview true
                  className={`glass-panel group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl transition-all hover:scale-[1.04] 
                    ${isPreview ? 'mask-card-fade' : ''}
                  `}>
                  <span className="text-3xl" aria-hidden="true">
                    {mp.icon}
                  </span>
                  <span className="font-body text-sm font-medium text-ink-muted transition-colors group-hover:text-ink">{mp.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {miniProjects.length > 3 && (
          <div className="mt-4 flex justify-center">
            <button onClick={() => setShowAll(!showAll)} className="glass-panel rounded-full px-6 py-3 font-body text-sm font-medium text-ink-muted transition-colors hover:text-ink hover:shadow-lg">
              {showAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
