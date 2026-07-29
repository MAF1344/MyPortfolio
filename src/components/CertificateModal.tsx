'use client';

import {useEffect} from 'react';
import type {Certificate} from '@/lib/data';

export default function CertificateModal({cert, onClose}: {cert: Certificate; onClose: () => void}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="cert-modal-title" className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm" onClick={onClose}>
      <div className="glass-panel-strong w-full max-w-md rounded-3xl p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <span className="text-3xl" aria-hidden="true">
            🏅
          </span>
          <button onClick={onClose} aria-label="Tutup" className="font-mono text-sm text-ink-muted transition-colors hover:text-ink">
            ✕
          </button>
        </div>

        <h3 id="cert-modal-title" className="mt-4 font-display text-xl font-semibold text-ink">
          {cert.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-amber">{cert.issuer}</p>
        <p className="mt-1 font-body text-xs text-ink-muted">{cert.date}</p>
        <p className="mt-4 font-body text-sm leading-relaxed text-ink-muted">{cert.description}</p>
      </div>
    </div>
  );
}
