'use client';

import {useState} from 'react';
import {certificates, type Certificate} from '@/lib/data';
import Reveal from '@/components/Reveal';
import CertificateModal from './CertificateModal';

// Track digandakan 2x supaya animasi marquee terlihat menyambung
// (seamless loop) tanpa jeda saat sampai di ujung.
const track = [...certificates, ...certificates];

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24">
      <Reveal>
        <div className="mx-auto w-full max-w-3xl px-6">
          <span className="font-mono text-xs tracking-widest text-amber">[ CERTIFICATES ]</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">Sertifikat & pencapaian</h2>
        </div>

        <div className="cert-marquee mt-8">
          <div className="cert-track">
            {track.map((cert, i) => (
              <button key={`${cert.slug}-${i}`} onClick={() => setSelected(cert)} className="cert-card flex w-64 shrink-0 flex-col gap-1.5 rounded-2xl px-5 py-4 text-left">
                <span className="text-2xl" aria-hidden="true">
                  🏅
                </span>
                <p className="line-clamp-2 font-display text-sm font-semibold text-ink">{cert.title}</p>
                <p className="font-mono text-xs text-amber">{cert.issuer}</p>
                <p className="font-body text-xs text-ink-muted">{cert.date}</p>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {selected && <CertificateModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
