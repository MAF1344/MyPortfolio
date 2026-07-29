'use client';

import {useEffect} from 'react';
import type {Certificate} from '@/lib/data';
import Image from 'next/image';

export default function CertificateModal({cert, onClose}: {cert: Certificate; onClose: () => void}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="cert-modal-title" className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 px-6 backdrop-blur-sm" onClick={onClose}>
      <div className="my-8 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="glass-panel-strong rounded-3xl p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="text-3xl" aria-hidden="true">
              🏅
            </span>
            <button onClick={onClose} aria-label="Tutup" className="font-mono text-sm text-ink-muted transition-colors hover:text-ink">
              ✕
            </button>
          </div>
          {cert.image ? (
            <div className="mt-4 flex items-center justify-center overflow-hidden rounded-2xl max-h-[55vh]">
              <Image src={cert.image} alt={`Sertifikat ${cert.title}`} width={640} height={420} className="block h-auto w-full max-h-[55vh] object-contain" />
            </div>
          ) : (
            <div className="mt-4 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/15">
              <p className="font-mono text-xs text-ink-muted">Foto sertifikat belum ditambahkan</p>
            </div>
          )}
          <h3 id="cert-modal-title" className="mt-4 font-display text-xl font-semibold text-ink">
            {cert.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-amber">{cert.issuer}</p>
          <p className="mt-1 font-body text-xs text-ink-muted">{cert.date}</p>
          <p className="mt-4 font-body text-sm leading-relaxed text-ink-muted">{cert.description}</p>
        </div>
      </div>
    </div>
  );
}
